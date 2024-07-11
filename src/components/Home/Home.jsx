import React from 'react';
import Header from '../Header/Header';
import { Outlet, useLocation } from 'react-router-dom';

const Home = () => {

    const location = useLocation();

    return (
        <>
            <div className="bg-purple-300 min-h-screen">
            <Header></Header>
            <Outlet></Outlet>
            <div>
                {location.pathname === '/' && (
                    <div className="text-7xl text-center mt-40 text-yellow-800">
                    <p>Jahangirnagar University</p>
                    </div>
                )}
            </div>
            </div>
            
        </>
        
        
    );
};

export default Home;