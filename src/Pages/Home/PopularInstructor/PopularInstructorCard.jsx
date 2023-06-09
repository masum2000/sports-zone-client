import React from 'react';

const PopularInstructorCard = ({popularInstructor}) => {
    const {image, name, email} = popularInstructor;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl cursor-pointer">
                <figure><img className='' src={image} alt="imageh" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Name: {name}
                        {/* <div className="badge text-white bg-green-500">Popular</div> */}
                    </h2>
                    <p><span className='font-bold'>Email: </span> {email}</p>
                    {/* <p><span className='font-bold'>Available Seats: </span> {availableSeats}</p>
                    <div className="card-actions justify-end">
                        
                        <div className="badge text-white bg-violet-500">Price:  ${price}</div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default PopularInstructorCard;