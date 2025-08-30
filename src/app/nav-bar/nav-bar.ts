import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { Auth } from '../auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar {
  constructor(public auth: Auth,private router: Router) {}
  dropdownOpen = false;

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  handleLogin() {
    this.router.navigate(['/login']);
  }

  handleLogout() {
    this.auth.logout();
    this.router.navigate(['/dashboard']);
  }
  goToFavList() {
    this.router.navigate(['/fav-list']);
  }

  goToCart(){
    this.router.navigate(['/cart']);
  }

}
