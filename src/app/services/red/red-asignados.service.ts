import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { RedAsignado } from './RedAsignado';
import { environment } from './../../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class RedAsignadosService {

  API_URL:string = environment.apiUrl + 'reds/asignados/';

  private reds: Array<RedAsignado> = [];

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  getREDs(idUsuario: number): Observable<RedAsignado[]> {
    this.reds = [];
    this.httpClient.get(this.API_URL+idUsuario, httpOptions).subscribe((data: any) => {
      console.log(data);
      data.redsAsignados.forEach(dataItem => {
        const red = new RedAsignado();
        red.id = dataItem.idRed;
        red.nombre = dataItem.nombreRed;
        red.rol = dataItem.rol;
        this.reds.push(red);
      });
    });
    console.log(this.reds);
    return of(this.reds);
  }

}
