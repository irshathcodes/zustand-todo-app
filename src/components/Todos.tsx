import useTodoStore from '../store/todoStore';
import Todo from './Todo';

export default function Todos() {
	const todos = useTodoStore((state) => state.todos);

	return (
		<div className="mt-8">
			<ul className="flex flex-col gap-4">
				{todos.map((todo) => (
					<Todo {...todo} key={todo.id} />
				))}
			</ul>
		</div>
	);
}
