import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { taskList } from '../constants/MotionAnimation';
import { useTodoListContext } from '../lib/contexts/TodoListContext';
import TodoListRow from './TodoListRow';
import PlusDoc from './icons/PlusDoc';

const TodoList = () => {
	const { todoListData, filterTasks } = useTodoListContext();
	const [isDisabled, setIsDisabled] = useState(false);

	if (!todoListData.length)
		return (
			<motion.div
				initial={{ scale: 0.7, opacity: 0 }}
				animate={{ scale: 1, opacity: 1, transition: { type: 'spring' } }}
				className='flex flex-col items-center justify-center text-center text-sm italic text-neutral-500'
			>
				<PlusDoc className='h-12' />
				<span>Empty Tasks</span>
			</motion.div>
		);

	let taskListDone;

	if (filterTasks === 'allTask') taskListDone = todoListData;
	if (filterTasks === 'activeTask') taskListDone = todoListData.filter(item => !item.completed);
	if (filterTasks === 'completedTask') taskListDone = todoListData.filter(item => item.completed);

	return (
		<motion.ul
			initial='hidden'
			animate='visible'
			variants={taskList(0.2)}
			className='flex flex-col overflow-hidden'
		>
			<AnimatePresence>
				{taskListDone?.map(todoList => (
					<TodoListRow
						key={todoList.id}
						todoTask={todoList}
						isDisabled={isDisabled}
						setIsDisabled={setIsDisabled}
					/>
				))}
			</AnimatePresence>
		</motion.ul>
	);
};

export default TodoList;
