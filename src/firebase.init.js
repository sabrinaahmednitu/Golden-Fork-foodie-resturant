import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCSUOaLoR_zlPYdCZNHX2dy1rN-Z4_NaEc',
  authDomain: 'golden-fork-6ea06.firebaseapp.com',
  projectId: 'golden-fork-6ea06',
  storageBucket: 'golden-fork-6ea06.appspot.com',
  messagingSenderId: '792816064116',
  appId: '1:792816064116:web:f0a2df7d7fa445f2826321',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
