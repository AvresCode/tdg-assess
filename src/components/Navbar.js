import { Link } from "react-router-dom";
import "./Navbar.css";
import { logout } from "../store/user/thunks";
import { useDispatch } from "react-redux";

export const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <div className="navbar-container">
      <div>
        {" "}
        <Link to="/" className="nav-item">
          Homepage
        </Link>
      </div>
      <div>
        {" "}
        <Link to="/signup" className="nav-item">
          Sign up
        </Link>
      </div>
      <div>
        {" "}
        <Link to="/login" className="nav-item">
          Log in
        </Link>
        <button onClick={() => dispatch(logout())}> Logout</button>
      </div>
    </div>
  );
};
