// import { auth } from "./Firebase";
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, fetchSignInMethodsForEmail } from "firebase/auth";
  
// backend/Auth.js
import { auth, database } from './Firebase'; // Import Firebase auth and firestore
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { signOut } from "firebase/auth"; // Import signOut

// Register a new user
export const register = async (email, password, setUser) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Optionally save additional user information to Firestore (e.g., username)
    await setDoc(doc(database, 'users', user.uid), {
      email: user.email,
      createdAt: new Date(),
    });

    setUser(user); // Save the user to the global state
    return user;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Login a user
export const login = async (email, password, setUser) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    setUser(user); // Save the user to the global state
    return user;
  } catch (error) {
    throw new Error(error.message); // Error handling
  }
};

// Check if an email is already in use by querying Firestore
export const isEmailInUse = async (email) => {
  try {
    const usersRef = doc(database, 'users', email);
    const docSnap = await getDoc(usersRef);

    if (docSnap.exists()) {
      return true; // Email exists
    } else {
      return false; // Email does not exist
    }
  } catch (error) {
    throw new Error(error.message);
  }
};

// Logout user
export const logOut = async (setUser) => {
    try {
      await signOut(auth); // Firebase sign out
      setUser(null);  // Clear user state after logout
      console.log("User logged out successfully.");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  