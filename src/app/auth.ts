import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Auth {
  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    // Mock login (replace with API call)
    if (email === 'test@test.com' && password === '123456') {
      sessionStorage.setItem('authToken', 'my-secret-token');
      return true;
    }
    return false;
  }

  logout() {
    sessionStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!sessionStorage.getItem('authToken');
  }
}
