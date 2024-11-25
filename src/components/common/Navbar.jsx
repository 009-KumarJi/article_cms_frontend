import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../../features/auth/authSlice';

const Navbar = () => {
	const { user, isAuthenticated } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const handleLogout = () => dispatch(logout());

	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" sx={{ flexGrow: 1 }}>
					Article CMS
				</Typography>
				{isAuthenticated ? (
					<>
						<Typography variant="body1" sx={{ marginRight: 2 }}>
							Welcome, {user?.username}
						</Typography>
						<Button color="inherit" onClick={handleLogout}>
							Logout
						</Button>
					</>
				) : (
					<Button color="inherit">Login</Button>
				)}
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;
