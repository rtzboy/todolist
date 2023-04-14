import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getTodoList, putTodoList } from '../helpers/localStorage';

type Props = {};

const TodoForm = (props: Props) => {
	const [description, setDescription] = useState<string>('');

	const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
		evt.preventDefault();
		const todoListStorage = getTodoList('todoList');
		const newTodoList = [
			...todoListStorage,
			{ id: uuidv4(), description, completed: false, date: Date.now() }
		];
		putTodoList('todoList', newTodoList);
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
				type='text'
				className='flex-grow border-b-2 border-b-gray-500 px-3 py-1 tracking-wide outline-none'
			/>
			<button className='bg-blue-500 px-2 py-1 text-white' type='submit'>
				Add
			</button>
		</form>
	);
};

export default TodoForm;
