import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Unauthorized from '../pages/Unauthorized'; // A custom 403 page

const AdminRoute = ({ component }) => {
	const { user } = useSelector((state) => state.auth);

	if (!user) {
		return <Navigate to="/login" />; // Redirect unauthenticated users to login
	}

	return user.role === 'Admin' ? component : <Unauthorized />;
};

export default AdminRoute;
