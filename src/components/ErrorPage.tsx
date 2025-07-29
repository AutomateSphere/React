import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='error'>
            <h1>Oops! Something went wrong.</h1>
            <p>Please try again later.</p>
            <Link to='/'>Go to Home</Link>
        </div>
    );
}

export default ErrorPage;