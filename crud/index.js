import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBfaUK8aVYJqds2Rmz8jlzXlxWqK_vIOJk",
  authDomain: "biblioteca-4c49d.firebaseapp.com",
  projectId: "biblioteca-4c49d",
  storageBucket: "biblioteca-4c49d.appspot.com",
  messagingSenderId: "963637999389",
  appId: "1:963637999389:web:3f09eff56b6633df6153f4",
  measurementId: "G-C93764S15Z"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);