import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { DetalleRed } from './detalle-red.model';


@Injectable({
  providedIn: 'root'
})
export class DetalleRedService {
  API_URL = environment.apiUrl + 'detallered/';
  private detalleRed: DetalleRed = new DetalleRed();

  constructor(
    private httpClient: HttpClient
  ) { }

  // Metodo que invoca al servicio que obtiene la informacion del RED
  getDetalleRed(idRed: number): Observable<DetalleRed> {
    let params = new HttpParams();
    params = params.append('RED', idRed.toString());
    this.httpClient.get(this.API_URL, {params}).subscribe((data: any) => {
      this.detalleRed.nameRed = data.nombreRed;
      this.detalleRed.nameProject = data.nombreProject;
      this.detalleRed.url = data.url;
      this.detalleRed.status = data.status;
    });
    return of(this.detalleRed);
  }
}
