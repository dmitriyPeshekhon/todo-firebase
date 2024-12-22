import { useState, useEffect } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../../firbase';

export const useRequestGetTodo = (setIsLoading, setIsError) => {
	const [todos, setTodos] = useState([]);

	useEffect(() => {
		const todosDBRef = ref(db, 'todos');

		const unsubscribe = onValue(
			todosDBRef,
			(snapshot) => {
				try {
					const loadedTodos = snapshot.val() || [];
					setTodos(Object.entries(loadedTodos));
				} catch (error) {
					console.error('Ошибка при загрузке данных:', error);
					setIsError('Нам не удалось загрузить данные');
				} finally {
					setIsLoading(false);
				}
			},
			(error) => {
				console.error('Ошибка при подписке на данные:', error);
				setIsError('Нам не удалось загрузить данные');
				setIsLoading(false);
			},
		);
		return () => unsubscribe();
	}, []);

	return {
		todos,
		setTodos,
	};
};
