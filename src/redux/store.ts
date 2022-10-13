import { configureStore } from "@reduxjs/toolkit";

import { todoReducer } from "./todoSlice";

// interface Store {}
export const store = configureStore({
	reducer: {
		todoLists: todoReducer,
	},
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
