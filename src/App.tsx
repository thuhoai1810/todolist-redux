import React from "react";
import "./App.css";
import TodoForm from "./pages/TodoForm";
import TodoList from "./pages/TodoList";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<Routes>
			<Route path='/' element={<TodoList />} />
			<Route path='/add-todo' element={<TodoForm />} />
		</Routes>
	);
}

export default App;
