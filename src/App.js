import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Homapage } from "./pages/Homapage";
import { SignUp } from "./pages/SignUp";
import { Login } from "./pages/Login";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homapage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
