import React, { useEffect, useState } from 'react';
import PopularInstructorCard from './PopularInstructorCard';
import Typewriter from 'react-ts-typewriter';
import useInstructors from '../../../hooks/useInstructors';

const PopularInstructor = () => {
    const [instructors] = useInstructors(); 
 
    // const [popularInstructors, setPopularInstructors] = useState([]);

    // useEffect (() => {
    //     fetch('popularInstructor.json')
    //     .then( res => res.json())
    //     .then(data => setPopularInstructors(data))
    // }, []);

    return (
        <div>
            <div className='md:text-6xl text-2xl text-violet-500 text-center md:mt-20 mt-10 font-semibold'>
            <Typewriter text="Popular Instructors" loop={true} speed={250} />
            </div>

            <div className='grid md:grid-cols-3 justify-items-center grid-cols-1 gap-10 my-16'>
                {
                 instructors.map(popularInstructor => <PopularInstructorCard 
                    popularInstructor={popularInstructor}
                    key={popularInstructor.id}
                    ></PopularInstructorCard>)
                }
            </div>
            
        </div>
    );
};

export default PopularInstructor;