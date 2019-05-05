import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecursoService {
  httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' });

  constructor(private http: HttpClient) {}

  getRecursos(id): Observable<any> {
    return this.http.get(environment.apiUrl + 'getRecurso/' + id, {
      headers: this.httpHeaders
    });
  }
}
