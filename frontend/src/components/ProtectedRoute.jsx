import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';

const ProtectedRoute = ({ children, allowedRoles }) => {
  const { token, user, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (allowedRoles && user && !allowedRoles.includes(user.role || 'user')) {
      toast.error('Access Denied: Insufficient Node Privileges');
    }
  }, [allowedRoles, user]);

  if (!token && !isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  if (allowedRoles && user && !allowedRoles.includes(user.role || 'user')) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export default ProtectedRoute;
