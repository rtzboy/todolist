import { formatDistanceToNow } from 'date-fns';
import { Dispatch, useState } from 'react';
import { useTodoListContext } from '../lib/contexts/TodoListContext';
import { TodoData } from '../types/TodoTasksTypes';
import { Check, DoubleCheck, MoveUpDown } from './icons/Check';
import CheckDoc from './icons/CheckDoc';
import Edit from './icons/Edit';
import Xmark from './icons/Xmark';

const TodoListRow = (props: TodoData) => {
	const { dispatchTodoList } = useTodoListContext();

	const { id, description, completed, date } = props;

	const [editing, setEditing] = useState(false);

	const handleDelete = (idItem: string) => {
		dispatchTodoList({ type: 'DELETE_TODO_TASK', payload: idItem });
	};

	const editState = buttonEdit({ editing, description, setEditing });

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
				{editing ? (
					<textarea
						rows={Math.ceil(description.length / 50)}
						value={description}
						maxLength={120}
						onChange={evt =>
							dispatchTodoList({
								type: 'EDIT_TODO_TASK',
								payload: { id, description: evt.target.value, completed }
							})
						}
						className='w-[400px] resize-none rounded-md px-2 py-1 shadow-sm outline-none'
					/>
				) : (
					<div className='flex flex-col'>
						<span className='w-[400px] overflow-auto'>{description}</span>
						<span className='text-sm text-gray-500'>
							{formatDistanceToNow(date, { addSuffix: true })}
						</span>
					</div>
				)}
			</div>
			<div className='flex items-center gap-2'>
				{editState}
				<span onClick={() => handleDelete(id)} className='cursor-pointer'>
					<Xmark className='h-5' />
				</span>
				<span className='cursor-pointer text-gray-500'>
					<MoveUpDown className='h-6' fill='#fff' />
				</span>
			</div>
		</li>
	);
};

type buttonEditType = {
	editing: boolean;
	description: string;
	setEditing: Dispatch<React.SetStateAction<boolean>>;
};

const buttonEdit = ({ editing, description, setEditing }: buttonEditType) => {
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
		<span onClick={() => setEditing(true)} className='cursor-pointer'>
			<Edit className='h-5' />
		</span>
	);
};

export default TodoListRow;
