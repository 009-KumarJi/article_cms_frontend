import api from './axios.config';

export const login = (data) => api.post('/auth/login', data);
export const register = (data) => api.post('/auth/register', data);
export const getCurrentUser = () => api.get('/auth/me');
export const logout = () => api.get('/auth/logout');