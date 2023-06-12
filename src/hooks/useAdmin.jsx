import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { useQuery } from '@tanstack/react-query';

const useAdmin = () => {
    const {user} = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    const {data: adminData, isLoading: isAdminLoading} = useQuery({
        queryKey:['isAdmin', user?.email],
        queryFn: async() => {
            const res = await fetch(`https://summer-seekers-server.vercel.app/users/admin/${user?.email}`,{
                headers: {
                    authorization: `bearer ${token}`
                }
            });
            return res.json();
        },
    });

    const {data: instructorData, isLoading: isInstructorLoading} = useQuery({
        queryKey:['isInstructor', user?.email],
        queryFn: async() => {
            const res = await fetch(`https://summer-seekers-server.vercel.app/users/instructor/${user?.email}`,{
                headers: {
                    authorization: `bearer ${token}`
                }
            });
            return res.json();
        },
    });



  const isAdmin = adminData?.admin === true;
  const isInstructor = instructorData?.instructor === true;


    return [isAdmin,isInstructor, isAdminLoading || isInstructorLoading];

};

export default useAdmin;