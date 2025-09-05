// ✅ Centralized API Endpoints
export class ApiEndpoints {
  static readonly LOGIN = 'apis/user/doLogin';
  // Add more as needed...
}

// ✅ Centralized Request Types (for Redux/NgRx/Events if used)
export const APP_REQUEST_TYPES = {
  LOGIN: {
    USER_LOGIN: 'APP_LOGIN',
  },
  PROFILE: {
    FETCH_PROFILE: 'APP_FETCH_PROFILE',
  }
};