import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { PersonaAsignada } from './persona-asignada.model';


@Injectable({
  providedIn: 'root'
})
export class PersonasAsignadasService {
  API_URL = environment.apiUrl + 'detallered/personas/';
  private personasAsignadas: Array<PersonaAsignada> = [];

  constructor(
    private httpClient: HttpClient
  ) { }

  // Metodo que invoca al servicio que obtiene las personas asignadas al RED
  getPersonasAsignadas(idRed: number): Observable<PersonaAsignada[]> {
    let params = new HttpParams();
    params = params.append('RED', idRed.toString());
    this.personasAsignadas = [];
    this.httpClient.get(this.API_URL, {params} ).subscribe((data: Array<any>) => {
      data.forEach(dataItem => {
        const per = new PersonaAsignada();
        per.name = dataItem.name;
        per.rol = dataItem.rol;
        this.personasAsignadas.push(per);
      });
    });
    return of(this.personasAsignadas);
  }
}
