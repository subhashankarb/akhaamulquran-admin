import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { type RootState } from '../store';

interface Props {
  allow: string[];
}

export default function ProtectedRoute({ allow }: Props) {
  const { isAuthenticated, user, token } = useSelector((state: RootState) => state.auth);

  if (!isAuthenticated || !token || !user) {
    return <Navigate to="/login" replace />;
  }

  if (!allow.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}