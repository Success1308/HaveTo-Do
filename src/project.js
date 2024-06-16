// project.js

export default function Project(name){
	const projectName = name;
	let toDos = []; 

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
		projectName,
		toDos,
		addTodo,
		editTodo,
		removeTodo
	}
};
