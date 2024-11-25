import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Button, Container, Typography, Box } from "@mui/material";
import api from "../services/api";

const Register = () => {
	const [form, setForm] = useState({
		firstName: "",
		lastName: "",
		username: "",
		email: "",
		password: "",
	});
	const [error, setError] = useState(null);
	const [success, setSuccess] = useState(false);

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError(null);
		setSuccess(false);
		try {
			await api.post("/auth/register", form);
			setSuccess(true);
		} catch (err) {
			setError(err.response.data.message || "Registration failed");
		}
	};

	return (
		<Container maxWidth="sm" sx={{ marginTop: 5 }}>
			<Typography variant="h4" align="center" gutterBottom>
				Register
			</Typography>
			<Box component="form" onSubmit={handleSubmit} noValidate>
				<TextField
					label="First Name"
					name="firstName"
					value={form.firstName}
					onChange={handleChange}
					fullWidth
					margin="normal"
					required
				/>
				<TextField
					label="Last Name"
					name="lastName"
					value={form.lastName}
					onChange={handleChange}
					fullWidth
					margin="normal"
					required
				/>
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
					label="Email"
					name="email"
					value={form.email}
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
				{success && (
					<Typography color="success" variant="body2" sx={{ marginTop: 1 }}>
						Registration successful! Please login.
					</Typography>
				)}
				<Button
					type="submit"
					variant="contained"
					color="primary"
					fullWidth
					sx={{ marginTop: 2 }}
				>
					Register
				</Button>
			</Box>
		</Container>
	);
};

export default Register;
