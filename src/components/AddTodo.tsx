import { useState } from 'react';
import useTodoStore from '../store/todoStore';

export default function AddTodo() {
	const [todo, setTodo] = useState('');
	const addTodo = useTodoStore((state) => state.addTodo);

	const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
		e.preventDefault();
		addTodo(todo);
		setTodo('');
	};
	return (
		<form onSubmit={handleSubmit}>
			<div className="flex gap-2 my-4">
				<input
					type="text"
					value={todo}
					onChange={(e) => setTodo(e.target.value)}
					className="border-2 flex-1 focus:ring-2 focus:ring-purple-500 border-slate-200 px-2 py-2 rounded-md focus:outline-none"
					name="todo"
					autoFocus
				/>
				<button
					className="px-6 py-2 rounded-md text-slate-100 font-semibold bg-purple-500 ring-offset-1 hover:brightness-110 focus:ring-2 focus:ring-purple-500"
					type="submit"
				>
					Add
				</button>
			</div>
		</form>
	);
}
