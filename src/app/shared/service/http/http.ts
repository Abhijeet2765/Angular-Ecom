import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Http {
  private baseUrl = environment.apiBaseUrl; // Base URL from environment.ts

  constructor(private http: HttpClient) {}

  // 👉 Generic GET
  get<T>(endpoint: string, params?: HttpParams): Observable<T> {
    return this.http.get<T>(this.baseUrl + endpoint, { params });
  }

  // 👉 Generic POST
  post<T>(endpoint: string, data: any, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(this.baseUrl + endpoint, data, { headers });
  }

  // 👉 Generic PUT
  put<T>(endpoint: string, data: any, headers?: HttpHeaders): Observable<T> {
    return this.http.put<T>(this.baseUrl + endpoint, data, { headers });
  }

  // 👉 Generic DELETE
  delete<T>(endpoint: string, params?: HttpParams): Observable<T> {
    return this.http.delete<T>(this.baseUrl + endpoint, { params });
  }
}
