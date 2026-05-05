import axios from 'axios';

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api',
});

// Add a request interceptor to include JWT token in headers
API.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Global response interceptor — handle expired/invalid tokens
API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      // Prevent redirect loop if already on auth page
      if (!window.location.pathname.includes('/auth')) {
        window.location.href = '/auth?session=expired';
      }
    }
    return Promise.reject(error);
  }
);

export const login = (formData) => API.post('/auth/login', formData);
export const register = (formData) => API.post('/auth/register', formData);
export const getProfile = () => API.get('/auth/me');
export const updateProfile = (data) => API.put('/auth/update-profile', data);
export const forgotPassword = (data) => API.post('/auth/forgot-password', data);

// Sync Ledger & Contract Endpoints
export const getSyncJobs = (page = 1, limit = 10, search = '', status = 'All') => 
  API.get(`/sync/jobs?page=${page}&limit=${limit}&search=${search}&status=${status}`);
export const createSyncJob = (data) => API.post('/sync/jobs', data);
export const getSyncContracts = () => API.get('/sync/contracts');
export const createSyncContract = (data) => API.post('/sync/contracts', data);

export default API;
