import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';
import { DetalleRed } from '../detalle-red/detalle-red.model';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable()
export class ComentarRestClientService {
  API_URL = environment.apiUrl + 'comentarios/pdf/';
	private comentario: any;

  constructor(
    private httpClient: HttpClient
  ) { }

  getComentariosByIdRed(idRed: number): Observable<DetalleRed> {
		let params = new HttpParams();
		params = params.append('id', idRed.toString());
		this.httpClient.get(this.API_URL, { params }).subscribe((data: any) => {
      this.comentario = {
        rutaPdf : data.rutaPdf,
        Version : data.Version,
        x1 : data.coordenadas.x1,
        x2 : data.coordenadas.x2,
        y1 : data.coordenadas.y1,
        y2 : data.coordenadas.y2,
        width : data.coordenadas.width,
        height : data.coordenadas.height,
        comentario : data.comentario,
      }
		});
		return of(this.comentario);
  }
  
  postComentariosByIdRed(comentario: any): Observable<any> {
    return this.httpClient.post(this.API_URL, comentario).pipe(map(reponse => reponse));
	}
}
