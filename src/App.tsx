import { motion } from 'framer-motion';
import { useReducer } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { getTodoList } from './helpers/localStorage';
import { TodoListContext } from './lib/contexts/TodoListContext';
import { todoListReducer } from './lib/reducers/TodoListReducer';

const App = () => {
	const [todoListData, dispatchTodoList] = useReducer(todoListReducer, getTodoList('todoList'));

	return (
		<div>
			<TodoListContext.Provider value={{ todoListData, dispatchTodoList }}>
				<header className='mx-auto mt-5 max-w-xl bg-neutral-800/50 p-5 text-amber-50'>
					<h1 className='mb-5 text-4xl'>Todo List</h1>
					<p className='mb-5'>Get things done, one task at a time.</p>
					<TodoForm />
				</header>
				<motion.section
					layout
					className='mx-auto max-w-xl bg-neutral-800/50 px-5 pb-5 text-amber-50'
				>
					<TodoList />
				</motion.section>
			</TodoListContext.Provider>
		</div>
	);
};

export default App;
