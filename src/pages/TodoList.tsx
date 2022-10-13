import React from "react";
import { Link } from "react-router-dom";
// import {todoLists} from  "./redux/todoSlice"
function TodoList() {
	// const todo = useSelector((state: RootState) => state.todoLists.value);
	const storageTodo = JSON.parse(localStorage.getItem("todoLists ") ?? "[]");
	return (
		<div className='todo-list'>
			<Link to='/add-todo'>
				<button className='todo-btn-add'>Add</button>
			</Link>
			<ul className='complete'>
				{storageTodo.map((todoLists: any) => {
					console.log(todoLists);
					return (
						<li key={todoLists.id}>
							<p>{todoLists.todo}:</p>
							<p>{todoLists.date}</p>
							<p>{todoLists.priority}</p>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default TodoList;
