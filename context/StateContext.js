
import { useRouter } from 'next/router';
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '@/backend/Firebase';
import { onAuthStateChanged } from 'firebase/auth';

const Context = createContext();

export const StateContext = ({ children }) => {
  // Variables to Carry Across Multiple Pages
  const [user, setUser] = useState(null);
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Prevents server-client mismatches

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        loading
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);