import React from 'react'
import './Nav.css';

const Nav = () => {
    return (
        <div className='nav'>
            <img
                className='navLogo'
                src='https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png'
                alt='Netflix' 
            />
            <img
                className='navAvatar'
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                alt="Netflix" 
            />
        </div>
    )
}

export default Nav;

