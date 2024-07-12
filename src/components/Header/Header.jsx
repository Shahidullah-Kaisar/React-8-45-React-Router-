import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'
import { FiMenu } from 'react-icons/fi';
import { ImCross } from 'react-icons/im';


const Header = () => {

    const [open, setOpen] = useState(false)


    return (

        <>
            <nav className='text-3xl bg-purple-600 p-8 md:flex md:justify-between'>
                <div className='md:hidden flex justify-end' onClick={ () => setOpen(!open)}>
                    {
                        open === true ? <ImCross></ImCross> : <FiMenu />
                    }
                    
                </div>
                <span>Jahangirnagar University</span>

                <div className={`justify-end absolute md:static ${open === true ? 'top-32 ml-96' : '-top-40 ml-0'} duration-500`}>
                    <NavLink to='/' className='mr-8 block md:inline-block'>Home</NavLink>
                    <NavLink to='/users' className='mr-8 block md:inline-block'>Users</NavLink>
                    <NavLink to='/about' className='mr-8 block md:inline-block'>About</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
                </div>
                
            </nav>   
        
        </>
    );
};

export default Header;