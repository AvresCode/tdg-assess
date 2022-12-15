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
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./store/user/slice";
import { Navigate } from "react-router-dom";
import { selectToken } from "./store/user/selectors";

function App() {
  //
  const token = useSelector(selectToken);

  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("user", currentUser);

      if (currentUser) {
        dispatch(
          setUser({ user: currentUser, token: currentUser.accessToken })
        );
      } else {
        dispatch(setUser({ user: null, token: null }));
      }
    });

    return () => {
      unsubscribe();
    };
  }, [dispatch]);

  //
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homapage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/myProfile"
          element={token ? <UserProfile /> : <Navigate to="/" />}
        />
      </Routes>
    </div>
  );
}

export default App;
