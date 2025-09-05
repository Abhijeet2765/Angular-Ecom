import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { Auth } from '../shared/service/auth-service/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.html',
  styleUrl: './nav-bar.css'
})
export class NavBar implements OnInit {
  userfirstname:string='';
  userlastname:string='';
  designation:string='';
  constructor(public auth: Auth,private router: Router) {}
  ngOnInit(): void {
    this.loadUser();
  }
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

  private loadUser(): void {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const user = JSON.parse(storedUser);
        this.userfirstname = user.firstName || '';
        this.userlastname = user.lastName || '';
        this.designation=user.designation || '';
      } catch (err) {
        console.error('Invalid user JSON in localStorage', err);
      }
    }
  }


  

}
