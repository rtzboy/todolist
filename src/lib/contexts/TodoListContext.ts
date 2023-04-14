import { createContext, useContext } from 'react';
import { TodoData } from '../../App';

type TodoListContextType = {
	todoListData: TodoData[];
	setTodoListData: React.Dispatch<React.SetStateAction<TodoData[]>>;
};

export const TodoListContext = createContext<TodoListContextType>({} as TodoListContextType);

export const useTodoListContext = () => useContext(TodoListContext);
