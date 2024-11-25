import axios from 'axios';

const api = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL, // Replace with your API base URL
	withCredentials: true,
});

api.interceptors.response.use(
	(response) => response,
	async (error) => {
		if (error.response?.status === 401) {
			// Refresh token logic
			await api.get('/auth/refresh-token');
			return api(error.config); // Retry the original request
		}
		return Promise.reject(error);
	}
);

export default api;
