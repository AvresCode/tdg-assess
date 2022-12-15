import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Homapage } from "./pages/Homapage";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { Navbar } from "./components/Navbar";
import { UserProfile } from "./pages/UserProfile";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./config/firebase";
import { useDispatch } from "react-redux";
import { setUser, clearUserData } from "./store/user/slice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // dispatch(setUser({ user, token }));
      console.log("user", currentUser);
      if (currentUser) {
        dispatch(
          setUser({ user: currentUser, token: currentUser.accessToken })
        );
      } else {
        dispatch(clearUserData());
      }
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homapage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/myProfile" element={<UserProfile />} />
      </Routes>
    </div>
  );
}

export default App;
