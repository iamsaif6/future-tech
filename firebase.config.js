// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDU8lCe9ZqJ3xPC_OzSavmZJRzDpbRKHmw',
  authDomain: 'future-tech-42def.firebaseapp.com',
  projectId: 'future-tech-42def',
  storageBucket: 'future-tech-42def.appspot.com',
  messagingSenderId: '102513129543',
  appId: '1:102513129543:web:3057a1e1da4ff82dd99962',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
