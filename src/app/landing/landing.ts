import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
  declare var bootstrap: any;
@Component({
  selector: 'app-landing',
  standalone: false,
  templateUrl: './landing.html',
  styleUrl: './landing.css'
})
export class Landing implements AfterViewInit{
  
  constructor(private route: ActivatedRoute) {}
  ngAfterViewInit() {
    const el = document.getElementById('productCarousel');
    if (el) {
      new bootstrap.Carousel(el, { interval: 3000, ride: true });
    }
  }
    productId: string | null = null;

  ngOnInit(): void {
    //this.productId = this.route.snapshot.paramMap.get('id');
    //console.log('Product ID:', this.productId);
    // 🔥 fetch product details by ID from service here
  }
}
