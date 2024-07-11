import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const User = ({user}) => {

    const {id, name, phone, email} = user;

    const navigate = useNavigate();

    const handleDetails = () =>{
        navigate(`/user/${id}`)
    }


    return (
        <>
            <div className='bg-purple-700 p-10 m-8 rounded-lg flex flex-col'>
                <h1>Name: {name}</h1>
                <h1>Email: {email}</h1>
                <h1 className='mb-10 flex-grow'>Phone: {phone}</h1>

                <Link to={`/user/${id}`} className='text-red-600 bg-green-400 p-4 rounded-lg mb-6'>Show Details</Link>

                <button onClick={handleDetails} className='bg-yellow-600 p-4 rounded-lg'>Show Details(another way)</button>  {/* another way  */}
            </div>
            
        </>
    );
};

export default User;