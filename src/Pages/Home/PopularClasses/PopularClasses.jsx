import React, { useEffect, useState } from 'react';
import ClassCard from './ClassCard';
import Typewriter from 'react-ts-typewriter';

const PopularClasses = () => {

    const [courses, setCourses] = useState([]);

    useEffect (() => {
        fetch('classes.json')
        .then( res => res.json())
        .then(data => setCourses(data))
    }, []);

    return (
        <div>
            <div className='md:text-6xl text-2xl text-violet-500 text-center md:mt-20 mt-10 font-semibold'>
            <Typewriter text="Popular Classes" loop={true} speed={250} />
            </div>
            {/* <Typewriter text="Welcome To SportsZone Academy" loop={true} speed={150} /> */}
            <div className='grid md:grid-cols-3 justify-items-center grid-cols-1 gap-10 my-16'>
                {
                  courses.map(course => <ClassCard 
                    course={course}
                    key={course.id}
                    ></ClassCard>)
                }
            </div>
            
        </div>
    );
};

export default PopularClasses;