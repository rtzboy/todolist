import { motion } from 'framer-motion';
import { useReducer, useState } from 'react';
import FiltersTask from './components/FiltersTask';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { headerAnimate, headerInit } from './constants/MotionAnimation';
import { getTodoList } from './helpers/localStorage';
import { TodoListContext } from './lib/contexts/TodoListContext';
import { todoListReducer } from './lib/reducers/TodoListReducer';
import { FiltersType } from './types/TodoTasksTypes';

const App = () => {
	const [todoListData, dispatchTodoList] = useReducer(todoListReducer, getTodoList('todoList'));
	const [filterTasks, setFilterTasks] = useState<FiltersType>('allTask');

	return (
		<div>
			<TodoListContext.Provider value={{ todoListData, dispatchTodoList, filterTasks }}>
				<header className='mx-auto max-w-xl bg-neutral-800/50 p-5 text-amber-50 sm:mt-5'>
					<motion.h1 initial={headerInit()} animate={headerAnimate()} className='mb-5 text-4xl'>
						Todo List
					</motion.h1>
					<motion.p initial={headerInit()} animate={headerAnimate()} className='mb-5'>
						Get things done, one task at a time.
					</motion.p>
					<TodoForm />
				</header>
				<motion.section
					layout
					className='mx-auto max-h-[650px] max-w-xl overflow-auto bg-neutral-800/50 px-5 pb-5 text-amber-50'
				>
					<TodoList />
				</motion.section>
			</TodoListContext.Provider>
			<motion.footer layout className='mx-auto h-16 max-w-xl bg-neutral-800/50 px-5 text-amber-50'>
				<div>
					<span>Total: </span>
					{todoListData.length}
				</div>
				<FiltersTask filterTasks={filterTasks} setFilterTasks={setFilterTasks} />
			</motion.footer>
		</div>
	);
};

export default App;
