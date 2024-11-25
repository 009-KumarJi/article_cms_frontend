import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles, createArticle, deleteArticle } from "../features/articleSlice";
import ArticleCard from "../components/ArticleCard";
import { Container, Typography, Button, TextField, Box } from "@mui/material";

const Articles = () => {
	const dispatch = useDispatch();
	const { articles, loading } = useSelector((state) => state.articles);
	const [newArticle, setNewArticle] = useState({ heading: "", content: "" });

	useEffect(() => {
		dispatch(fetchArticles());
	}, [dispatch]);

	const handleAddArticle = () => {
		dispatch(createArticle(newArticle));
		setNewArticle({ heading: "", content: "" });
	};

	const handleDeleteArticle = (id) => {
		dispatch(deleteArticle(id));
	};

	return (
		<Container sx={{ marginTop: 5 }}>
			<Typography variant="h4" gutterBottom>
				Articles
			</Typography>
			<Box sx={{ display: "flex", flexDirection: "column", gap: 2, marginBottom: 3 }}>
				<TextField
					label="Heading"
					value={newArticle.heading}
					onChange={(e) => setNewArticle({ ...newArticle, heading: e.target.value })}
					fullWidth
				/>
				<TextField
					label="Content"
					value={newArticle.content}
					onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
					fullWidth
					multiline
					rows={4}
				/>
				<Button variant="contained" onClick={handleAddArticle}>
					Add Article
				</Button>
			</Box>
			{loading ? (
				<Typography>Loading articles...</Typography>
			) : (
				articles.map((article) => (
					<ArticleCard
						key={article._id}
						article={article}
						onDelete={handleDeleteArticle}
					/>
				))
			)}
		</Container>
	);
};

export default Articles;
