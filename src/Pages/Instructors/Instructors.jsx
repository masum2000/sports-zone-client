import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import PopularInstructorCard from '../Home/PopularInstructor/PopularInstructorCard';
import Typewriter from 'react-ts-typewriter';
import InstructorsCard from './InstructorsCard';

const Instructors = () => {
    const [instructors, setInstructors] = useState([]);
    useEffect (() => {
        fetch('popularInstructor.json')
        .then( res => res.json())
        .then(data => setInstructors(data))
    }, []);
    return (
        <div>
            <div className='md:text-6xl text-2xl text-violet-500 text-center md:mt-20 mt-10 font-semibold'>
            <Typewriter text="All Instructors" loop={true} speed={250} />
            </div>

            <div className='grid md:grid-cols-3 justify-items-center grid-cols-1 gap-10 my-16'>
                {
                  instructors.map(instructor => <InstructorsCard 
                    instructor={instructor}
                    key={instructor.id}
                    ></InstructorsCard>)
                }
            </div>
        </div>
    );
};

export default Instructors;