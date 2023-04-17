import { AnimatePresence, Reorder, motion } from 'framer-motion';
import { useState } from 'react';
import { taskList } from '../constants/MotionAnimation';
import { useTodoListContext } from '../lib/contexts/TodoListContext';
import { TodoData } from '../types/TodoTasksTypes';
import TodoListRow from './TodoListRow';
import PlusDoc from './icons/PlusDoc';

const TodoList = () => {
	const { todoListData, filterTasks, dispatchTodoList } = useTodoListContext();
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

	let taskListDone: TodoData[] = [];

	if (filterTasks === 'allTask') taskListDone = todoListData;
	if (filterTasks === 'activeTask') taskListDone = todoListData.filter(item => !item.completed);
	if (filterTasks === 'completedTask') taskListDone = todoListData.filter(item => item.completed);

	return (
		<Reorder.Group
			axis='y'
			onReorder={taskListDone =>
				dispatchTodoList({ type: 'REORDER_TODO_TASK', payload: { taskListDone } })
			}
			values={taskListDone}
			initial='hidden'
			animate='visible'
			variants={taskList(0.2)}
			className='flex flex-col overflow-hidden'
		>
			<AnimatePresence>
				{taskListDone.map(todoList => (
					<TodoListRow
						key={todoList.id}
						todoTask={todoList}
						isDisabled={isDisabled}
						setIsDisabled={setIsDisabled}
					/>
				))}
			</AnimatePresence>
		</Reorder.Group>
	);
};

export default TodoList;
