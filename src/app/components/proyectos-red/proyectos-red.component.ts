import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ProyectoRed} from "../../services/proyectoRed/proyecto-red.model";
import {DetalleRed} from "../../services/red/detalle-red/detalle-red.model";
import {ProyectosRedService} from "../../services/proyectoRed/proyectos-red/proyectos-red.service";
import {DetalleRedService} from "../../services/red/detalle-red/detalle-red.service";
import {Location} from "@angular/common"

declare function setup(): any;

/**
 * Componente para mostrar el listado de Proyectos del RED.
 */
@Component({
  selector: 'app-proyectos-red',
  templateUrl: './proyectos-red.component.html',
  styleUrls: ['./proyectos-red.component.css']
})
export class ProyectosRedComponent implements OnInit {

  proyectos: ProyectoRed[];
  detalleRed: DetalleRed;
  idRed: number;

  constructor(private route: ActivatedRoute,
              private proyectosRedService: ProyectosRedService,
              private detalleRedService: DetalleRedService,
              private location: Location) { }

  ngOnInit() {
    setup();
    this.idRed = this.route.snapshot.params['idRed'];
    this.getProyectosRed();
    this.getDetalleRed();
  }

  getProyectosRed(): void {
    this.proyectosRedService.getProyectosRed(this.idRed)
      .subscribe(proyectos => this.proyectos = proyectos);
  }

  getDetalleRed(): void {
    this.detalleRedService.getDetalleRed(this.idRed)
      .subscribe(detalleRed => this.detalleRed = detalleRed);
  }

  goBack(): void {
    this.location.back()
  }

}
