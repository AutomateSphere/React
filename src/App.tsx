import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import About from './components/About';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import Contact from './components/Contact';


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
            <Outlet />
        </div>
    );
};


const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/contact',
                element: <Contact />,
            },
        ],
    },
])

// ## Creating a root element
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// #### Rendering
//root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
