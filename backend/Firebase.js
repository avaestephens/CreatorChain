// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = process.env.NODE_ENV === 'production' ? {
//   apiKey: "",
//   authDomain: "",
//   projectId: "",
//   storageBucket: "",
//   messagingSenderId: "",
//   appId: "",
//   measurementId: ""
// } : {
//   apiKey: "",
//   authDomain: "",
//   projectId: "",
//   storageBucket: "com",
//   messagingSenderId: "",
//   appId: "",
//   measurementId: ""
// }

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const storage = getStorage(app);
// export const database = getFirestore(app);
// export const analytics = () => getAnalytics(app);

// export default app






// // backend/Firebase.js

// import firebase from 'firebase/app';
// import 'firebase/auth'; // Firebase authentication
// import 'firebase/firestore'; // Firebase Firestore (Database)
// import 'firebase/storage'; // Firebase Storage

// const firebaseConfig = {
//   apiKey: "your-api-key",
//   authDomain: "your-auth-domain",
//   projectId: "your-project-id",
//   storageBucket: "your-storage-bucket",
//   messagingSenderId: "your-messaging-sender-id",
//   appId: "your-app-id",
//   measurementId: "your-measurement-id",
// };

// // Initialize Firebase if not already initialized
// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// } else {
//   firebase.app(); // Use the existing Firebase instance
// }

// // Export the necessary services (auth, db, storage)
// const auth = firebase.auth();
// const db = firebase.firestore();
// const storage = firebase.storage();

// export { auth, db, storage };





// // Import necessary functions from the modular Firebase SDK
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";

// // Firebase configuration for production and development environments
// const firebaseConfig = process.env.NODE_ENV === 'production' ? {
//   apiKey: "your-api-key",
//   authDomain: "your-auth-domain",
//   projectId: "your-project-id",
//   storageBucket: "your-storage-bucket",
//   messagingSenderId: "your-messaging-sender-id",
//   appId: "your-app-id",
//   measurementId: "your-measurement-id"
// } : {
//   apiKey: "your-dev-api-key",
//   authDomain: "your-dev-auth-domain",
//   projectId: "your-dev-project-id",
//   storageBucket: "your-dev-storage-bucket",
//   messagingSenderId: "your-dev-messaging-sender-id",
//   appId: "your-dev-app-id",
//   measurementId: "your-dev-measurement-id"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Export Firebase services (auth, firestore, storage)
// export const auth = getAuth(app); // For Authentication
// export const database = getFirestore(app); // For Firestore (Database)
// export const storage = getStorage(app); // For Firebase Storage
// export default app;


// // Import the necessary functions from the modular Firebase SDK
// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth"; // Firebase Authentication
// import { getFirestore } from "firebase/firestore"; // Firestore Database
// import { getStorage } from "firebase/storage"; // Firebase Storage
// import { getAnalytics } from "firebase/analytics"; // Firebase Analytics (optional)

// // Your Firebase configuration (this is what you already have)
// const firebaseConfig = {
//   apiKey: "AIzaSyDa85MOhbq91B9ez5vXN3wXmYpztvPiniw",
//   authDomain: "psufs-website.firebaseapp.com",
//   projectId: "psufs-website",
//   storageBucket: "psufs-website.firebasestorage.app",
//   messagingSenderId: "780406089612",
//   appId: "1:780406089612:web:064965b4636755ffd918a9",
//   measurementId: "G-PW34HEBEQR"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// // Get Firebase services
// const auth = getAuth(app); // Firebase Authentication
// const db = getFirestore(app); // Firestore Database
// const storage = getStorage(app); // Firebase Storage
// const analytics = getAnalytics(app); // Optional, Firebase Analytics

// // Export the Firebase services for use in other files
// export { auth, db, storage, analytics };
// export default app;






// backend/Firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // Firebase Authentication
import { getFirestore } from 'firebase/firestore'; // Firestore Database
import { getStorage } from 'firebase/storage'; // Firebase Storage
import { getAnalytics } from 'firebase/analytics'; // Firebase Analytics (optional)

// Your Firebase configuration (this is what you already have)
const firebaseConfig = {
  apiKey: "AIzaSyDa85MOhbq91B9ez5vXN3wXmYpztvPiniw",
  authDomain: "psufs-website.firebaseapp.com",
  projectId: "psufs-website",
  storageBucket: "psufs-website.firebasestorage.app",
  messagingSenderId: "780406089612",
  appId: "1:780406089612:web:064965b4636755ffd918a9",
  measurementId: "G-PW34HEBEQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services initialization
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

// Initialize Firebase Analytics only in the browser (client-side)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app); // This will only run on the client-side
}

// Export Firebase services
export { auth, db, storage, analytics };
export default app;
