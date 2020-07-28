import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  userData = null;
  header = new HttpHeaders();
  constructor(public http: HttpClient) {}

  public get(endpoint: string, query: any): Observable<any> {
    this.getHeader();
    return this.http.get(`${environment.baseUrl}/${endpoint}?email=${query}`, {
      headers: this.header,
    });
  }
  public post(endpoint: string, payload: any): Observable<any> {
    this.getHeader();
    return this.http.post(`${environment.baseUrl}/${endpoint}`, payload, {
      headers: this.header,
    });
  }
  public put(endpoint: string, payload: any): Observable<any> {
    this.getHeader();
    return this.http.put(`${environment.baseUrl}/${endpoint}`, payload, {
      headers: this.header,
    });
  }
  public delete(endpoint: string, payload: any): Observable<any> {
    this.getHeader();
    return this.http.delete(
      `${environment.baseUrl}/${endpoint}?id=${payload._id}&email=${payload.email}`,
      {
        headers: this.header,
      }
    );
  }

  getHeader() {
    this.userData = JSON.parse(sessionStorage.getItem('user'));
    if (this.userData) {
      this.header = this.header.set(
        'Authorization',
        `Bearer ${this.userData.idToken}`
      );
    }
  }
}
