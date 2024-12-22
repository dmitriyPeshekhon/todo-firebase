import './App.css';
import { useState } from 'react';
import {
	useRequestGetTodo,
	useDeleteTodo,
	useAddTodo,
	useEditTodo,
	sortSearchTodos,
} from '../../hooks/index';
import { SearchAndSort, Todo, ModalWindow } from '../index';

export const App = () => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [editTodo, setEditTodo] = useState(null); // для редактируемого todo что бы использовать его в модалке
	const [sort, setSort] = useState(false);
	const [search, setSearch] = useState('');

	const { todos } = useRequestGetTodo(setIsLoading, setIsError);
	const requestAddTodo = useAddTodo(setIsError);
	const requestDeleteTodo = useDeleteTodo(setIsError);
	const requestEditTodo = useEditTodo(setIsError);

	const finalyTodos = sortSearchTodos(todos, search, sort);

	return (
		<div className="container">
			<div className="tablo-container">
				<SearchAndSort
					sort={sort}
					setSort={setSort}
					search={search}
					setSearch={setSearch}
				/>

				<div className="tablo">
					{isLoading ? <span className="loader"></span> : null}

					{isError ? <p className="error">{isError}</p> : null}

					{!isLoading && !isError
						? finalyTodos.map((todoArr) => {
								return (
									<Todo
										key={todoArr[0]}
										todo={{ ...todoArr[1], id: todoArr[0] }}
										requestDeleteTodo={requestDeleteTodo}
										requestEditTodo={requestEditTodo}
										setIsModalOpen={setIsModalOpen}
										setEditTodo={setEditTodo}
									/>
								);
						  })
						: null}
				</div>
				<button className="btn-add-todo" onClick={() => setIsModalOpen(true)}>
					+
				</button>
			</div>
			<ModalWindow
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
				requestAddTodo={requestAddTodo}
				requestEditTodo={requestEditTodo}
				editTodo={editTodo}
				setEditTodo={setEditTodo}
			/>
		</div>
	);
};
