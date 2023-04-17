import { motion, Reorder, useDragControls } from 'framer-motion';
import { Dispatch, useState } from 'react';
import { exitTaskItem, taskItem } from '../constants/MotionAnimation';
import { useTodoListContext } from '../lib/contexts/TodoListContext';
import { TodoData } from '../types/TodoTasksTypes';
import { Check, DoubleCheck, MoveUpDown } from './icons/Check';
import CheckDoc from './icons/CheckDoc';
import Edit from './icons/Edit';
import Xmark from './icons/Xmark';
import TaskEditArea from './TaskEditArea';

type TodoListRowProps = {
	setIsDisabled: Dispatch<React.SetStateAction<boolean>>;
	isDisabled: boolean;
	todoTask: TodoData;
};

const TodoListRow = ({ todoTask, isDisabled, setIsDisabled }: TodoListRowProps) => {
	const { dispatchTodoList, filterTasks } = useTodoListContext();

	const { id, description, completed } = todoTask;

	const [editing, setEditing] = useState(false);

	const dragControls = useDragControls();

	const editState = buttonEdit({ editing, description, setEditing, completed });

	let disableReorder = filterTasks === 'activeTask' || filterTasks === 'completedTask';

	return (
		<Reorder.Item
			exit={exitTaskItem()}
			variants={taskItem()}
			value={todoTask}
			dragListener={false}
			dragControls={dragControls}
			className='flex items-center justify-between gap-2 border-b border-b-amber-50/20 bg-[#1e1e1e] py-2 last:border-none'
		>
			<div className='flex items-center gap-2'>
				<label className='relative cursor-pointer rounded-full border-slate-800 p-1 transition-all hover:bg-amber-50/10'>
					<input
						type='checkbox'
						checked={completed}
						onChange={evt =>
							dispatchTodoList({
								type: 'EDIT_TODO_TASK',
								payload: { id, description, completed: evt.target.checked }
							})
						}
						className='absolute -z-10 appearance-none'
					/>
					<motion.span initial='hidden' animate='visible'>
						{completed ? <DoubleCheck className='h-6 text-green-400' /> : <Check className='h-6' />}
					</motion.span>
				</label>
				<TaskEditArea todoTask={todoTask} editing={editing} />
			</div>
			<div className='flex items-center gap-1'>
				{editState}
				<button
					disabled={isDisabled}
					onClick={() => {
						dispatchTodoList({ type: 'DELETE_TODO_TASK', payload: id });
						setIsDisabled(true);
						setTimeout(() => {
							setIsDisabled(false);
						}, 900);
					}}
					className='cursor-pointer rounded-full p-1 transition-all hover:bg-red-600/10 disabled:cursor-default disabled:opacity-50 disabled:hover:bg-inherit'
				>
					<Xmark className='h-5' />
				</button>
				<button
					disabled={disableReorder}
					className='cursor-grab select-none rounded-full p-1 transition-all hover:bg-green-600/10 disabled:cursor-default disabled:opacity-40 disabled:hover:bg-inherit'
				>
					{disableReorder ? (
						<MoveUpDown className='h-5' />
					) : (
						<MoveUpDown className='h-5' dragControls={dragControls} />
					)}
				</button>
			</div>
		</Reorder.Item>
	);
};

type ButtonEditType = {
	editing: boolean;
	description: string;
	completed: boolean;
	setEditing: Dispatch<React.SetStateAction<boolean>>;
};

const buttonEdit = ({ editing, description, completed, setEditing }: ButtonEditType) => {
	if (editing)
		return (
			<button
				onClick={() => setEditing(false)}
				disabled={!description}
				className='disabled:opacity-50'
			>
				<CheckDoc className='h-6' />
			</button>
		);
	return (
		<>
			{completed ? (
				<motion.span
					initial='visible'
					animate='hidden'
					className='opacity-0 transition-all delay-200'
				>
					<Edit className='h-5' />
				</motion.span>
			) : (
				<motion.span
					initial='hidden'
					animate='visible'
					onClick={() => setEditing(true)}
					className='cursor-pointer rounded-full p-1 transition-all hover:bg-blue-600/10'
				>
					<Edit className='h-5' />
				</motion.span>
			)}
		</>
	);
};

export default TodoListRow;
