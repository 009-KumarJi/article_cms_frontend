import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import articleReducer from "./features/articleSlice";
import userReducer from "./features/userSlice";

const store = configureStore({
	reducer: {
		auth: authReducer,
		articles: articleReducer,
		users: userReducer,
	},
	// devTools: import.meta.env.NODE_ENV !== "production",
});

export default store;

