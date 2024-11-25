import api from './axios.config';

export const uploadFiles = (formData) => api.post('/files', formData);
export const fetchFiles = () => api.get('/files');
export const deleteFile = (id) => api.delete(`/files/${id}`);
