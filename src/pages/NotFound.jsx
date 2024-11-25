import React from "react";
import { Container, Typography } from "@mui/material";

const NotFound = () => {
	return (
		<Container sx={{ marginTop: 5 }}>
			<Typography variant="h3" align="center" color="error" gutterBottom>
				404
			</Typography>
			<Typography variant="h5" align="center">
				Page Not Found
			</Typography>
		</Container>
	);
};

export default NotFound;
