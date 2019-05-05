import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from  '@angular/common/http';

import { RolAsignado } from './rolAsignado';
import { Red } from '../red/red';
import { Usuario } from './usuario';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AsignacionService {

  private asignaciones: Array<RolAsignado> = [];

  constructor(private httpClient: HttpClient) { }

  getAsignaciones(): Promise<RolAsignado[]> {

    let options = {
        headers: new HttpHeaders({
          'content-type': 'application/json'
        })
      };

    return new Promise((resolve, reject) => {
      this.httpClient.get(`${environment.apiUrl}asignaciones/`, options).subscribe((data: any) => {
        this.asignaciones = [];
        data.context.forEach( dataItem => {
          let asignacion1 = new RolAsignado();
          asignacion1.fechaInicio = dataItem.fecha_inicio;
          asignacion1.fechaFin = dataItem.fecha_fin === null ? '' : dataItem.fecha_fin;
          asignacion1.rol = dataItem.rol.nombre;
          let red = new Red();
          red.id = dataItem.red.id;
          red.nombre = dataItem.red.nombre;
          red.nombreCorto = dataItem.red.nombre_corto;
          red.descripcion = dataItem.red.descripcion;
          red.fechaInicio = dataItem.red.fecha_inicio;
          red.fechaCierre = dataItem.red.fecha_cierre;
          red.fechaCreacion = '';
          red.porcentajeAvance = dataItem.red.porcentaje_avance;
          red.tipo = dataItem.red.tipo;
          red.solicitante = dataItem.red.solicitante;
          red.horasTrabajadas = dataItem.red.horas_trabajadas;
          red.horasEstimadas = dataItem.red.horas_estimadas;
          red.proyectoConectate = undefined;
          red.historialEstados = undefined;
          red.fase = '';
          asignacion1.red = red;
          let usuario = new Usuario();
          usuario.nombres = dataItem.usuario.usuario.first_name;
          usuario.email = dataItem.usuario.usuario.email;
          usuario.apellidos = dataItem.usuario.usuario.last_name;
          usuario.tipoIdentificacion = dataItem.usuario.tipo_identificacion;
          usuario.numeroIdentificacion = dataItem.usuario.numero_identificacion;
          asignacion1.usuario = usuario;
          this.asignaciones.push(asignacion1);
        });
        resolve(this.asignaciones);
      }, err => {
        reject(err);
      });
    });
  }
}
