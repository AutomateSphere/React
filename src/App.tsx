import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';

// ## Creating a root element
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// ### COmponent
// const TypographyComponent = ({ text, variant, component }) => {
//     return (
//         <Typography variant={variant} component={component}>
//             {text}
//         </Typography>
//     )
// }

const AppLayout: React.FC = () => {
    return (
        <div className='app'>
            <Header />
            <Body />
        </div>
    );
};


// #### Rendering
root.render(<AppLayout />);
