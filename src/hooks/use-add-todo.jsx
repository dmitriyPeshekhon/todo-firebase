import { db } from '../../firbase';
import { ref, push } from 'firebase/database';

export const useAddTodo = (setIsError) => {
	function requestAddTodo(titleTodo, setIsLoadingModalWindow) {
		setIsLoadingModalWindow(true);
		const refTodos = ref(db, 'todos');

		push(refTodos, {
			title: titleTodo,
			completed: false,
		})
			.catch((error) => {
				console.error(error);
				setIsError('Не удалось добавить задачу в базу');
			})
			.finally(() => {
				setIsLoadingModalWindow(false);
			});
	}

	return requestAddTodo;
};
