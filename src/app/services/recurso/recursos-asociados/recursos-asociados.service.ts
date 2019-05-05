import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import {RecursoAsociado} from './recurso-asociado.model';

@Injectable({
  providedIn: 'root'
})
export class RecursosAsociadosService {
  API_URL = environment.apiUrl + 'detallered/recursos/';
  private recursosAsociados: Array<RecursoAsociado> = [];

  constructor(
    private httpClient: HttpClient
  ) { }
  // Metodo que invoca al servicio que obtiene los recursos asociados del RED
  getRecursosAsociados(idRed: number): Observable<RecursoAsociado[]> {
    let params = new HttpParams();
    params = params.append('RED', idRed.toString());
    this.recursosAsociados = [];
    this.httpClient.get(this.API_URL, {params} ).subscribe((data: Array<any>) => {
      data.forEach(dataItem => {
        const recurso = new RecursoAsociado();
        recurso.id = dataItem.id;
        recurso.name = dataItem.name;
        recurso.typeFormat = dataItem.typeFormat;
        this.recursosAsociados.push(recurso);
      });
    });
    return of(this.recursosAsociados);
  }
}
