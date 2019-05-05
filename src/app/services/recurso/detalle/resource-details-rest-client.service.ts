import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UrlConstant } from 'src/app/constants/url-constant';
import { environment } from 'src/environments/environment';

@Injectable()
export class ResourceDetailsRestClientService {
  constructor(private http: Http) { }

  getResourceDetailsById(id: number): Observable<any> {
    return this.http
      .get(environment.apiUrl + UrlConstant.RESOURCE_DETAILS_ENDPOINT + id)
      .pipe(map(reponse => reponse.json()));
  }

  updateResourceDetail(data: any): Observable<any> {
    const json = { "nombre": data.name, "descripcion": data.description, "usuario_ultima_modificacion": data.lastUserModification, "id": data.id };
    return this.http
      .put(environment.apiUrl + UrlConstant.RESOURCE_DETAILS_UPDATE_ENDPOINT, json)
      .pipe(map(reponse => reponse.json()));
  }
}
