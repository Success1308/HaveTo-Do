import { createHeader } from './header';

// createLayout.js
export default function createLayout() {

  const layoutSection1 = document.createElement('section');
  layoutSection1.classList.add('layout');
  let layoutSection = document.querySelector('layoutSection');

  const header = createHeader();
  console.log(createHeader());
  layoutSection.appendChild(header);

    
  return layoutSection;
}


// import { createHeader } from './leftside.js';
// import { createBody } from './body.js';
// import { createRightSide } from './rightside.js';
// import { createFooter } from './footer.js';




//   // Create and append left side content
//   const leftSide = createLeftSide();
//   layoutSection.appendChild(leftSide);

//   // Create and append body content
//   const body = createBody();
//   layoutSection.appendChild(body);

//   // Create and append right side content
//   const rightSide = createRightSide();
//   layoutSection.appendChild(rightSide);

//   // Create and append footer
//   const footer = createFooter();
//   layoutSection.appendChild(footer);