import { Link } from "react-router-dom";
import "./Navbar.css";
import { logout } from "../store/user/thunks";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../store/user/selectors";

export const Navbar = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  return (
    <div className="navbar-container">
      <div>
        {" "}
        <Link to="/" className="nav-item">
          Home
        </Link>
      </div>
      <div>
        {token && (
          <Link to="/myProfile" className="nav-item">
            My Profile
          </Link>
        )}
      </div>
      <div>
        {" "}
        {token ? (
          <button className="nav-item" onClick={() => dispatch(logout())}>
            {" "}
            Logout
          </button>
        ) : (
          <div>
            {" "}
            <Link to="/signup" className="nav-item">
              Sign Up
            </Link>
            <Link to="/login" className="nav-item">
              Log In
            </Link>{" "}
          </div>
        )}
      </div>
    </div>
  );
};
