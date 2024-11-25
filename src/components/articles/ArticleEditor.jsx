import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { createArticle, updateArticle } from '../../../features/articles/articleSlice';

const ArticleEditor = ({ article = {}, onClose }) => {
	const [heading, setHeading] = useState(article.heading || '');
	const [content, setContent] = useState(article.content || '');
	const [category, setCategory] = useState(article.category || '');
	const [tags, setTags] = useState(article.tags?.join(', ') || '');

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();
		const articleData = {
			heading,
			content,
			category,
			tags: tags.split(',').map((tag) => tag.trim()),
		};

		if (article.id) {
			dispatch(updateArticle({ id: article.id, ...articleData }));
		} else {
			dispatch(createArticle(articleData));
		}

		if (onClose) onClose();
	};

	return (
		<Box sx={{ maxWidth: 600, mx: 'auto', mt: 5 }}>
			<Typography variant="h5" gutterBottom>
				{article.id ? 'Edit Article' : 'Create Article'}
			</Typography>
			<form onSubmit={handleSubmit}>
				<TextField
					label="Heading"
					fullWidth
					margin="normal"
					value={heading}
					onChange={(e) => setHeading(e.target.value)}
				/>
				<TextField
					label="Content"
					multiline
					rows={4}
					fullWidth
					margin="normal"
					value={content}
					onChange={(e) => setContent(e.target.value)}
				/>
				<TextField
					label="Category"
					fullWidth
					margin="normal"
					value={category}
					onChange={(e) => setCategory(e.target.value)}
				/>
				<TextField
					label="Tags (comma separated)"
					fullWidth
					margin="normal"
					value={tags}
					onChange={(e) => setTags(e.target.value)}
				/>
				<Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
					<Button variant="outlined" onClick={onClose}>
						Cancel
					</Button>
					<Button type="submit" variant="contained" color="primary">
						{article.id ? 'Update' : 'Create'}
					</Button>
				</Box>
			</form>
		</Box>
	);
};

export default ArticleEditor;
