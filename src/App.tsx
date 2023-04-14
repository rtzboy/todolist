import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { getTodoList } from './helpers/localStorage';
import { TodoListContext } from './lib/contexts/TodoListContext';

export interface TodoData {
	id: string;
	description: string;
	completed: boolean;
	date: number;
}

const App = () => {
	const [todoListData, setTodoListData] = useState<TodoData[]>(getTodoList('todoList'));

	return (
		<div className='mx-auto mt-5 max-w-xl p-5 font-roboto shadow-sm'>
			<h1 className='mb-5 text-2xl'>Todo List</h1>
			<p className='mb-5'>Get things done, one task at a time.</p>
			<TodoListContext.Provider value={{ todoListData, setTodoListData }}>
				<TodoForm />
				<TodoList />
			</TodoListContext.Provider>
		</div>
	);
};

export default App;
