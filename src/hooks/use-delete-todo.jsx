import { db } from '../../firbase.js';
import { ref, remove } from 'firebase/database';

export const useDeleteTodo = (setIsError) => {
	function requestDeleteTodo(id, setIsLoading) {
		setIsLoading(true);
		const refDeleteTodo = ref(db, `todos/${id}`);

		remove(refDeleteTodo)
			.catch((error) => {
				console.error('Ошибка при удалении элемента:', error);
				setIsError('Не удалось удалить задачу из базы данных');
			})
			.finally(() => setIsLoading(false));
	}
	return requestDeleteTodo;
};
