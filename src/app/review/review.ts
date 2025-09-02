import { Component } from '@angular/core';
interface Reviews {
  name: string;
  date: string;
  rating: number;
  comment: string;
  avatar: string;
}
@Component({
  selector: 'app-review',
  standalone: false,
  templateUrl: './review.html',
  styleUrl: './review.css'
})
export class Review {
  reviews: Reviews[] = [
    {
      name: 'John Doe',
      date: 'August 25, 2025',
      rating: 4,
      comment: 'Great quality product! The delivery was fast, and packaging was neat. Highly recommend.',
      avatar: 'https://i.pravatar.cc/40'
    },
    {
      name: 'Sophia Lee',
      date: 'August 26, 2025',
      rating: 3,
      comment: 'The product is okay but I expected better finishing. Could be improved.',
      avatar: 'https://i.pravatar.cc/41'
    }
  ];

  // New Review Form Data
  newReview: Reviews = {
    name: '',
    date: '',
    rating: 0,
    comment: '',
    avatar: 'https://i.pravatar.cc/42'
  };

  // Handle star rating selection
  setRating(rating: number) {
    this.newReview.rating = rating;
  }

  // Add new review
  submitReview() {
    if (!this.newReview.name || !this.newReview.comment || this.newReview.rating === 0) {
      alert('Please fill in all fields and give a rating!');
      return;
    }

    // Set date
    const today = new Date();
    this.newReview.date = today.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    // Push to reviews list
    this.reviews.unshift({ ...this.newReview });

    // Reset form
    this.newReview = {
      name: '',
      date: '',
      rating: 0,
      comment: '',
      avatar: 'https://i.pravatar.cc/42'
    };
  }
}
