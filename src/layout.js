// Importing sub-modules
import { createHeader } from './header.js';
import { createLeftSide } from './leftside.js';
import { createBody } from './body.js';
import { createRightSide } from './rightside.js';
import { createFooter } from './footer.js';

// Function to create the entire layout
export function createLayout() {
  // Create main section element with class "layout"
  const layoutSection = document.createElement('section');
  layoutSection.classList.add('layout');

  // Create and append header
  const header = createHeader();
  layoutSection.appendChild(header);

  // Create and append left side content
  const leftSide = createLeftSide();
  layoutSection.appendChild(leftSide);

  // Create and append body content
  const body = createBody();
  layoutSection.appendChild(body);

  // Create and append right side content
  const rightSide = createRightSide();
  layoutSection.appendChild(rightSide);

  // Create and append footer
  const footer = createFooter();
  layoutSection.appendChild(footer);

  return layoutSection;
}
