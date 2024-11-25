import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Typography, Avatar, Box } from '@mui/material';

const Profile = () => {
	const { user } = useSelector((state) => state.auth);

	if (!user) {
		return (
			<Container sx={{ mt: 4 }}>
				<Typography variant="h5">User not found</Typography>
			</Container>
		);
	}

	return (
		<Container sx={{ mt: 4 }}>
			<Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
				<Avatar src={user.avatar} alt={user.username} sx={{ width: 80, height: 80 }} />
				<Typography variant="h4">{`${user.firstName} ${user.lastName}`}</Typography>
			</Box>
			<Typography variant="body1" sx={{ mt: 2 }}>
				Username: {user.username}
			</Typography>
			<Typography variant="body1">Email: {user.email}</Typography>
			<Typography variant="body1">Role: {user.role}</Typography>
		</Container>
	);
};

export default Profile;
