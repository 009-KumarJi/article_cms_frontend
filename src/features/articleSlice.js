import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getArticles } from '../../api/article.api';

export const fetchArticles = createAsyncThunk('articles/fetchArticles', async () => {
	const { data } = await getArticles();
	return data;
});

const articleSlice = createSlice({
	name: 'articles',
	initialState: {
		articles: [],
		loading: false,
	},
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchArticles.pending, (state) => {
				state.loading = true;
			})
			.addCase(fetchArticles.fulfilled, (state, action) => {
				state.loading = false;
				state.articles = action.payload;
			})
			.addCase(fetchArticles.rejected, (state) => {
				state.loading = false;
			});
	},
});

export default articleSlice.reducer;
