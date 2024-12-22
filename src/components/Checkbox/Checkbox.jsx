import './Checkbox.css';
import { useState } from 'react';

export const Checkbox = ({ todo, requestEditTodo }) => {
	const [isLoadingCheckbox, setIsLoadingCheckbox] = useState(false);

	return (
		<div className="container-checkbox">
			{isLoadingCheckbox ? (
				<span className="loader-check-box"></span>
			) : (
				<input
					className="toggle-todo"
					type="checkbox"
					checked={todo.completed}
					onChange={() =>
						requestEditTodo(todo.id, !todo.completed, setIsLoadingCheckbox)
					}
				/>
			)}
		</div>
	);
};
