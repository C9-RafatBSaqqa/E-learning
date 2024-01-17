import "./style.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../App";
const Navbar = () => {
  const { token } = useContext(UserContext);
  const logout = () => {
    localStorage.clear();
    token = undefined;
  };
  return (
    <div className="navbar">
      {token ? (
        <div className="logged-in-list">
          <div className="brand">
            <h3>Academia</h3>
          </div>
          <div>
            <Link className="home-link" to={"/home"}>
              Home
            </Link>
            <Link className="aboutUs-link" to={"/"}>
              About Us
            </Link>
          </div>
          <div className="logged-out">
          <Link onClick={logout} className="logout-link" to={"/login"}>
            Logout
          </Link>
          </div>
        </div>
      ) : (
        <div className="logged-out-list">
          <div className="brand">
            <h3>Academia</h3>
          </div>
          <div>
            <Link className="home-link" to={"/home"}>
              Home
            </Link>
            <Link className="aboutUs-link" to={"/"}>
              About Us
            </Link>
            <Link className="register-link" to={"/register"}>
              Register
            </Link>
          </div>
          <div className="logged-out">
            <Link className="login-link" to={"/login"}>
              Login
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
