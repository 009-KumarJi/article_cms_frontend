import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import articleReducer from "./features/articleSlice";

const store = configureStore({
	reducer: {
		auth: authReducer,
		articles: articleReducer,
	},
	// devTools: import.meta.env.NODE_ENV !== "production",
});

export default store;
