import React from 'react';
import ReactDOM from 'react-dom/client';

// ## Creating a root element
const root = ReactDOM.createRoot(document.getElementById('root'));

// replicate html structure using React
/* <div id ="parent">
    <div id ="child">
        <h1>Hello, World! from React</h1>
        <p>This is a paragraph.</p>
    </div>
</div> */
// ## This code creates a simple React component structure that replicates the HTML structure provided in the comment above.
const parent = React.createElement('div', { id: 'parent' }, 
    React.createElement('div', { id: 'child' },
        [
            React.createElement('h1', null, 'Hello, World! from React'),
            React.createElement('p', null, 'This is a paragraph.')
        ]
    )  
)

// ## simple heading using React
const heading3 = React.createElement('h3', {
    id: 'heading3'
}, 'Hello, World! from React - js!');



// ####### component composition

const span = <span>span example in title 1</span>
const Title  = () => (
    
    <h1>Hello, component composition example title 2
        {span}
    </h1>
);

const Title2  = function () {
    return (
        <h1>Hello, component composition example2 Title 2</h1>
    );
};


const number = 10;
const HeadingComponent = () => (
    <div id="container">
        <Title />
        <Title2></Title2>
        {Title2()}
        <h2>{number}</h2>
        { console.log('This is a jS in react Component') }
        <h1> react functional component</h1>
    </div>
)



// #### Rendering

//root.render(heading3);
//root.render(parent);
root.render(<HeadingComponent />);
//root.render(<Title />);
