// todo.js

import { parseISO, format } from 'date-fns';

export default function ToDo(task, detail, dueDate, priority){
	let completed = false;
	const parsedDueDate = parseISO(dueDate); 


	const toggleComplete = () => {
		completed = !completed;
	}

	const getFormattedDueDate = () => {
		return format(parsedDueDate, 'MMMM dd, yyyy');
	}

	return {
		task,
		detail,
		dueDate: parsedDueDate,
		priority,	
		completed, 
		toggleComplete, 
		getFormattedDueDate
	}
};