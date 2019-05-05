import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { UrlConstant } from "src/app/constants/url-constant";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: "root"
})
export class AdvanceRedRestClientService {
  constructor(private http: Http) {}

  getAdvanceRedById(id: number): Observable<any> {
    return this.http
      .get(environment.apiUrl + UrlConstant.ADVANCE_RED_ENDPOINT + id)
      .pipe(map(reponse => reponse.json()));
  }
}
