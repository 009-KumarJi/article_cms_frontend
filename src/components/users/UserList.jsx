import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUsers } from '../../features/users/userSlice';
import { List, ListItem, ListItemText, Typography, CircularProgress } from '@mui/material';

const UserList = () => {
	const { users, loading } = useSelector((state) => state.users);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchUsers());
	}, [dispatch]);

	if (loading) return <CircularProgress />;

	return (
		<div>
			<Typography variant="h6">User List</Typography>
			<List>
				{users.map((user) => (
					<ListItem key={user.id}>
						<ListItemText primary={`${user.firstName} ${user.lastName}`} secondary={user.email} />
					</ListItem>
				))}
			</List>
		</div>
	);
};

export default UserList;
