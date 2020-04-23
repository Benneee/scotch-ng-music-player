import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class ApiService {
  clientId = "2f98992c40b8edf17423d93bda2e04ab";

  constructor(private http: HttpClient) {}

  get(url, attachClientId?): Observable<any> {
    let u;
    attachClientId ? (u = this.prepareUrl(url)) : (u = url);
    return this.http.get(u);
  }

  prepareUrl(url) {
    //Attach client id to stream url
    return `${url}?client_id=${this.clientId}`;
  }
}
