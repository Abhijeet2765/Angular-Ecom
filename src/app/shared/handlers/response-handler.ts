import { HttpStatus } from '../utils/enum';

export function handleApiResponse(response: any) {
  if (response.statusCode === HttpStatus.OK) {
    return response.data;
  } else {
    throw new Error(response.reason || 'Unexpected error');
  }
}