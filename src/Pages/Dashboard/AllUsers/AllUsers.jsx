import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Helmet } from 'react-helmet';
import { FaUserShield } from 'react-icons/fa';

const AllUsers = () => {
    const {data: users =[], refetch} = useQuery(['users'],async() =>{
        const res = await fetch ('http://localhost:5000/users')
        return res.json();
    })


    const handleDelete = user => {

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
              <th>Action</th>
            </tr>
          </thead>
          <tbody className=''>
            {users.map((user, index) => (
              <tr key={user._id}>
                <td>{index + 1}</td>
                <td>
                  <div className='avatar'>
                    <div className=' w-12 h-12 rounded-full'>
                      <img src={user.photo} alt='Avatar' />
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
                   <button onClick={ ()=> handleDelete(user)} className="ml-2 h-6 w-6 p-1 rounded bg-green-400 ">
                   <FaUserShield></FaUserShield>
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