import React from 'react';
import Header from '../Header/Header';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { DNA } from 'react-loader-spinner'

const Home = () => {

    const location = useLocation();

    return (
        <>
            <div className="bg-purple-300 min-h-screen -mb-16">
                <Header></Header>
                <Outlet></Outlet>
                <div>
                    {location.pathname === '/' && (
                        <div className="text-7xl text-center mt-40 text-yellow-800">
                        <p>Jahangirnagar University</p>

                        <div className='flex justify-center'>
                            <DNA
                                visible={true}
                                height="400"
                                width="400"
                                ariaLabel="dna-loading"
                                wrapperStyle={{}}
                                wrapperClass="dna-wrapper"
                            />

                        </div>
                            
                        </div>
                    )}
                </div>
                
            </div>
            
            <div>
                {
                    (location.pathname === '/' || location.pathname ==='/contact' || location.pathname ==='/about') && (<div>
                        <Footer></Footer>
                    </div>)
                }

            </div>
            
        </>
        
        
    );
};

export default Home;