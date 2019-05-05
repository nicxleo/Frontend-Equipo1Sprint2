import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import {ProyectoRed} from './../proyecto-red.model';

@Injectable({
  providedIn: 'root'
})
export class ProyectosRedService {
  API_URL = environment.apiUrl + 'detallered/proyectos/';
  private proyectosRed: Array<ProyectoRed> = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  // Metodo que invoca al servicio que obtiene los proyectos RED
  getProyectosRed(idRed: number): Observable<ProyectoRed[]> {
    let params = new HttpParams();
    params = params.append('RED', idRed.toString());
    this.proyectosRed = [];
    this.httpClient.get(this.API_URL, {params} ).subscribe((data: Array<any>) => {
      data.forEach(dataItem => {
        const pro = new ProyectoRed();
        pro.id = dataItem.id;
        pro.name = dataItem.name;
        pro.autor = dataItem.autor;
        pro.typeFile = dataItem.typeFile;
        pro.createdDate = dataItem.createdDate;
        pro.description = dataItem.description;

        this.proyectosRed.push(pro);
      });
    });
    return of(this.proyectosRed);
  }
}
