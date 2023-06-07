import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className='flex flex-col items-center justify-center h-screen p-16 bg-white text-gray-900'>
            <Helmet>
                <meta charSet="utf-8" />
                <title>SportsZone Academy/Error</title>
            </Helmet>
            <img className='md:w-2/6' src='https://i.ibb.co/ZKpqv2Y/7938322-3814348.jpg' />
            <Link
                to='/'
                className="border-2 border-violet-500 text-black mt-6 p-3 rounded-lg bg-none font-bold hover:text-white  hover:bg-violet-500 duration-300 "
            >
                Back to Home
            </Link>
        </section>
    );
};

export default ErrorPage;