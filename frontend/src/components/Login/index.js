import "./style.css";
import Logo from "../../img/background.jpg";
import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../App";
const Login = () => {
  const { setToken, Navigate ,setInstructor} = useContext(UserContext);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [loginError, setLoginError] = useState("");
  

  return (
    <div className="inputform">
      <div className="desc-login">
        <h1>Learn From The Expert</h1>
        <p className="parg-login">
          Lore LoreLoreLorepLoreLoreLoreLoreLoreLoreLoreLo
          <br />
          reLoreLoreLore
        </p>
        <button className="subsc-btn btn">Subscribe Now</button>
      </div>
      <div className="Login-component">
        <h1>login</h1>
        <div className="input-container">
          <input
            type="email"
            id="email"
            className="input-field"
            placeholder=" "
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <label htmlFor="email" className="input-label">
            Email
          </label>
        </div>
        <div className="input-container">
          <input
            type="password"
            id="password"
            className="input-field"
            placeholder=" "
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label htmlFor="password" className="input-label">
            Password
          </label>
        </div>
        <br/>
        <p className="error">{loginError}</p>
        <button
          className="login-btn btn"
          onClick={() => {
            const userInfo = {
              password,
              email,
            };
            axios
              .post("http://localhost:5000/user/login", userInfo)
              .then((result) => {                
                 if (result.data.role === "INSTRUCTOR") {
                  setInstructor(true)
                  Navigate("/instructor");
                } else {
                  Navigate("/home");
                }
                localStorage.setItem('userId',result.data.user)
                localStorage.setItem("token", result.data.userToken);
                setToken(localStorage.getItem("token"));
              })
              .catch((err) => {
                setLoginError(err.response.data.message)
              });
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
