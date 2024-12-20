import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<Container sx={{ textAlign: 'center', mt: 10 }}>
			<Typography variant="h1" gutterBottom>
				404
			</Typography>
			<Typography variant="h5" gutterBottom>
				Oops! The page you're looking for doesn't exist.
			</Typography>
			<Button variant="contained" component={Link} to="/" sx={{ mt: 2 }}>
				Go to Dashboard
			</Button>
		</Container>
	);
};

export default NotFound;
