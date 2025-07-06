import React from 'react';
import ReactDOM from 'react-dom/client';


// replicate html structure using React
/* <div id ="parent">
    <div id ="child">
        <h1>Hello, World! from React</h1>
        <p>This is a paragraph.</p>
    </div>
</div> */
// This code creates a simple React component structure that replicates the HTML structure provided in the comment above.
const parent = React.createElement('div', { id: 'parent' }, 
    React.createElement('div', { id: 'child' },
        [
            React.createElement('h1', null, 'Hello, World! from React'),
            React.createElement('p', null, 'This is a paragraph.')
        ]
    )  
)

//simple heading using React
const heading3 = React.createElement('h3', {
    id: 'heading3'
}, 'Hello, World! from React - js!');


const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(heading3);

root.render(parent);


