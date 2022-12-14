import { useState, useEffect } from "react";
import { signUp } from "../store/user/thunks";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectToken } from "../store/user/selectors";

export const SignUp = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(selectToken);

  //
  useEffect(() => {
    if (token !== null) {
      navigate("/");
    }
  }, [token, navigate]);

  //
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUp(email, password, name, lastName));

    setName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };

  return (
    <div className="signup-container">
      <h2> Register</h2>
      <p> Please enter your details</p>
      <form onSubmit={handleSubmit}>
        <div>
          {" "}
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          ></input>
        </div>
        <div>
          {" "}
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          ></input>
        </div>
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
        <button type="submit"> Create Account</button>
      </form>
    </div>
  );
};
