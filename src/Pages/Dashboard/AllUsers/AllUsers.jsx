import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet';
import { FaUser, FaUserShield } from 'react-icons/fa';
import Swal from 'sweetalert2';

const AllUsers = () => {
    const {data: users =[], refetch} = useQuery(['users'],async() =>{
        const res = await fetch ('http://localhost:5000/users')
        return res.json();
    })
    

    const handleMakeAdmin = user =>{
        fetch(`http://localhost:5000/users/admin/${user._id}`,{
            method: 'PATCH',
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    // position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        })
    }

    const handleDelete = user =>{
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
        fetch(`http://localhost:5000/users/${user._id}`,{
              method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => {
          if(data.deletedCount > 0 ){
            refetch();
            Swal.fire({
              title: 'User Deleted Successfully.',
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
        <title>SportsZone Academy/All Users</title>
      </Helmet>
      <div className='flex justify-evenly px-20 mt-8 text-violet-400'>
        <h2 className='text-3xl'>Total Users: {users.length}</h2>
        {/* <h2 className='text-3xl'>Total Price: ${total}</h2>
        <button className='bg-violet-200 text-black font-bold px-3 rounded'>Pay</button> */}
      </div>
      <div className='p-20'>
        <table className='table bg-violet-200'>
          {/* head */}
          <thead>
            <tr className='text-xl  font-semibold'>
              <th>#</th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody className=''>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  <div className='avatar'>
                    <div className=' w-20 h-20 rounded-full'>
                      <img src={user.photo} alt='image' />
                    </div>
                  </div>
                </td>
                <td>
                  <div className='flex items-center space-x-3'>
                    <div>
                      <div className='font-bold'>{user.name}</div>
                    </div>
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{ user.role == 'admin' ? 'admin' : 
                   <button onClick={ ()=> handleMakeAdmin(user)} className=" text-white ml-2 h-6 w-6 p-1 rounded bg-green-400 ">
                   <FaUser></FaUser>
                 </button>
                    
                    }</td>
                <td>
                  <button onClick={ ()=> handleDelete(user)} className="ml-4 w-6 ">
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

export default AllUsers;