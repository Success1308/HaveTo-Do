// project.js

export default function Project(name){
	const toDos = [];

	const addTodo = (todo) => {
		toDos.push(todo);
	}

	const editTodo = (todoTitle) => {
		console.log(todoTitle);
	}

	const removeTodo = (todoTitle) => {
		toDos = toDos.filter(todo => todo.title !== todoTitle);
	}

	return {
		name,
		toDos,
		addTodo,
		editTodo,
		removeTodo
	}
};