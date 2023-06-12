import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import  useCart  from "../../../hooks/useCart"

const ClassCard = ({course}) => {
  const {image, name, instructor,availableSeats,price,_id} = course;
  const {user} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [, refetch] = useCart();


  const handleAddToCart = course =>{
    console.log(course);
    if(user && user.email){
       const cartItem = {classId: _id,  name, image,instructor, price, email: user.email}
       fetch('https://summer-seekers-server.vercel.app/carts',{
           method: 'POST',
           headers: {
               'content-type': 'application/json'
           },
           body: JSON.stringify(cartItem)
       })
       .then(res => res.json())
       .then(data => {
           if(data.insertedId){
               refetch(); // refetch cart to update the number of classes in the cart
               Swal.fire({
                //    position: 'top-end',
                   icon: 'success',
                   title: 'Class added into the Cart',
                   showConfirmButton: false,
                   timer: 2000
                 })
           }
       })
    }
    else{
       Swal.fire({
           title: 'Please login to select the Class',
           icon: 'warning',
           showCancelButton: true,
           confirmButtonColor: '#8B5CF6',
           cancelButtonColor: '#d33',
           confirmButtonText: 'login now!'
         }).then((result) => {
           if (result.isConfirmed) {
             navigate("/login",{state: {from:location}})
           }
         })
    }
   }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl cursor-pointer">
                <figure><img className='' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        Course Name: {name}
                        {/* <div className="badge text-white bg-green-500">Popular</div> */}
                    </h2>
                    <p><span className='font-bold'>Instructor Name: </span> {instructor}</p>
                    <p><span className='font-bold'>Available Seats: </span> {availableSeats}</p>
                    <p><span className='font-bold'>Price: </span> ${price}</p>
                    <div className="card-actions justify-end">
                        
                        <div className="badge p-3 text-white bg-violet-500">
                            <button onClick={( )=> handleAddToCart(course)} >Select</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;