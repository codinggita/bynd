import { useSelector, useDispatch } from 'react-redux';
import { logout, setProfile, setError, setLoading } from '../store/slices/authSlice';
import { getProfile } from '../services/api';
import toast from 'react-hot-toast';

export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, loading, error } = useSelector((state) => state.auth);

  const fetchProfile = async () => {
    dispatch(setLoading(true));
    try {
      const res = await getProfile();
      dispatch(setProfile(res.data.user));
    } catch (err) {
      dispatch(setError(err.response?.data?.msg || 'Session expired'));
      dispatch(logout());
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    toast.success('Sovereign Connection Terminated');
  };

  return {
    user,
    isAuthenticated,
    loading,
    error,
    fetchProfile,
    handleLogout
  };
};
