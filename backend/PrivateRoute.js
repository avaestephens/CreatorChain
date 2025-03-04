import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useStateContext } from '@/context/StateContext';
import { auth } from '@/firebaseConfig'; // Firebase import

const PrivateRoute = ({ children }) => {
  const { user } = useStateContext(); // Get the user from context
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (!user) {
        // Redirect to login if user is not logged in
        router.push('/auth/login');
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, [user, router]);

  if (!user) {
    return <p>Loading...</p>; // Show loading spinner or message while checking auth state
  }

  return children; // Render the protected page content
};

export default PrivateRoute;
