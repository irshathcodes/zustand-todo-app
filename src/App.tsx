import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
	return (
		<div className="md:mx-auto m-4 md:w-96">
			<h1 className="text-center text-2xl font-semibold text-slate-800">
				Add Your Todos!
			</h1>
			<AddTodo />
			<Todos />
		</div>
	);
}

export default App;
