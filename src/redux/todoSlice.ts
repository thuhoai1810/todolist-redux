import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Todos {
	id: string;
	todo: string | undefined;
	description: string | undefined;
	date: string;
	priority: string | undefined;
}
type InitialState = {
	[x: string]: any;
	todoLists: Todos[];
};

const todoLists: Todos[] = [];
const initialState: InitialState = {
	todoLists,
};

export const todoSlice = createSlice({
	name: "todoLists",
	initialState,
	reducers: {
		addTodo(state, action: PayloadAction<Todos>) {
			state.todoLists.push(action.payload);
			localStorage.setItem("todoLists", JSON.stringify(state.todoLists));
			console.log(todoLists);
		},
	},
});

export const { addTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
