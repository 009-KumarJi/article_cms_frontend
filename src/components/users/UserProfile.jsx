import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Card, CardContent, Typography, Avatar } from '@mui/material';

const UserProfile = () => {
	const { id } = useParams();
	const user = useSelector((state) =>
		state.users.users.find((user) => user.id === id)
	);

	if (!user) return <Typography variant="body1">User not found.</Typography>;

	return (
		<Card>
			<CardContent>
				<Avatar src={user.avatar} alt={`${user.firstName} ${user.lastName}`} sx={{ width: 64, height: 64, mb: 2 }} />
				<Typography variant="h5">{`${user.firstName} ${user.lastName}`}</Typography>
				<Typography variant="body2" color="textSecondary">{`Username: ${user.username}`}</Typography>
				<Typography variant="body2">{`Email: ${user.email}`}</Typography>
				<Typography variant="body2">{`Role: ${user.role}`}</Typography>
			</CardContent>
		</Card>
	);
};

export default UserProfile;
