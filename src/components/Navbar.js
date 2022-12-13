import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
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
      </div>
    </div>
  );
};
