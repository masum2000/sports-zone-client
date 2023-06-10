import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <div className='flex justify-center items-center py-12'>
      <div className='radial-progress text-violet-500' style={{ "--value": 100, "--size": "50px", "--thickness": "5px" }}>
      </div>
      <div className='animate-spin radial-progress absolute text-white' style={{ "--value": 15, "--size": "50px", "--thickness": "5px" }}>

      </div>
    </div>
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;