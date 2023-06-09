import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ClassCard from '../Home/PopularClasses/ClassCard';
import Typewriter from 'react-ts-typewriter';

const Classes = () => {
    const [classes,setClasses] = useState([]);

    useEffect(() => {
        fetch('classes.json')
        .then(res => res.json())
        .then(data => setClasses(data))
    },[])
    return (
        <div>
            <div className='md:text-6xl text-2xl text-violet-500 text-center md:mt-20 mt-10 font-semibold'>
            <Typewriter text="All Classes" loop={true} speed={250} />
            </div>
            <div className='grid md:grid-cols-3 justify-items-center grid-cols-1 gap-10 my-16'>
                {
                  classes.map(course => <ClassCard 
                    course={course}
                    key={course.id}
                    ></ClassCard>)
                }
            </div>
        </div>
    );
};

export default Classes;