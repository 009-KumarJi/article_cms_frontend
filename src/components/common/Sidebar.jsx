import React from 'react';
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const menuItems = [
	{ text: 'Dashboard', path: '/dashboard' },
	{ text: 'Articles', path: '/articles' },
	{ text: 'Users', path: '/users' },
	{ text: 'Profile', path: '/profile' },
];

const Sidebar = () => {
	const location = useLocation();

	return (
		<Box
			sx={{
				width: 240,
				bgcolor: 'background.paper',
				boxShadow: 1,
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
			}}
		>
			<Typography
				variant="h6"
				component="div"
				sx={{ p: 2, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}
			>
				CMS Admin
			</Typography>
			<List>
				{menuItems.map((item) => (
					<ListItem
						key={item.text}
						button
						component={Link}
						to={item.path}
						selected={location.pathname === item.path}
					>
						<ListItemText primary={item.text} />
					</ListItem>
				))}
			</List>
		</Box>
	);
};

export default Sidebar;
