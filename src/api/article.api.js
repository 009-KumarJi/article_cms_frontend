import api from './axios.config';

export const fetchArticles = () => api.get('/articles');
export const createArticle = (data) => api.post('/articles', data);
export const updateArticle = (id, data) => api.put(`/articles/${id}`, data);
export const deleteArticle = (id) => api.delete(`/articles/${id}`);
export const searchArticles = (query) => api.get(`/articles/search?query=${query}`);
