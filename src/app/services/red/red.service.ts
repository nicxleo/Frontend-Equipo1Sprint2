import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RedService {
  httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' });

  constructor(private http: HttpClient) {}

  getRedsRelacionados(idProyectoC) {
    return new Promise((resolve, reject) => {
      const options = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

      this.http
        .get(
          environment.apiUrl + 'reds/relacionados/' + idProyectoC,
          options
        )
        .subscribe(
          (data: any) => {
            resolve(data);
          },
          err => {
            console.log(err);
            reject('There was an error getting the related reds');
          }
        );
    });
  }

  getRedRecursosDetalle(id): Observable<any> {
    return this.http.get(environment.apiUrl + 'getRedDetailRecursos/' + id, {
      headers: this.httpHeaders
    });
  }
}
