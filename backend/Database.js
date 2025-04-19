// import { doc, setDoc, getDoc, getDocs, collection, query, where } from "firebase/firestore"
// import { database } from "./Firebase"


// backend/Database.js

// import { db } from './Firebase'; // Import db from Firebase.js

// // Function to get user data from Firestore
// export const getUserData = async (userId) => {
//   try {
//     const userDoc = await db.collection('users').doc(userId).get();
//     if (userDoc.exists) {
//       return userDoc.data();
//     } else {
//       throw new Error('User not found');
//     }
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };
