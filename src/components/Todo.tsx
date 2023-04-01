import type { Todo } from '../store/todoStore';
import useTodoStore from '../store/todoStore';

export default function Todo(todo: Todo) {
	const toggleComplete = useTodoStore((state) => state.toggleComplete);
	const deleteTodo = useTodoStore((state) => state.deleteTodo);

	return (
		<li className="flex gap-2 bg-slate-200 py-2 px-3 rounded-md">
			<div
				className={`transition-all duration-300 ${
					todo.completed ? 'opacity-100' : 'opacity-0'
				}`}
			>
				✅
			</div>
			<div className="flex-1">
				<button
					type="button"
					className="w-full outline-none"
					onClick={() => toggleComplete(todo.id)}
				>
					<p className={`text-center ${todo.completed ? 'line-through' : ''}`}>
						{todo.name}
					</p>
				</button>
			</div>

			<div>
				<button onClick={() => deleteTodo(todo.id)}>❌</button>
			</div>
		</li>
	);
}
