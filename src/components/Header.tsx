import { ButtonComponent } from './Body';
import { Login } from '@mui/icons-material';
import React, { useState } from 'react';


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
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
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