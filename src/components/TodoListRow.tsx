import { Dispatch, useState } from 'react';
import { useTodoListContext } from '../lib/contexts/TodoListContext';
import { TodoData } from '../types/TodoTasksTypes';
import TaskEditArea from './TaskEditArea';
import { Check, DoubleCheck, MoveUpDown } from './icons/Check';
import CheckDoc from './icons/CheckDoc';
import Edit from './icons/Edit';
import Xmark from './icons/Xmark';

const TodoListRow = (props: TodoData) => {
	const { dispatchTodoList } = useTodoListContext();

	const { id, description, completed, date } = props;

	const [editing, setEditing] = useState(false);

	const editState = buttonEdit({ editing, description, setEditing, completed });

	return (
		<li className='flex items-center justify-between gap-2 border-b border-b-slate-300 py-2'>
			<div className='flex items-center gap-2'>
				<label className='relative cursor-pointer rounded-full border-slate-800 p-1 transition-all hover:bg-slate-100'>
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
					{completed ? <DoubleCheck className='h-6 text-green-700' /> : <Check className='h-6' />}
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
					className='cursor-pointer'
				>
					<Xmark className='h-5' />
				</span>
				<span className='cursor-pointer text-gray-500'>
					<MoveUpDown className='h-6' fill='#fff' />
				</span>
			</div>
		</li>
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
				<span></span>
			) : (
				<span onClick={() => setEditing(true)} className='cursor-pointer'>
					<Edit className='h-5' />
				</span>
			)}
		</>
	);
};

export default TodoListRow;
