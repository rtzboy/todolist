import { useTodoListContext } from '../lib/contexts/TodoListContext';
import TodoListRow from './TodoListRow';

const TodoList = () => {
	const { todoListData } = useTodoListContext();

	return (
		<ul className='flex flex-col '>
			{todoListData.length &&
				todoListData.map(todoList => <TodoListRow key={todoList.id} {...todoList} />)}
		</ul>
	);
};

export default TodoList;
