import { Component } from '@angular/core';
import { Auth } from '../auth';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
  constructor(public auth: Auth) {}

  handleLogin() {
    window.location.href = '/login';
  }

  handleLogout() {
    this.auth.logout();
  }

}
