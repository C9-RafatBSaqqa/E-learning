import "./style.css";
import Logo from '../../img/background.jpg'
import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../App";
const Login = () => {
  const { setToken, Navigate } = useContext(UserContext);

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="inputform">
      <div className="desc-login">
        <h1>Learn From The Expert</h1>
        <p className="parg-login">Lore LoreLoreLorepLoreLoreLoreLoreLoreLoreLoreLo<br />reLoreLoreLore</p>
        <button className="subsc-btn btn">Subsecrib Now</button>
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
          <label for="email" className="input-label">
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
          <label for="password" className="input-label">
            Password
          </label>
        </div>
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
                Navigate("/home");
                localStorage.setItem("token", result.data.userToken);
                setToken(localStorage.getItem("token"));
              })
              .catch((err) => {
                console.log(err);
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
