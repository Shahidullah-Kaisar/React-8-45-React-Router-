import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <nav className='text-3xl bg-purple-600 p-8 flex justify-between'>
                <span>Jahangirnagar University</span>
                <div className='justify-end'>
                    <Link to='/' className='mr-8'>Home</Link>
                    <Link to='/users' className='mr-8'>Users</Link>
                    <Link to='/about' className='mr-8'>About</Link>
                    <Link to='/contact'>Contact</Link>
                </div>
                
            </nav>
 
                {/* <li><a href="/">Home</a></li>  // eta use korle page reload hoi
                <li><a href="/about">About</a></li>
                <li><a href="/Contact">Contact</a></li> */}
        
        </>
    );
};

export default Header;