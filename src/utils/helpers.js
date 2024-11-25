export const handleApiError = (error) => {
	if (error.response && error.response.data) {
		return error.response.data.message;
	}
	return 'An unexpected error occurred.';
};
