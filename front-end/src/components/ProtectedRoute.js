import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ role, children }) => {
  const userRole = localStorage.getItem('userRole');
  if (role === userRole) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;