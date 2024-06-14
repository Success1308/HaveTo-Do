// header.js

import Storage from './storage';


  const storage = Storage();
  async function fetchRandomQuote() {
	try {
	  const response = await fetch('https://api.quotable.io/random');
	  const data = await response.json();
	  return data.content;
	} catch (error) {
	  console.error('Error fetching quote:', error);
	  return '"You are never too old to set another goal or to dream a new dream."'; 
	}
  }

  async function createHeader() {
		const userName = storage.getUserName(); 
		const quote = await fetchRandomQuote();
	
		const header = document.createElement('div');
		header.className = 'header';
	
		const logo = document.createElement('div');
		logo.className = 'header-logo';
	
		const welcomeDiv = document.createElement('div');
		welcomeDiv.className = 'header-welcome';
		const welcomeP = document.createElement('p');
		welcomeP.className = 'header-welcome-p';
		welcomeP.textContent = `Good Evening, ${userName}`;
		welcomeDiv.appendChild(welcomeP);
	
		const quoteDiv = document.createElement('div');
		quoteDiv.className = 'header-Quote';
		const quoteP = document.createElement('p');
		quoteP.className = 'header-Quote-p';
		quoteP.textContent = quote;
		quoteDiv.appendChild(quoteP);
	
		header.appendChild(logo);
		header.appendChild(welcomeDiv);
		header.appendChild(quoteDiv);
	
		return header;
    }  
  
export { createHeader };
  