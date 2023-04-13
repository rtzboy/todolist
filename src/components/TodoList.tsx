import { TodoData } from '../App';
import TodoListRow from './TodoListRow';

type Props = {
	todoListData: TodoData[];
};

const TodoList = (props: Props) => {
	const { todoListData } = props;
	return (
		<ul className='flex flex-col '>
			{todoListData.length &&
				todoListData.map(todoList => <TodoListRow key={todoList.id} {...todoList} />)}
		</ul>
	);
};

export default TodoList;
