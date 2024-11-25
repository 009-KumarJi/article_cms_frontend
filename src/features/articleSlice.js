import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../services/api";

// Thunks for article API calls
export const fetchArticles = createAsyncThunk("articles/fetchAll", async (_, { rejectWithValue }) => {
	try {
		const response = await api.get("/articles");
		return response.data;
	} catch (error) {
		return rejectWithValue(error.response.data);
	}
});

export const createArticle = createAsyncThunk("articles/create", async (data, { rejectWithValue }) => {
	try {
		const response = await api.post("/articles", data);
		return response.data;
	} catch (error) {
		return rejectWithValue(error.response.data);
	}
});

export const updateArticle = createAsyncThunk("articles/update", async ({ id, data }, { rejectWithValue }) => {
	try {
		const response = await api.put(`/articles/${id}`, data);
		return response.data;
	} catch (error) {
		return rejectWithValue(error.response.data);
	}
});

export const deleteArticle = createAsyncThunk("articles/delete", async (id, { rejectWithValue }) => {
	try {
		await api.delete(`/articles/${id}`);
		return id;
	} catch (error) {
		return rejectWithValue(error.response.data);
	}
});

// Article slice
const articleSlice = createSlice({
	name: "articles",
	initialState: { articles: [], loading: false, error: null },
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticles.fulfilled, (state, action) => {
				state.articles = action.payload;
				state.error = null;
			})
			.addCase(createArticle.fulfilled, (state, action) => {
				state.articles.push(action.payload);
			})
			.addCase(updateArticle.fulfilled, (state, action) => {
				const index = state.articles.findIndex((article) => article._id === action.payload._id);
				if (index !== -1) state.articles[index] = action.payload;
			})
			.addCase(deleteArticle.fulfilled, (state, action) => {
				state.articles = state.articles.filter((article) => article._id !== action.payload);
			})
			.addMatcher(
				(action) => action.type.endsWith("/pending"),
				(state) => {
					state.loading = true;
					state.error = null;
				}
			)
			.addMatcher(
				(action) => action.type.endsWith("/rejected"),
				(state, action) => {
					state.loading = false;
					state.error = action.payload;
				}
			)
			.addMatcher(
				(action) => action.type.endsWith("/fulfilled"),
				(state) => {
					state.loading = false;
				}
			);
	},
});

export default articleSlice.reducer;
