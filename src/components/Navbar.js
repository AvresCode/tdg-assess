import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div>
        {" "}
        <Link to="/">Homepage</Link>
      </div>
      <div>
        {" "}
        <Link to="/signup">Sign up</Link>
      </div>
      <div>
        {" "}
        <Link>Log in</Link>
      </div>
    </div>
  );
};
