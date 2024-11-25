import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const FileUpload = ({ onUpload }) => {
	const [file, setFile] = useState(null);

	const handleFileChange = (event) => {
		setFile(event.target.files[0]);
	};

	const handleUpload = () => {
		if (file) {
			onUpload(file);
			setFile(null);
		}
	};

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
			<Typography variant="h6">Upload File</Typography>
			<input
				type="file"
				onChange={handleFileChange}
				style={{ display: 'none' }}
				id="file-upload"
			/>
			<label htmlFor="file-upload">
				<Button
					variant="contained"
					component="span"
					startIcon={<CloudUploadIcon />}
					sx={{ textTransform: 'none' }}
				>
					Choose File
				</Button>
			</label>
			{file && <Typography variant="body1">{file.name}</Typography>}
			<Button
				variant="contained"
				color="primary"
				onClick={handleUpload}
				disabled={!file}
				sx={{ textTransform: 'none' }}
			>
				Upload
			</Button>
		</Box>
	);
};

export default FileUpload;
