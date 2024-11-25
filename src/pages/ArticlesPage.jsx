import React, { useState } from 'react';
import { Container, Typography, Button } from '@mui/material';
import ArticleList from '../components/articles/ArticleList.jsx';
import ArticleSearch from '../components/articles/ArticleSearch.jsx';
import ArticleEditor from '../components/articles/ArticleEditor.jsx';

const ArticlesPage = () => {
	const [isEditorOpen, setEditorOpen] = useState(false);

	return (
		<Container sx={{ mt: 4 }}>
			<Typography variant="h4" gutterBottom>
				Articles
			</Typography>
			<ArticleSearch />
			<Button
				variant="contained"
				color="primary"
				onClick={() => setEditorOpen(true)}
				sx={{ mt: 2 }}
			>
				Create New Article
			</Button>
			{isEditorOpen && (
				<ArticleEditor onClose={() => setEditorOpen(false)} />
			)}
			<ArticleList />
		</Container>
	);
};

export default ArticlesPage;
