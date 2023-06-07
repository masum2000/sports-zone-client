import React from 'react';

const ClassCard = ({course}) => {
  const {image, name, instructor,availableSeats,price} = course;
  console.log(course);
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Course Name: {name}
                        {/* <div className="badge text-white bg-green-500">Popular</div> */}
                    </h2>
                    <p><span className='font-bold'>Instructor Name: </span> {instructor}</p>
                    <p><span className='font-bold'>Available Seats: </span> {availableSeats}</p>
                    <div className="card-actions justify-end">
                        
                        <div className="badge text-white bg-violet-500">Price:  ${price}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;