import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth, setPersistence, browserLocalPersistence } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD6a29pYx_1Hrk6E1ZBNJagEjzQYIz-W54",
  authDomain: "greencreditmanagement.firebaseapp.com",
  projectId: "greencreditmanagement",
  storageBucket: "greencreditmanagement.firebasestorage.app",
  messagingSenderId: "30132009760",
  appId: "1:30132009760:web:2f93d9cb4eeb507a2ab545",
  measurementId: "G-RK48S0C8WK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

setPersistence(auth, browserLocalPersistence)
  .then(() => {
    console.log('Auth persistence set to LOCAL');
  })
  .catch((error) => {
    console.error('Error setting auth persistence:', error);
  });

export { auth, db, storage };
