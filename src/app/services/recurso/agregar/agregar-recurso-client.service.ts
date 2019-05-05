import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEventType, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
const url = 'https://content.dropboxapi.com/2/files/upload';
const token = 'n8Swy7K2KQAAAAAAAAAAEhPhfmBUFQIkLeX-JZ5wHeCntHYtZr1WFAGKwv8yaz0-';
import { UrlConstant } from 'src/app/constants/url-constant';
import { environment } from 'src/environments/environment';

@Injectable()
export class AgregarRecursoClientService {

  constructor(private http: HttpClient) { }

  public upload(files: Set<File>):
    { [key: string]: { progress: Observable<number> } } {

    // this will be the our resulting map
    const status: { [key: string]: { progress: Observable<number> } } = {};

    files.forEach(file => {
      // create a new multipart-form for every file
      const formData: FormData = new FormData();
      formData.append('file', file, file.name);

      const reqHeaders = new HttpHeaders({
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/octet-stream',
        'Dropbox-API-Arg': JSON.stringify({
          path: '/' +  file.name,
          mode: 'overwrite',
          autorename: true,
          mute: false
        }),
        'User-Agent': 'api-explorer-client',
      });


      // create a http-post request and pass the form
      // tell it to report the upload progress
      const req = new HttpRequest('POST', url, formData, {
        headers: reqHeaders,
        reportProgress: true
      });

      console.log(JSON.stringify(req.headers));
      console.log(JSON.stringify(req));

      // create a new progress-subject for every file
      const progress = new Subject<number>();

      // send the http-request and subscribe for progress-updates
      this.http.request(req).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {

          // calculate the progress percentage
          const percentDone = Math.round(100 * event.loaded / event.total);

          // pass the percentage into the progress-stream
          progress.next(percentDone);
        } else if (event instanceof HttpResponse) {

          // Close the progress-stream if we get an answer form the API
          // The upload is complete
          progress.complete();
        }
      });

      // Save every progress-observable in a map of all observables
      status[file.name] = {
        progress: progress.asObservable()
      };
    });

    // return the map of progress.observables
    return status;
  }

  //Call rest service to add recurso.
  register(user: any): Observable<any> {
    return this.http.post(environment.apiUrl + UrlConstant.RESOURCE_DETAILS_ADD_ENDPOINT, user).pipe(map(response => { }));
  }

}
