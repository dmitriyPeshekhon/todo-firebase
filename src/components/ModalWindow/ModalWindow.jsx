import './ModalWindow.css';
import closePng from '../../assets/close.png';
import { useState } from 'react';
import { FormAddRedTodo } from '../index';

export const ModalWindow = ({
	isModalOpen,
	setIsModalOpen,
	requestAddTodo,
	requestEditTodo,
	editTodo,
	setEditTodo,
}) => {
	const [isLoadingModalWindow, setIsLoadingModalWindow] = useState(false); // для лоадера в FormAddRedTodo и так же что бы нельзя было закрыть модалку пока идет запрос

	const handleCloseModalWindow = ({ target }) => {
		if (
			!isLoadingModalWindow &&
			(target.className.includes('modal-overlay') ||
				target.closest('.img-container-btn'))
		) {
			setEditTodo(null);
			setIsModalOpen(false);
		}
	};

	return isModalOpen ? (
		<div className="modal-overlay" onClick={handleCloseModalWindow}>
			<div className="modal-window">
				<div className="img-container-btn" onClick={handleCloseModalWindow}>
					<img className="img-btn" src={closePng} alt="delete" />
				</div>
				<FormAddRedTodo
					setIsModalOpen={setIsModalOpen}
					requestAddTodo={requestAddTodo}
					requestEditTodo={requestEditTodo}
					editTodo={editTodo}
					setEditTodo={setEditTodo}
					isLoadingModalWindow={isLoadingModalWindow}
					setIsLoadingModalWindow={setIsLoadingModalWindow}
				/>
			</div>
		</div>
	) : null;
};
