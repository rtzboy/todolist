import { motion } from 'framer-motion';
import { Dispatch, useState } from 'react';
import { exitTaskItem, taskItem } from '../constants/MotionAnimation';
import { useTodoListContext } from '../lib/contexts/TodoListContext';
import { TodoData } from '../types/TodoTasksTypes';
import TaskEditArea from './TaskEditArea';
import { Check, DoubleCheck } from './icons/Check';
import CheckDoc from './icons/CheckDoc';
import Edit from './icons/Edit';
import Xmark from './icons/Xmark';

type TodoListRowProps = {
	todoTask: TodoData;
};

const TodoListRow = ({ todoTask }: TodoListRowProps) => {
	const { dispatchTodoList } = useTodoListContext();

	const { id, description, completed, date } = todoTask;

	const [editing, setEditing] = useState(false);

	const editState = buttonEdit({ editing, description, setEditing, completed });

	return (
		<motion.li
			layout
			variants={taskItem()}
			exit={exitTaskItem()}
			transition={{ duration: 1, type: 'spring' }}
			className='flex items-center justify-between gap-2 border-b border-b-amber-50/20 py-2 last:border-none'
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
				<TaskEditArea
					id={id}
					description={description}
					completed={completed}
					date={date}
					editing={editing}
				/>
			</div>
			<div className='flex items-center gap-2'>
				{editState}
				<span
					onClick={() => dispatchTodoList({ type: 'DELETE_TODO_TASK', payload: id })}
					className='cursor-pointer rounded-full p-1 transition-all hover:bg-red-600/10'
				>
					<Xmark className='h-5' />
				</span>
			</div>
		</motion.li>
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
