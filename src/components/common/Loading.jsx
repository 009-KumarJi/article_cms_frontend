import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const Loading = ({ text = 'Loading...' }) => {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				height: '100%',
			}}
		>
			<CircularProgress />
			<Typography variant="h6" sx={{ mt: 2 }}>
				{text}
			</Typography>
		</Box>
	);
};

export default Loading;
