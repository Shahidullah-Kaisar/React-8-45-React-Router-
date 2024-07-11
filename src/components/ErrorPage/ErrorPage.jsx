import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {

    const error = useRouteError();
    console.error(error);

    return (
        <div className='text-center mt-60 text-4xl'>
            <h2>Oops!!!</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <h3 className='mb-14'>Page Not Found</h3>
                    <Link to='/' className='bg-green-500 p-4 rounded-lg'>Go Home</Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;