import { createContext, useContext } from 'react';
import { FiltersType, TodoData, TodoListReducerType } from '../../types/TodoTasksTypes';

type TodoListContextType = {
	todoListData: TodoData[];
	dispatchTodoList: React.Dispatch<TodoListReducerType>;
	filterTasks: FiltersType;
};

export const TodoListContext = createContext<TodoListContextType>({} as TodoListContextType);

export const useTodoListContext = () => useContext(TodoListContext);
