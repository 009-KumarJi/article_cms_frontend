import React from "react";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<AppBar position="static">
			<Toolbar>
				<Typography variant="h6" sx={{ flexGrow: 1 }}>
					Article CMS
				</Typography>
				<Button color="inherit" component={Link} to="/login">
					Login
				</Button>
				<Button color="inherit" component={Link} to="/register">
					Register
				</Button>
				<Button color="inherit" component={Link} to="/articles">
					Articles
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Navbar;