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
                        
                    </h2>
                    <p><span className='font-bold'>Email: </span> {email}</p>
                    
                </div>
            </div>
        </div>
    );
};

export default PopularInstructorCard;