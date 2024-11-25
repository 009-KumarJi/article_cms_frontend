import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/authSlice";
import { TextField, Button, Container, Typography, Box } from "@mui/material";

const Login = () => {
	const dispatch = useDispatch();
	const { loading, error } = useSelector((state) => state.auth);
	const [form, setForm] = useState({ username: "", password: "" });

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(login(form));
	};

	return (
		<Container maxWidth="xs" sx={{ marginTop: 5 }}>
			<Typography variant="h4" align="center" gutterBottom>
				Login
			</Typography>
			<Box component="form" onSubmit={handleSubmit} noValidate>
				<TextField
					label="Username"
					name="username"
					value={form.username}
					onChange={handleChange}
					fullWidth
					margin="normal"
					required
				/>
				<TextField
					label="Password"
					name="password"
					type="password"
					value={form.password}
					onChange={handleChange}
					fullWidth
					margin="normal"
					required
				/>
				{error && (
					<Typography color="error" variant="body2" sx={{ marginTop: 1 }}>
						{error}
					</Typography>
				)}
				<Button
					type="submit"
					variant="contained"
					color="primary"
					fullWidth
					sx={{ marginTop: 2 }}
					disabled={loading}
				>
					{loading ? "Logging in..." : "Login"}
				</Button>
			</Box>
		</Container>
	);
};

export default Login;
