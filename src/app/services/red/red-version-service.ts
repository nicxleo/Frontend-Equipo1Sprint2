import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from "rxjs/operators";
import { environment } from './../../../environments/environment';
import { HabilitarRed } from './HabilitarRed';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class RedVersionService {

  API_URL:string = environment.apiUrl + 'habilitar-red/';

  private reds: Array<HabilitarRed> = [];

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }


  setREDs(idUsuario: any): Observable<any> {
    const json = { "id_conectate": idUsuario};
    return this.httpClient
      .put(this.API_URL + idUsuario, json)
      .pipe(map(reponse => reponse));
  }

}