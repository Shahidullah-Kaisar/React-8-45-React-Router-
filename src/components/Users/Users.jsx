import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from '../User/User';

const Users = () => {

    const users = useLoaderData();

    return (
        <>
        <div className='text-3xl text-center'>
            <h2 className='m-10 text-4xl font-bold text-red-600'>Total User: {users.length}</h2>
            <div className='grid grid-cols-3'>
                {
                    users.map(loop => <User key={users.id} user={loop}></User>)
                }
            </div>
            
        </div>
            
        </>
    );
};

export default Users;