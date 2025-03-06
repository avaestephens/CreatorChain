
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  fetchSignInMethodsForEmail 
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, database } from "./Firebase";

// Check if email is already in use
export const isEmailInUse = async (email) => {
  try {
    const methods = await fetchSignInMethodsForEmail(auth, email);
    return methods.length > 0;
  } catch (error) {
    console.error("Error checking email:", error);
    throw error;
  }
};

// Register a new user
export const register = async (email, password, setUser) => {
  try {
    // Create the user account
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    // Create a user document in Firestore
    await setDoc(doc(database, "users", user.uid), {
      email: user.email,
      uid: user.uid,
      createdAt: new Date().toISOString(),
      // Add any other user data you want to store
    });

    // Update the user state AFTER database write is complete
    if (setUser) {
      setUser({
        uid: user.uid,
        email: user.email,
      });
    }
    
    return user;
  } catch (error) {
    console.error("Registration error:", error);
    throw error;
  }
};

// Login existing user
export const login = async (email, password, setUser) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    
    if (setUser) {
      setUser({
        uid: user.uid,
        email: user.email,
      });
    }
    
    return user;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const logOut = async (setUser) => {
  try {
    await signOut(auth);
    setUser(null);
    return true;
  } catch (error) {
    console.error('Error signing out:', error);
    return false;
  }
};