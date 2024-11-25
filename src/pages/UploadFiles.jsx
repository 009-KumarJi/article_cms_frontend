import React, { useState, useEffect } from "react";
import { Container, Typography, Box, Button, TextField, List, ListItem, ListItemText } from "@mui/material";
import api from "../services/api";

const UploadFiles = () => {
	const [selectedFile, setSelectedFile] = useState(null);
	const [files, setFiles] = useState([]);
	const [loading, setLoading] = useState(false);

	const fetchFiles = async () => {
		try {
			const response = await api.get("/files");
			setFiles(response.data.files || []);
		} catch (err) {
			console.error("Error fetching files:", err);
		}
	};

	useEffect(() => {
		fetchFiles();
	}, []);

	const handleFileChange = (e) => {
		setSelectedFile(e.target.files[0]);
	};

	const handleFileUpload = async () => {
		if (!selectedFile) return;
		setLoading(true);
		const formData = new FormData();
		formData.append("file", selectedFile);
		try {
			await api.post("/files/upload", formData);
			setSelectedFile(null);
			fetchFiles();
		} catch (err) {
			console.error("Error uploading file:", err);
		} finally {
			setLoading(false);
		}
	};

	const handleFileDownload = async (fileName) => {
		try {
			const response = await api.get(`/files/download/${fileName}`, {
				responseType: "blob",
			});
			const url = window.URL.createObjectURL(new Blob([response.data]));
			const link = document.createElement("a");
			link.href = url;
			link.setAttribute("download", fileName);
			document.body.appendChild(link);
			link.click();
			link.remove();
		} catch (err) {
			console.error("Error downloading file:", err);
		}
	};

	return (
		<Container sx={{ marginTop: 5 }}>
			<Typography variant="h4" gutterBottom>
				Manage Files
			</Typography>
			<Box sx={{ marginBottom: 3 }}>
				<TextField
					type="file"
					onChange={handleFileChange}
					fullWidth
					sx={{ marginBottom: 2 }}
				/>
				<Button
					variant="contained"
					onClick={handleFileUpload}
					disabled={loading || !selectedFile}
				>
					{loading ? "Uploading..." : "Upload File"}
				</Button>
			</Box>
			<Typography variant="h5" gutterBottom>
				Available Files
			</Typography>
			<List>
				{files.map((file) => (
					<ListItem key={file} divider>
						<ListItemText primary={file} />
						<Button variant="outlined" onClick={() => handleFileDownload(file)}>
							Download
						</Button>
					</ListItem>
				))}
			</List>
		</Container>
	);
};

export default UploadFiles;
