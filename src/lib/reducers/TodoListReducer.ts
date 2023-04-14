import { putTodoList } from '../../helpers/localStorage';
import { TodoData, TodoListReducerType } from '../../types/TodoTasksTypes';

const todoListReducer = (state: TodoData[], action: TodoListReducerType) => {
	switch (action.type) {
		case 'ADD_TODO_TASK': {
			const newTodoTask = [
				...state,
				{
					id: action.payload.id,
					description: action.payload.description,
					completed: false,
					date: Date.now()
				}
			];
			putTodoList('todoList', newTodoTask);
			return newTodoTask;
		}

		case 'DELETE_TODO_TASK': {
			const filterTodoTask = state.filter(item => item.id !== action.payload);
			putTodoList('todoList', filterTodoTask);
			return filterTodoTask;
		}

		default:
			throw new Error(`Error on action: ${action}`);
	}
};

export { todoListReducer };
