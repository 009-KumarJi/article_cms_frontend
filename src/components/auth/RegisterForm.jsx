import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Alert } from '@mui/material';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [error, setError] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleRegister = async (e) => {
		e.preventDefault();
		setError('');
		try {
			await dispatch(registerUser({ firstName, lastName, email, password })).unwrap();
			navigate('/dashboard');
		} catch (err) {
			setError(err.message || 'Registration failed');
		}
	};

	return (
		<Box sx={{ maxWidth: 400, mx: 'auto', mt: 5, textAlign: 'center' }}>
			<Typography variant="h4" gutterBottom>
				Register
			</Typography>
			{error && <Alert severity="error">{error}</Alert>}
			<form onSubmit={handleRegister}>
				<TextField
					label="First Name"
					fullWidth
					margin="normal"
					value={firstName}
					onChange={(e) => setFirstName(e.target.value)}
				/>
				<TextField
					label="Last Name"
					fullWidth
					margin="normal"
					value={lastName}
					onChange={(e) => setLastName(e.target.value)}
				/>
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
					Register
				</Button>
			</form>
		</Box>
	);
};

export default RegisterForm;
