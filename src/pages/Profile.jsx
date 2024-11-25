import React, { useEffect, useState } from "react";
import { Container, Typography, Box, CircularProgress } from "@mui/material";
import api from "../services/api";

const Profile = () => {
	const [profile, setProfile] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchProfile = async () => {
			try {
				const response = await api.get("/auth/profile");
				setProfile(response.data);
			} catch (err) {
				console.error("Error fetching profile:", err);
			} finally {
				setLoading(false);
			}
		};
		fetchProfile();
	}, []);

	if (loading) {
		return <CircularProgress />;
	}

	return (
		<Container sx={{ marginTop: 5 }}>
			<Typography variant="h4" gutterBottom>
				Profile
			</Typography>
			<Box sx={{ marginTop: 2 }}>
				<Typography variant="h6">Name: {profile?.name}</Typography>
				<Typography variant="h6">Email: {profile?.email}</Typography>
				<Typography variant="h6">Username: {profile?.username}</Typography>
			</Box>
		</Container>
	);
};

export default Profile;
