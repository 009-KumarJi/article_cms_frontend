import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { searchArticles } from '../../../features/articles/articleSlice';

const ArticleSearch = () => {
	const [query, setQuery] = useState('');
	const dispatch = useDispatch();

	const handleSearch = (e) => {
		e.preventDefault();
		dispatch(searchArticles(query));
	};

	return (
		<Box sx={{ display: 'flex', alignItems: 'center', mt: 3 }}>
			<TextField
				label="Search Articles"
				fullWidth
				margin="normal"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<Button variant="contained" color="primary" onClick={handleSearch} sx={{ ml: 2 }}>
				Search
			</Button>
		</Box>
	);
};

export default ArticleSearch;
