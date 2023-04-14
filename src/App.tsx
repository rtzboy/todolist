import { useReducer } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { getTodoList } from './helpers/localStorage';
import { TodoListContext } from './lib/contexts/TodoListContext';
import { todoListReducer } from './lib/reducers/TodoListReducer';

const App = () => {
	const [todoListData, dispatchTodoList] = useReducer(todoListReducer, getTodoList('todoList'));

	return (
		<div className='mx-auto mt-5 max-w-xl p-5 font-roboto shadow-sm'>
			<h1 className='mb-5 text-2xl'>Todo List</h1>
			<p className='mb-5'>Get things done, one task at a time.</p>
			<TodoListContext.Provider value={{ todoListData, dispatchTodoList }}>
				<TodoForm />
				<TodoList />
			</TodoListContext.Provider>
		</div>
	);
};

export default App;
