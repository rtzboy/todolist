import { AnimatePresence, motion } from 'framer-motion';
import { taskList } from '../constants/MotionAnimation';
import { useTodoListContext } from '../lib/contexts/TodoListContext';
import TodoListRow from './TodoListRow';

const TodoList = () => {
	const { todoListData } = useTodoListContext();

	if (!todoListData.length) return <div className='text-center italic'>EmptyElements</div>;

	return (
		<motion.ul
			initial='hidden'
			animate='visible'
			variants={taskList(0.2)}
			className='flex flex-col overflow-hidden'
		>
			<AnimatePresence>
				{todoListData.map(todoList => (
					<TodoListRow key={todoList.id} todoTask={todoList} />
				))}
			</AnimatePresence>
		</motion.ul>
	);
};

export default TodoList;
