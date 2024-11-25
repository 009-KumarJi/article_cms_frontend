import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ArticleCard from './ArticleCard.jsx';
import { fetchArticles } from '../../../features/articles/articleSlice';

const ArticleList = () => {
	const { articles, loading } = useSelector((state) => state.articles);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchArticles());
	}, [dispatch]);

	if (loading) return <div>Loading articles...</div>;

	return (
		<div>
			{articles.map((article) => (
				<ArticleCard key={article.id} article={article} />
			))}
		</div>
	);
};

export default ArticleList;
