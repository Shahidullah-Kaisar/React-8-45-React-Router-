import React from 'react';
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const user = useLoaderData()
    const {name,phone,website} = user;
    return (
        <>
            <div className='text-center mt-20 text-3xl'>
                <h1 className='text-red-600 underline mb-8'>{name} Details</h1>
                <h1>Name: {name}</h1>
                <h1>Phone: {phone}</h1>
                <h1>Website: {website}</h1>
            </div>
        </>
        
    );
};

export default UserDetails;