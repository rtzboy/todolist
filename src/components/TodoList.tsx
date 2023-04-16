import { motion } from 'framer-motion';
import { ulParent } from '../constants/MotionAnimation';
import { useTodoListContext } from '../lib/contexts/TodoListContext';
import TodoListRow from './TodoListRow';

const TodoList = () => {
	const { todoListData } = useTodoListContext();

	return (
		<motion.ul
			initial='hidden'
			animate='visible'
			variants={ulParent(0.4)}
			className='flex flex-col overflow-hidden'
		>
			{todoListData.length &&
				todoListData.map(todoList => <TodoListRow key={todoList.id} todoTask={todoList} />)}
		</motion.ul>
	);
};

export default TodoList;
