import React, { useState } from 'react';
import { Box, Button } from '@mui/material';
import LoginForm from '../components/auth/LoginForm';
import RegisterForm from '../components/auth/RegisterForm';

const LoginPage = () => {
	const [isLogin, setIsLogin] = useState(true);

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 5 }}>
			{isLogin ? <LoginForm /> : <RegisterForm />}
			<Button
				variant="text"
				sx={{ mt: 2 }}
				onClick={() => setIsLogin(!isLogin)}
			>
				{isLogin ? 'Need an account? Register' : 'Already have an account? Login'}
			</Button>
		</Box>
	);
};

export default LoginPage;
