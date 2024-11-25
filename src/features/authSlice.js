import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api";

export const fetchProfile = createAsyncThunk("auth/fetchProfile", async () => {
	const response = await api.get("/auth/profile");
	return response.data;
});

// Updated logic for token refresh handled in middleware/backend
export const login = createAsyncThunk("auth/login", async (credentials) => {
	const response = await api.post("/auth/login", credentials);
	return response.data;
});

const authSlice = createSlice({
	name: "auth",
	initialState: { user: null, loading: false, error: null },
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.loading = true;
			})
			.addCase(login.fulfilled, (state, action) => {
				state.loading = false;
				state.user = action.payload;
			})
			.addCase(login.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message;
			})
			.addCase(fetchProfile.fulfilled, (state, action) => {
				state.user = action.payload;
			});
	},
});

export default authSlice.reducer;
