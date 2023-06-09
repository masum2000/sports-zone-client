import React, { useEffect, useState } from 'react';
import ClassCard from './ClassCard';
import Typewriter from 'react-ts-typewriter';
import useClasses from '../../../hooks/useClasses';
import { Link } from 'react-router-dom';

const PopularClasses = () => {
    const [classes] = useClasses();
    const [showAll,setShowAll] =  useState(false);



    // const [courses, setCourses] = useState([]);

    // useEffect (() => {
    //     fetch('classes.json')
    //     .then( res => res.json())
    //     .then(data => setCourses(data))
    // }, []);

    return (
        <div>
            <div className='md:text-6xl text-2xl text-violet-500 text-center md:mt-20 mt-10 font-semibold'>
            <Typewriter text="Popular Courses" loop={true} speed={250} />
            </div>
            {/* <Typewriter text="Welcome To SportsZone Academy" loop={true} speed={150} /> */}
            <div className='grid md:grid-cols-3 justify-items-center grid-cols-1 gap-10 my-16'>
                {showAll 
                  ? classes.map((course => <ClassCard 
                    course={course}
                    key={course.id}
                    ></ClassCard>))
                    : classes.slice(0,6).map((course) => (
                        <ClassCard 
                        course={course}
                        key={course.id}
                        ></ClassCard> 
                    ))
                }
            </div>
            {!showAll && (
        <div className='text-center'>
            <Link to="/classes">
         <button className=" border-2 border-violet-500 hover:bg-violet-500 text-violet-500 hover:text-white  md:p-3 p-1 rounded-md font-bold " to="/instructors">
          Show All Classes
        </button>
        </Link>
        </div>
      )}
        </div>
    );
};

export default PopularClasses;