// todo.js

export default function ToDo(task, priority){
	let completed = false;


	const toggleComplete = () => {
		completed = !completed;
	}

	return {
		task,
		priority,	
		completed, 
		toggleComplete, 
	}
};