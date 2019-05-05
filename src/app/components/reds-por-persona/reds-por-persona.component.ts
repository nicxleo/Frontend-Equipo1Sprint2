import { Component, OnInit } from '@angular/core';
import { RolAsignado } from '../../services/rolAsignado/rolAsignado';
import { Usuario } from '../../services/rolAsignado/usuario';
import { Red } from '../../services/red/red';
import { AsignacionService } from '../../services/rolAsignado/asignacion.service';

declare function setup(): any;

@Component({
  selector: 'app-reds-por-persona',
  templateUrl: './reds-por-persona.component.html',
  styleUrls: ['./reds-por-persona.component.css']
})
export class RedsPorPersonaComponent implements OnInit {
  asignaciones: RolAsignado[] = [];
  asignFiltradas: RolAsignado[] = [];
  usuarios: Usuario[] = [];
  valor: string = '';

  initUsuarios() {
    for (let asign of this.asignaciones) {
      let usr = asign.usuario;
      if (
        this.usuarios.filter(
          u => u.numeroIdentificacion === usr.numeroIdentificacion
        ).length === 0
      ) {
        this.usuarios = this.usuarios.concat(usr);
      }
    }
  }

  onChangeUsuario(id: string) {
    this.valor = id;
    this.asignFiltradas = this.asignaciones.filter(
      asign => asign.usuario.numeroIdentificacion === id
    );
  }

  getAsignaciones(): void {
    this.asignacionService
      .getAsignaciones()
      .then(asignaciones => {
        console.log(asignaciones);

        this.asignaciones = asignaciones;
        this.initUsuarios();
      })
      .catch(err => console.log(err));
  }

  constructor(private asignacionService: AsignacionService) {}

  ngOnInit() {
    setup();
    this.getAsignaciones();
  }
}
