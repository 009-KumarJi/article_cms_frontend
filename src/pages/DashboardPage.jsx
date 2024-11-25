import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import ArticleList from '../components/articles/ArticleList.jsx';

const DashboardPage = () => {
	return (
		<Container sx={{ mt: 4 }}>
			<Typography variant="h4" gutterBottom>
				Dashboard
			</Typography>
			<Typography variant="body1" sx={{ mb: 3 }}>
				Welcome to the Article CMS. Below are the most recent articles and tools to manage them.
			</Typography>
			<Grid container spacing={3}>
				<Grid item xs={12} md={8}>
					<Typography variant="h6">Recent Articles</Typography>
					<ArticleList />
				</Grid>
				<Grid item xs={12} md={4}>
					<Card>
						<CardContent>
							<Typography variant="h6">Quick Actions</Typography>
							<Typography variant="body2" sx={{ mt: 2 }}>
								Use the navigation menu to create or manage articles, users, or other content.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

export default DashboardPage;
