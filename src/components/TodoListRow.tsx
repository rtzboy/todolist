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

	return (
		<li className='flex items-center justify-between gap-2 border-b-2 border-b-slate-300 py-2'>
			<div className='flex items-center gap-2'>
				<span className='text-gray-500'>
					{completed ? <DoubleCheck className='h-6 text-green-700' /> : <Check className='h-6' />}
				</span>
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
