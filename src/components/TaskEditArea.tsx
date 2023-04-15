import { formatDistanceToNow } from 'date-fns';
import { useTodoListContext } from '../lib/contexts/TodoListContext';

type Props = {
	id: string;
	description: string;
	completed: boolean;
	date: number;
	editing: boolean;
};

const TaskEditArea = (props: Props) => {
	const { dispatchTodoList } = useTodoListContext();
	const { id, description, completed, date, editing } = props;

	if (editing)
		return (
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
		);

	return (
		<div className={`flex flex-col ${completed ? 'opacity-50' : ''}`}>
			<span className={`w-[400px] overflow-auto ${completed ? 'line-through' : ''}`}>
				{description}
			</span>
			<span className='text-sm text-gray-500'>
				{formatDistanceToNow(date, { addSuffix: true })}
			</span>
		</div>
	);
};

export default TaskEditArea;
