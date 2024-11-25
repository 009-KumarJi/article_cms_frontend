import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import Unauthorized from '../pages/403'; // A custom 403 page

const ModeratorRoute = ({ component }) => {
	const { user } = useSelector((state) => state.auth);

	if (!user) {
		return <Navigate to="/login" />;
	}

	return user.role === 'Moderator' || user.role === 'Admin' ? component : <Unauthorized />;
};

export default ModeratorRoute;
