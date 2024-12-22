import './EditDeleteButtons.css';
import editPng from '../../assets/edit.png';
import deletePng from '../../assets/delete.png';
import { useState } from 'react';

export const EditDeleteButtons = ({
	id,
	title,
	requestDeleteTodo,
	setIsModalOpen,
	setEditTodo,
}) => {
	const [isLoadingDeleteBtn, setIsLoadingDeleteBtn] = useState(false);

	const handleClickEdit = () => {
		setEditTodo({
			id: id,
			title: title,
		});
		setIsModalOpen(true);
	};

	return (
		<div className="buttons-container">
			{isLoadingDeleteBtn ? (
				<span className="loader-buttons"></span>
			) : (
				<>
					<div className="img-container-btn" onClick={handleClickEdit}>
						<img className="img-btn" src={editPng} alt="edit" />
					</div>
					<div
						className="img-container-btn"
						onClick={() => requestDeleteTodo(id, setIsLoadingDeleteBtn)}
					>
						<img className="img-btn" src={deletePng} alt="delete" />
					</div>
				</>
			)}
		</div>
	);
};
