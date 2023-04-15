import { useTodoListContext } from '../lib/contexts/TodoListContext';
import { TodoData } from '../types/TodoTasksTypes';
import { Check, DoubleCheck, MoveUpDown } from './icons/Check';
import Xmark from './icons/Xmark';

const TodoListRow = (props: TodoData) => {
	const { dispatchTodoList } = useTodoListContext();

	const { id, description, completed, date } = props;

	const handleDelete = (idItem: string) => {
		dispatchTodoList({ type: 'DELETE_TODO_TASK', payload: idItem });
	};

	const handleUpdate = (evt: React.ChangeEvent<HTMLInputElement>, idTask: string) => {
		dispatchTodoList({
			type: 'EDIT_TODO_TASK',
			payload: { id: idTask, description, completed: evt.target.checked }
		});
	};

	return (
		<li className='flex items-center justify-between gap-2 border-b border-b-slate-300 py-2'>
			<div className='flex items-center gap-2'>
				<label className='relative cursor-pointer rounded-full border-slate-800 p-1 transition-all hover:bg-slate-100'>
					<input
						type='checkbox'
						checked={completed}
						onChange={evt => handleUpdate(evt, id)}
						className='absolute -z-10 appearance-none'
					/>
					{completed ? <DoubleCheck className='h-6 text-green-700' /> : <Check className='h-6' />}
				</label>
				<span>{description}</span>
			</div>
			<div className='flex items-center gap-2'>
				<span onClick={() => handleDelete(id)}>
					<Xmark className='h-5' />
				</span>
				<span className='text-gray-500'>
					<MoveUpDown className='h-6' fill='gray' />
				</span>
			</div>
		</li>
	);
};

export default TodoListRow;
