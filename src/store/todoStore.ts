import { StateCreator, create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export interface Todo {
	id: number;
	name: string;
	completed?: boolean;
}

interface TodoState {
	todos: Todo[];
	addTodo: (todo: string) => void;
	deleteTodo: (todoId: number) => void;
	toggleComplete: (todoId: number) => void;
}

const middlewares = (f: StateCreator<TodoState>) =>
	devtools(persist(f, { name: 'todo-storage' }));

const useTodoStore = create<TodoState>()(
	middlewares((set, get) => ({
		todos: [],

		addTodo: (todo: string) => {
			if (!todo.trim()) return;
			const id = new Date().getTime();

			set((state) => ({
				todos: [...state.todos, { id, name: todo, completed: false }],
			}));
		},

		deleteTodo: (todoId) => {
			const updatedTodos = get().todos.filter((todo) => todo.id !== todoId);
			set({ todos: updatedTodos });
		},

		toggleComplete: (todoId) => {
			const updatedTodos = get().todos.map((todo) => {
				if (todo.id === todoId) {
					return { ...todo, completed: !todo.completed };
				}
				return todo;
			});

			set({ todos: updatedTodos });
		},
	}))
);

export default useTodoStore;
