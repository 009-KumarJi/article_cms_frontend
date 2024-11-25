import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";

const ArticleCard = ({ article, onEdit, onDelete }) => {
	return (
		<Card sx={{ marginBottom: 2 }}>
			<CardContent>
				<Typography variant="h5">{article.title}</Typography>
				<Typography variant="body1">{article.content}</Typography>
				<Button onClick={() => onEdit(article)} color="primary">
					Edit
				</Button>
				<Button onClick={() => onDelete(article._id)} color="error">
					Delete
				</Button>
			</CardContent>
		</Card>
	);
};

export default ArticleCard;
