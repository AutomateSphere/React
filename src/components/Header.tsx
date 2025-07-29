import { ButtonComponent } from './Body';
import { Login } from '@mui/icons-material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
    const[btnText, setBtnText] = useState<string>("Login");

    const btnClickHandler = (): void => {
        btnText === "Login" ? setBtnText("Logout") : setBtnText("Login");
    }

    return (
        <div className='header'>
            <div>
                <img className='logo' src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' alt='logo' />
            </div>
            <div className='nav-items'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
            <div className='login-container'>
                <ButtonComponent
                    text={btnText}
                    icon={<Login />}
                    onClick={btnClickHandler}
                />
            </div>
        </div>
    )
}


export default Header;