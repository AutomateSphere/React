import { ButtonComponent } from './Body';
import { Login } from '@mui/icons-material';
import { Logout } from '@mui/icons-material';
import { useState } from 'react';

const Header = () => {
    const[btnText, setBtnText] = useState("Login");

    const btnClickHandler = () => {
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
                {ButtonComponent(btnText, <Login />, btnClickHandler)}
            </div>
        </div>
    )
}


export default Header;