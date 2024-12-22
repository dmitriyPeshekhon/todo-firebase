import { db } from '../../firbase';
import { ref, update } from 'firebase/database';

export const useEditTodo = (setIsError) => {
	function requestEditTodo(id, param, setIsLoading) {
		const objWithRequest =
			typeof param === 'boolean' ? { completed: param } : { title: param };

		setIsLoading(true);
		const refUpdatedTodo = ref(db, `todos/${id}`);

		update(refUpdatedTodo, objWithRequest)
			.catch((error) => {
				console.error(error);
				setIsError('Не удалось редактировать задачу');
			})
			.finally(() => setIsLoading(false));
	}
	return requestEditTodo;
};
