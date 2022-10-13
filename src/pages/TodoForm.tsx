import React from "react";
import { useState } from "react";
import { nanoid } from "nanoid";
import { addTodo } from "../redux/todoSlice";
import { useDispatch } from "react-redux";

function TodoForm() {
	const [todo, setTodo] = useState<string>("");
	const [description, setDes] = useState<string>("");
	const [priority, setPri] = useState<string>("Normal");
	// const [todos, setTodos] = useState<Todos[]>(() => {
	// 	const storageTodo = JSON.parse(localStorage.getItem("todos") ?? "[]");
	// 	console.log(storageTodo);
	// 	return storageTodo;
	// });
	// const formatDate = Moment().format("DD-MM-YYYY");
	const [date, setDate] = useState("");

	const dispatch = useDispatch();
	// const todoss = useSelector();

	const handleSubmit = () => {
		// setTodos(() => {
		// 	const newTodo = {
		// 		id: nanoid(),
		// 		todo: todo,
		// 		description: des,
		// 		date: formatDate,
		// 		priority: pri,
		// 	};
		// 	const newTodos = [...todos, newTodo];

		// 	// save to local storage
		// 	const jsonTodos = JSON.stringify(newTodos);
		// 	localStorage.setItem("todo", jsonTodos);

		// 	return newTodos;
		// });
		dispatch(
			addTodo({
				id: nanoid(),
				todo,
				description,
				date,
				priority,
			})
		);

		setTodo("");
		setDes("");
		setDate("DD-MM-YYYY");
		setPri("Normal");
	};

	return (
		<div className='todo-form'>
			<div className='todo-container'>
				<h1 className='todo-text'>New task</h1>
				<input
					className='todo-input-task'
					placeholder='Add new task...'
					value={todo}
					onChange={(e) => setTodo(e.target.value)}
				/>
				<div className='todo-description'>
					<h5 className='todo-des-text'>Description</h5>
					<br />
					<textarea
						name='Text1'
						className='todo-des-input'
						value={description}
						onChange={(e) => setDes(e.target.value)}
					/>
				</div>
				<div className='todo-container-form'>
					<div className='todo-date'>
						<label className='todo-date-text'>Due Date:</label>
						<br />
						<input
							type='date'
							className='todo-date-input'
							value={date}
							onChange={(e) => setDate(e.target.value)}
						/>
					</div>
					<div className='todo-priorty'>
						<label className='todo-priorty-text'>Priority:</label>
						<br />
						<select
							className='todo-priorty-value'
							value={priority}
							onChange={(e) => setPri(e.target.value)}
						>
							<option value='normal'>Normal</option>
							<option value='low'>Low</option>
							<option value='high'>High</option>
						</select>
					</div>
				</div>
				<button className='todo-btn-add' onClick={handleSubmit}>
					Add
				</button>
			</div>
		</div>
	);
}

export default TodoForm;
