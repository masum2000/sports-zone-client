import React, { useEffect, useState } from 'react';
import PopularInstructorCard from './PopularInstructorCard';
import Typewriter from 'react-ts-typewriter';
import useInstructors from '../../../hooks/useInstructors';
import { Link } from 'react-router-dom';

const PopularInstructor = () => {
  const [instructors] = useInstructors();
  const [showAll, setShowAll] = useState(false);



  return (
    <div>
      <div className='md:text-6xl text-2xl text-violet-500 text-center md:mt-20 mt-10 font-semibold'>
        <Typewriter text='Popular Instructors' loop={true} speed={250} />
      </div>

      <div className='grid md:grid-cols-3 justify-items-center grid-cols-1 gap-10 my-16'>
        {showAll
          ? instructors.map((popularInstructor) => (
              <PopularInstructorCard
                popularInstructor={popularInstructor}
                key={popularInstructor.id}
              />
            ))
          : instructors.slice(0, 6).map((popularInstructor) => (
              <PopularInstructorCard
                popularInstructor={popularInstructor}
                key={popularInstructor.id}
              />
            ))}
      </div>

      {!showAll && (
        <div className='text-center'>
            <Link to="/instructors">
         <button className=" border-2 border-violet-500 hover:bg-violet-500 text-violet-500 hover:text-white  md:p-3 p-1 rounded-md font-bold  " to="/instructors">
          Show All Instructors
        </button>
        </Link>
        </div>
      )}
    </div>
  );
};

export default PopularInstructor;











// import React, { useEffect, useState } from 'react';
// import PopularInstructorCard from './PopularInstructorCard';
// import Typewriter from 'react-ts-typewriter';
// import useInstructors from '../../../hooks/useInstructors';

// const PopularInstructor = () => {
//     const [instructors] = useInstructors(); 
 
//     // const [popularInstructors, setPopularInstructors] = useState([]);

//     // useEffect (() => {
//     //     fetch('popularInstructor.json')
//     //     .then( res => res.json())
//     //     .then(data => setPopularInstructors(data))
//     // }, []);

//     return (
//         <div>
//             <div className='md:text-6xl text-2xl text-violet-500 text-center md:mt-20 mt-10 font-semibold'>
//             <Typewriter text="Popular Instructors" loop={true} speed={250} />
//             </div>

//             <div className='grid md:grid-cols-3 justify-items-center grid-cols-1 gap-10 my-16'>
//                 {
//                  instructors.map(popularInstructor => <PopularInstructorCard 
//                     popularInstructor={popularInstructor}
//                     key={popularInstructor.id}
//                     ></PopularInstructorCard>)
//                 }
//             </div>
//             <button className='border-2 '>Show All</button>
//         </div>
//     );
// };

// export default PopularInstructor;