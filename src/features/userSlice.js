import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUsers, fetchUserById, updateUserDetails } from '../../api/user.api';

// Thunks
export const getUsers = createAsyncThunk('users/getUsers', async (_, thunkAPI) => {
	try {
		const response = await fetchUsers();
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response?.data || 'Error fetching users');
	}
});

export const getUserById = createAsyncThunk('users/getUserById', async (userId, thunkAPI) => {
	try {
		const response = await fetchUserById(userId);
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response?.data || 'Error fetching user');
	}
});

export const updateUser = createAsyncThunk('users/updateUser', async (userData, thunkAPI) => {
	try {
		const response = await updateUserDetails(userData);
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue(error.response?.data || 'Error updating user');
	}
});

// Slice
const userSlice = createSlice({
	name: 'users',
	initialState: {
		users: [],
		userDetails: null,
		loading: false,
		error: null,
	},
	reducers: {
		clearUserDetails(state) {
			state.userDetails = null;
		},
	},
	extraReducers: (builder) => {
		builder
			// Get all users
			.addCase(getUsers.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getUsers.fulfilled, (state, action) => {
				state.loading = false;
				state.users = action.payload;
			})
			.addCase(getUsers.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			// Get user by ID
			.addCase(getUserById.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(getUserById.fulfilled, (state, action) => {
				state.loading = false;
				state.userDetails = action.payload;
			})
			.addCase(getUserById.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			})
			// Update user
			.addCase(updateUser.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(updateUser.fulfilled, (state, action) => {
				state.loading = false;
				state.users = state.users.map((user) =>
					user.id === action.payload.id ? action.payload : user
				);
			})
			.addCase(updateUser.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload;
			});
	},
});

export const { clearUserDetails } = userSlice.actions;

export default userSlice.reducer;
