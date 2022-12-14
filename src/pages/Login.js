import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { SignIn } from "../store/user/thunks";
import { useNavigate } from "react-router-dom";
import { selectToken } from "../store/user/selectors";
import "./SignUp.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectToken);

  //
  useEffect(() => {
    if (token !== null) {
      navigate("/");
    }
  }, [token, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SignIn(email, password));
  };

  return (
    <div className="signup-container">
      <h2> Login</h2>
      <form onSubmit={handleSubmit} className="signup-items">
        {" "}
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="signup-input"
        ></input>{" "}
        <input
          type="text"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="signup-input"
        ></input>
        <br />
        <button type="submit" className="submit-button">
          {" "}
          Login
        </button>
      </form>
      <div>
        {" "}
        Don't have an account yet? Click <Link to="/signup">here</Link> to sign
        up
      </div>
    </div>
  );
};
