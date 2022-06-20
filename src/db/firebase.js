import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth} from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfKz6wAYgt8eVjlKtrAWxxu51VkWdJAkc",
  authDomain: "your-question-web.firebaseapp.com",
  projectId: "your-question-web",
  storageBucket: "your-question-web.appspot.com",
  messagingSenderId: "986135860060",
  appId: "1:986135860060:web:1169c1be55c9beb6d36799"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();

