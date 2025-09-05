import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '../http/http';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ApiEndpoints } from '../../utils/const';
import { handleApiResponse } from '../../handlers/response-handler';
import { handleHttpError } from '../../handlers/error-handler';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  constructor(private http: Http) {}

  // 🔹 Login API with JWT support
  login(data: { email: string; password: string }): Observable<any> {
    const payload = {
      username: data.email, // 👈 use the exact field names backend expects
      password: data.password
    };

    return this.http.post(ApiEndpoints.LOGIN, payload).pipe(
      map((res: any) => {
        const result = handleApiResponse(res);
        if (result.authToken) {
          localStorage.setItem('token', result.authToken);
        }
        return result;
      }),
      catchError((err) => throwError(() => handleHttpError(err)))
    );
  }

  // 🔹 Get token (for interceptor)
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // 🔹 Check login status
  isLoggedIn(): boolean {
    return !!this.getToken(); // true if token exists
  }

  // 🔹 Logout
  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }
}
