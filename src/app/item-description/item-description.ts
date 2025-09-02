import { Component } from '@angular/core';

@Component({
  selector: 'app-item-description',
  standalone: false,
  templateUrl: './item-description.html',
  styleUrl: './item-description.css'
})
export class ItemDescription {
   mainImage: string = 'assets/images/Jacket1.jpeg';

  // Thumbnail images
  thumbnails: string[] = [
    'assets/images/Jacket1.jpeg',
    'assets/images/Jacket2.jpeg',
    'assets/images/Jacket3.jpeg',
    'assets/images/Jacket4.jpeg'
  ];

  // Function to update main image
  selectImage(image: string) {
    this.mainImage = image;
  }
}
