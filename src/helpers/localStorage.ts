import { TodoData } from '../App';

const getTodoList = (key: string) => {
	if (localStorage) {
		try {
			const list = JSON.parse(localStorage.getItem(key) || '[]');
			return list;
		} catch (err) {
			console.log(`Something went wrong: ${err}`);
		}
	} else {
		console.log('localStorage not supported');
	}
};

const putTodoList = (key: string, todolist: TodoData[]) => {
	if (localStorage) {
		try {
			const list = localStorage.setItem(key, JSON.stringify(todolist));
		} catch (err) {
			console.log(`Something went wrong: ${err}`);
		}
	} else {
		console.log('localStorage not supported');
	}
};

export { getTodoList, putTodoList };
