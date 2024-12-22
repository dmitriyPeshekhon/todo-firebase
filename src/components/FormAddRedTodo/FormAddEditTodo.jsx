import './FormAddEditTodo.css';
import { useState } from 'react';

export const FormAddRedTodo = ({
	setIsModalOpen,
	requestAddTodo,
	requestEditTodo,
	editTodo,
	setEditTodo,
	isLoadingModalWindow,
	setIsLoadingModalWindow,
}) => {
	const [textArea, setTextArea] = useState(editTodo ? editTodo.title : '');
	const [isErrorTextarea, setIsErrorTextarea] = useState(false);

	const handleTextareaChange = ({ target }) => {
		setTextArea(target.value);
	};

	const handleFormSubmit = async (e) => {
		e.preventDefault();
		if (textArea === '') {
			setIsErrorTextarea(true);
			return;
		} else {
			setIsLoadingModalWindow(true);
			editTodo
				? await requestEditTodo(editTodo.id, textArea, setIsLoadingModalWindow)
				: await requestAddTodo(textArea, setIsLoadingModalWindow);
			setEditTodo(null);
			setIsModalOpen(false);
		}
	};

	return (
		<form className="form-add-todo" onSubmit={handleFormSubmit}>
			<textarea
				name="titleTodo"
				className={`textarea${isErrorTextarea ? ' error-textarea' : ''}`}
				rows="3"
				placeholder={
					isErrorTextarea
						? 'Введите минимум один символ'
						: 'Введите вашу задачу...'
				}
				value={textArea}
				onChange={handleTextareaChange}
			></textarea>
			{isLoadingModalWindow ? (
				<span className="loader"></span>
			) : (
				<button
					className="btn-modal-window"
					type="submit"
					disabled={editTodo && editTodo.title === textArea ? true : false}
				>
					{editTodo ? 'Применить' : 'Добавить'}
				</button>
			)}
		</form>
	);
};
