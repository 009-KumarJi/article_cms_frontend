import React from 'react';
import { Card, CardContent, Typography, CardActions, Button } from '@mui/material';

const ArticleCard = ({ article, onEdit, onDelete }) => {
	return (
		<Card>
			<CardContent>
				<Typography variant="h5">{article.heading}</Typography>
				<Typography variant="body2" color="textSecondary">
					{article.content}
				</Typography>
			</CardContent>
			<CardActions>
				{onEdit && <Button onClick={onEdit}>Edit</Button>}
				{onDelete && <Button onClick={onDelete}>Delete</Button>}
			</CardActions>
		</Card>
	);
};

export default ArticleCard;
