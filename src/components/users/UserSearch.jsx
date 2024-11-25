import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TextField, List, ListItem, ListItemText, Typography } from '@mui/material';

const UserSearch = () => {
	const [query, setQuery] = useState('');
	const { users } = useSelector((state) => state.users);

	const filteredUsers = users.filter((user) =>
		`${user.firstName} ${user.lastName}`.toLowerCase().includes(query.toLowerCase())
	);

	return (
		<div>
			<Typography variant="h6">Search Users</Typography>
			<TextField
				label="Search by name"
				variant="outlined"
				fullWidth
				margin="normal"
				value={query}
				onChange={(e) => setQuery(e.target.value)}
			/>
			<List>
				{filteredUsers.map((user) => (
					<ListItem key={user.id}>
						<ListItemText primary={`${user.firstName} ${user.lastName}`} secondary={user.email} />
					</ListItem>
				))}
			</List>
		</div>
	);
};

export default UserSearch;
