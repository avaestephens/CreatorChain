import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useStateContext } from '@/context/StateContext';

const PrivateRoute = ({ children }) => {
  const { user, loading } = useStateContext();
  const router = useRouter();

  useEffect(() => {
    // Wait until authentication state is determined
    if (!loading) {
      // If no user is logged in, redirect to login
      if (!user) {
        router.push('/auth/login');
      }
    }
  }, [user, loading, router]);

  // Show nothing while checking auth or redirecting
  if (loading || !user) {
    return <div>Loading...</div>;
  }

  // If we have a user, render the protected component
  return children;
};

export default PrivateRoute;