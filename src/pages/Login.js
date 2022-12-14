import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SignIn } from "../store/user/thunks";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(SignIn(email, password));
  };

  return (
    <div className="signup-container">
      <h2> Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          {" "}
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></input>
        </div>
        <div>
          {" "}
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></input>
        </div>
        <br />
        <button type="submit"> Login</button>
      </form>
      <div>
        {" "}
        Don't have an account yet? Click <Link to="/signup">here</Link> to sign
        up
      </div>
    </div>
  );
};
