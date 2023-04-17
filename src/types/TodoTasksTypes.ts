export interface TodoData {
	id: string;
	description: string;
	completed: boolean;
	date: number;
}

export interface AddTodoTask {
	type: 'ADD_TODO_TASK';
	payload: {
		id: string;
		description: string;
	};
}

export interface EditTodoTask {
	type: 'EDIT_TODO_TASK';
	payload: {
		id: string;
		description: string;
		completed: boolean;
	};
}

export interface DeleteTodoTask {
	type: 'DELETE_TODO_TASK';
	payload: string;
}

export type TodoListReducerType = AddTodoTask | EditTodoTask | DeleteTodoTask;

export type FiltersType = 'allTask' | 'activeTask' | 'completedTask';
