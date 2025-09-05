import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: false,
  templateUrl: './settings.html',
  styleUrl: './settings.css'
})
export class Settings implements OnInit{
  user = JSON.parse(localStorage.getItem('user') || '{}');

  constructor() {}

  ngOnInit(): void {}

}
