import { Injectable } from '@angular/core';
import { Auth } from '../service/auth-service/auth';
import { HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Interceptor {
  constructor(private auth: Auth) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.auth.getToken(); // e.g., 'Bearer eyJ...'

    if (token) {
      const cloned = req.clone({
        setHeaders: {
          Authorization: token // token already includes 'Bearer ...'
        }
      });
      return next.handle(cloned);
    }

    return next.handle(req);
  }
}
