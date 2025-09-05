import { HttpErrorResponse } from '@angular/common/http';

export function handleHttpError(error: HttpErrorResponse): string {
  switch (error.status) {
    case 400: return 'Invalid request. Please check input.';
    case 401: return 'Unauthorized. Please login again.';
    case 404: return 'Resource not found.';
    case 500: return 'Server error. Try later.';
    default: return 'Something went wrong.';
  }
}