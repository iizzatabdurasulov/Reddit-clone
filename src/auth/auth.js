import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAM9VAcq7Bew_aYhOxabFyyL9LJ43wQSGY",
  authDomain: "reddit-clone-by-izzat.firebaseapp.com",
  projectId: "reddit-clone-by-izzat",
  storageBucket: "reddit-clone-by-izzat.appspot.com",
  messagingSenderId: "394072785940",
  appId: "1:394072785940:web:1ae11b58eb223de2d55301",
  measurementId: "G-KMBP6QGBZJ",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, analytics };
