import { formatDistanceToNow } from 'date-fns';
import { useTodoListContext } from '../lib/contexts/TodoListContext';
import { TodoData } from '../types/TodoTasksTypes';

type TaskEditAreaProps = {
	todoTask: TodoData;
	editing: boolean;
};

const TaskEditArea = ({ todoTask, editing }: TaskEditAreaProps) => {
	const { dispatchTodoList } = useTodoListContext();
	const { id, description, completed, date } = todoTask;

	if (editing)
		return (
			<textarea
				rows={2}
				value={description}
				maxLength={120}
				onChange={evt =>
					dispatchTodoList({
						type: 'EDIT_TODO_TASK',
						payload: { id, description: evt.target.value, completed }
					})
				}
				className='w-full max-w-[390px] resize-none rounded-md bg-neutral-800 px-2 py-1 shadow-sm outline-none'
			/>
		);

	return (
		<div
			className={`flex w-full max-w-[390px] flex-col transition-all duration-700 ${
				completed ? 'opacity-50' : ''
			}`}
		>
			<p className={`overflow-auto transition-all duration-700 ${completed ? 'line-through' : ''}`}>
				{description}
			</p>
			<span className='text-sm italic text-gray-500'>
				{formatDistanceToNow(date, { addSuffix: true })}
			</span>
		</div>
	);
};

export default TaskEditArea;
