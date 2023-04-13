import { TodoData } from '../App';
import { Check, DoubleCheck, MoveUpDown } from './icons/Check';
import Edit from './icons/Edit';
import Xmark from './icons/Xmark';

const TodoListRow = (props: TodoData) => {
	const { id, description, completed, date } = props;

	return (
		<li className='flex items-center justify-between gap-2 border-b-2 border-b-slate-300 py-2'>
			<div className='flex items-center gap-2'>
				<span className='text-gray-500'>
					{completed ? <DoubleCheck className='h-6 text-green-700' /> : <Check className='h-6' />}
				</span>
				<span>{description}</span>
			</div>
			<div className='flex items-center gap-2'>
				<span>
					<Edit className='h-5' />
				</span>
				<span>
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
