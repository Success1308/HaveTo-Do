// NotesDom.js

function createNoteElement(noteContent) {
	// Create elements
	const divNote = document.createElement('div');
	divNote.classList.add('note');
	
	const divNoteContent = document.createElement('div');
	divNoteContent.classList.add('note-content');
	
	const pNoteContent = document.createElement('p');
	pNoteContent.classList.add('note-content-1');
	pNoteContent.textContent = noteContent;
	
	const divActionsNote = document.createElement('div');
	divActionsNote.classList.add('actions-note');
	
	const buttonRemoveNote = document.createElement('button');
	buttonRemoveNote.classList.add('remove-note');
	
	const iRemoveNoteIcon = document.createElement('i');
	iRemoveNoteIcon.classList.add('fas', 'fa-times');
	
	// Constructing the note structure
	buttonRemoveNote.appendChild(iRemoveNoteIcon);
	divActionsNote.appendChild(buttonRemoveNote);
	divNoteContent.appendChild(pNoteContent);
	divNote.appendChild(divNoteContent);
	divNote.appendChild(divActionsNote);
	
	return divNote;
  }
  
  function createRightSide() {
	// Create elements
	const divRightSide = document.createElement('div');
	divRightSide.classList.add('rightSide');
	
	const h4Title = document.createElement('h4');
	h4Title.textContent = "Note's";
	
	const divNoteList = document.createElement('div');
	divNoteList.classList.add('note-list');
	
	const noteElement = createNoteElement("Sample - Note Lorem ipsum dolor, ipsum dolor Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit, autem?");
	
	divNoteList.appendChild(noteElement);
	
	const divInputRight = document.createElement('div');
	divInputRight.classList.add('input-right');
	divInputRight.id = 'inputContainer';
	
	const iAddNoteIcon = document.createElement('i');
	iAddNoteIcon.classList.add('fa-solid', 'fa-square-plus', 'project-add-icon');
	iAddNoteIcon.id = 'addNoteButton';
	
	const divInputContainer = document.createElement('div');
	divInputContainer.classList.add('input-container');
	divInputContainer.style.display = 'none';
	
	const textareaNoteInput = document.createElement('textarea');
	textareaNoteInput.id = 'note-input';
	textareaNoteInput.placeholder = 'Enter your note';
	
	const buttonAddNote = document.createElement('button');
	buttonAddNote.id = 'add-note-btn';
	buttonAddNote.textContent = 'Add';
	
	divInputContainer.appendChild(textareaNoteInput);
	divInputContainer.appendChild(buttonAddNote);
	
	divInputRight.appendChild(iAddNoteIcon);
	divInputRight.appendChild(divInputContainer);
	
	divRightSide.appendChild(h4Title);
	divRightSide.appendChild(divNoteList);
	divRightSide.appendChild(divInputRight);
	
	return divRightSide;
  }
  
  // Export the function to be used in webpack or other modules
  export { createRightSide };
  