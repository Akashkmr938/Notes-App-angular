import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(public http: HttpClient) {}

  public get(endpoint: string): Observable<any> {
    return this.http.get(`${environment.baseUrl}/${endpoint}`);
  }
  public post(endpoint: string, payload: any): Observable<any> {
    return this.http.post(`${environment.baseUrl}/${endpoint}`, payload);
  }
  public put(endpoint: string, payload: any): Observable<any> {
    return this.http.get(
      `${environment.baseUrl}/${endpoint}?payload=${payload}`
    );
  }
  public delete(endpoint: string, payload: any): Observable<any> {
    return this.http.get(
      `${environment.baseUrl}/${endpoint}?payload=${payload}`
    );
  }
}
