import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyClEU1p9SoIcA9h4YQLomw4dpRClcmxJ_o",
  authDomain: "auth-tdg-main.firebaseapp.com",
  projectId: "auth-tdg-main",
  storageBucket: "auth-tdg-main.appspot.com",
  messagingSenderId: "292900866848",
  appId: "1:292900866848:web:0844ab827972eb96b3e545",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;