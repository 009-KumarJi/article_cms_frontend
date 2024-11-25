import React from 'react';
import { Box } from '@mui/material';
import Sidebar from './Sidebar.jsx';

const Layout = ({ children }) => {
	return (
		<Box sx={{ display: 'flex', height: '100vh' }}>
			<Sidebar />
			<Box sx={{ flexGrow: 1, padding: 2, overflowY: 'auto' }}>
				{children}
			</Box>
		</Box>
	);
};

export default Layout;
