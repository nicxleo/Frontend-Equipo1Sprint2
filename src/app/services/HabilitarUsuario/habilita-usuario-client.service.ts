import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UrlConstant } from 'src/app/constants/url-constant';
import { environment } from 'src/environments/environment';



@Injectable()
export class HabilitarUsuarioClientService {

  constructor(private http: Http) { }
  User_Buscar(UserIde: string): Observable<any> {
    return this.http
      .get(environment.apiUrl + UrlConstant.USER_ENABLE_ENDPOINT +  UserIde)
      .pipe(map(reponse => reponse.json()));
  }

   User_Habilitar(UserIde: string): Observable<any> {
    debugger;
    return this.http
      .put(environment.apiUrl + UrlConstant.USER_ENABLE_ENDPOINT + UserIde,UserIde)
      .pipe(map(reponse => reponse.json()));
  }
}
