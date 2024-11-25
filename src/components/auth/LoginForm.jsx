import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Alert } from '@mui/material';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		setError('');
		try {
			await dispatch(loginUser({ email, password })).unwrap();
			navigate('/dashboard');
		} catch (err) {
			setError(err.message || 'Login failed');
		}
	};

	return (
		<Box sx={{ maxWidth: 400, mx: 'auto', mt: 5, textAlign: 'center' }}>
			<Typography variant="h4" gutterBottom>
				Login
			</Typography>
			{error && <Alert severity="error">{error}</Alert>}
			<form onSubmit={handleLogin}>
				<TextField
					label="Email"
					type="email"
					fullWidth
					margin="normal"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<TextField
					label="Password"
					type="password"
					fullWidth
					margin="normal"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button
					type="submit"
					variant="contained"
					color="primary"
					fullWidth
					sx={{ mt: 2, textTransform: 'none' }}
				>
					Login
				</Button>
			</form>
		</Box>
	);
};

export default LoginForm;
