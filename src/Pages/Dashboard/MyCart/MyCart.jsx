import React from 'react';
import { Helmet } from 'react-helmet';
import useCart from '../../../hooks/useCart';
import Swal from 'sweetalert2';

const MyCart = () => {
  const [cart, refetch] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  const handleDelete = item =>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#8B5CF6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
  }).then((result) => {
    if(result.isConfirmed){
    fetch(`https://summer-seekers-server.vercel.app/carts/${item._id}`,{
          method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
      if(data.deletedCount > 0 ){
        refetch();
        Swal.fire({
          title: 'Class Deleted Successfully.',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      }
    })
  }    
  })

  }

  return (
    <div className='w-full'>
      <Helmet>
        <title>SportsZone Academy/My Selected Classes</title>
      </Helmet>
      <div className='flex justify-evenly px-20 mt-8 text-violet-400'>
        <h2 className='text-3xl'>Total Selected Classes: {cart.length}</h2>
        <h2 className='text-3xl'>Total Price: ${total}</h2>
        <button className='bg-violet-200 text-black font-bold px-3 rounded'>Pay</button>
      </div>

      <div className='p-20'>
        <table className='table bg-violet-200'>
          {/* head */}
          <thead>
            <tr className='text-xl  font-semibold'>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className=''>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <td>{index + 1}</td>
                <td>
                  <div className='avatar'>
                    <div className=' w-20 h-12 rounded-md'>
                      <img src={item.image} alt='Avatar' />
                    </div>
                  </div>
                </td>
                <td>
                  <div className='flex items-center space-x-3'>
                    <div>
                      <div className='font-bold'>{item.name}</div>
                    </div>
                  </div>
                </td>
                <td>{item.instructor}</td>
                <td>${item.price}</td>
                <td>
                  <button onClick={ ()=> handleDelete(item)} className="ml-4 w-6 ">
                    <img src="https://i.ibb.co/b1ngMDt/delete-button.png" alt="" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
