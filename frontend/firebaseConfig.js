import {initializeApp} from 'firebase/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyE2HS2Smt4PAXlk_AAnIwnxISDEdwXsc",
  authDomain: "roam-rover.firebaseapp.com",
  databaseURL: "https://roam-rover-default-rtdb.firebaseio.com",
  projectId: "roam-rover",
  storageBucket: "roam-rover.appspot.com",
  messagingSenderId: "311852917016",
  appId: "1:311852917016:web:327ee8734ddd86e46cbe6d",
  measurementId: "G-ZZ3VEYGP2V",
  databaseURL: "https://roam-rover-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export {app};
