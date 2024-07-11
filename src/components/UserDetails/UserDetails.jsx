import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const UserDetails = () => {

    const user = useLoaderData()

    const {name,phone,website} = user;

    const navigate = useNavigate();

    const handleGoBack = () =>{
        navigate(-1)
    }

    return (
        <>
            <div className='text-center mt-20 text-3xl'>
                <h1 className='text-red-600 underline mb-8'>{name} Details</h1>
                <h1>Name: {name}</h1>
                <h1>Phone: {phone}</h1>
                <h1>Website: {website}</h1>

                <button onClick={handleGoBack} className='bg- bg-green-500 p-4 mt-10 rounded-lg hover:bg-green-700 duration-500'>Go Back</button>
            </div>
        </>
        
    );
};

export default UserDetails;