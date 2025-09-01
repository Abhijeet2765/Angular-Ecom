import { AfterViewInit, Component } from '@angular/core';
  declare var bootstrap: any;
@Component({
  selector: 'app-landing',
  standalone: false,
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class Landing implements AfterViewInit{

  ngAfterViewInit() {
    const el = document.getElementById('productCarousel');
    if (el) {
      new bootstrap.Carousel(el, { interval: 3000, ride: true });
    }
  }
}
