import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Forbidden = () => {
	return (
		<Container sx={{ textAlign: 'center', mt: 10 }}>
			<Typography variant="h1" gutterBottom>
				403
			</Typography>
			<Typography variant="h5" gutterBottom>
				You don't have permission to access this page.
			</Typography>
			<Button variant="contained" component={Link} to="/" sx={{ mt: 2 }}>
				Go to Dashboard
			</Button>
		</Container>
	);
};

export default Forbidden;
