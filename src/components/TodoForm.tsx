import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useTodoListContext } from '../lib/contexts/TodoListContext';

const TodoForm = () => {
	const { dispatchTodoList } = useTodoListContext();
	const [description, setDescription] = useState<string>('');

	const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		dispatchTodoList({ type: 'ADD_TODO_TASK', payload: { id: uuidv4(), description } });
		setDescription('');
	};

	const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
		setDescription(evt.target.value);
	};

	return (
		<form onSubmit={handleSubmit} className='mb-5 flex gap-1'>
			<input
				onChange={handleChange}
				value={description}
				placeholder='Add task'
				type='text'
				className='flex-grow rounded-lg bg-neutral-800 px-3 py-1 tracking-wide outline-none placeholder:italic'
			/>
			<button
				disabled={!description}
				className='rounded-md bg-amber-800 px-2 py-1 text-white transition-all disabled:opacity-40'
				type='submit'
			>
				Add
			</button>
		</form>
	);
};

export default TodoForm;
