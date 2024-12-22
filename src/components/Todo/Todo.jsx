import './Todo.css';
import { Checkbox, EditDeleteButtons } from '../index';

export const Todo = ({
	todo,
	requestDeleteTodo,
	requestEditTodo,
	setIsModalOpen,
	setEditTodo,
}) => {
	return (
		<div className="todo-container">
			<Checkbox todo={todo} requestEditTodo={requestEditTodo} />

			<p
				className="title-todo"
				style={todo.completed ? { textDecoration: 'line-through' } : {}}
			>
				{todo.title}
			</p>

			<EditDeleteButtons
				id={todo.id}
				title={todo.title}
				requestDeleteTodo={requestDeleteTodo}
				setIsModalOpen={setIsModalOpen}
				setEditTodo={setEditTodo}
			/>
		</div>
	);
};
