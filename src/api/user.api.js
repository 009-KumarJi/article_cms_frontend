import api from './axios.config';

export const fetchUsers = () => api.get('/users');
export const updateUser = (id, data) => api.put(`/users/${id}`, data);
export const deleteUser = (id) => api.delete(`/users/${id}`);
export const searchUsers = (query) => api.get(`/users/search?query=${query}`);
