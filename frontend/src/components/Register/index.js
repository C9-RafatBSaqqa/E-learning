import "./style.css";
import { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../App";
const Register = () => {
  const user = useContext(UserContext);

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [age, setAge] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [country, setCountry] = useState();

  return (
    <div className="inputform-reg">
        
       <div className="desc-login">
        <h1>Learn From The Expert</h1>
        <p className="parg-login">Lore LoreLoreLorepLoreLoreLoreLoreLoreLoreLoreLo<br />reLoreLoreLore</p>
        <button className="subsc-btn btn">Subsecrib Now</button>
      </div>

      <div className="register-component">
      <h1>Sign Up</h1>
        <div className="input-container">
          <input
            className="input-fieldreg"
            placeholder=" "
            type="text"
            id="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <label for="name" className="input-label">
            Name
          </label>
        </div>

        <div className="input-container">
          <input
            type="email"
            id="email"
            className="input-fieldreg"
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
            placeholder=" "
            className="input-fieldreg"
            type="password"
            id="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <label for="password" className="input-label">
            Password
          </label>
        </div>

        <div className="input-container">
          <input
            type="number"
            id="age"
            className="input-fieldreg"
            placeholder=" "
            onChange={(e) => {
              setAge(e.target.value);
            }}
          />
          <label for="age" className="input-label">
            Age
          </label>
        </div>

        <div className="input-container">
          <input
            type="number"
            id="phoneNumber"
            className="input-fieldreg"
            placeholder=" "
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
          <label for="phoneNumber" className="input-label">
            Phone number
          </label>
        </div>

        <div className="input-container">
          <input
            type="text"
            id="country"
            className="input-fieldreg"
            placeholder=" "
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
          <label for="country" className="input-label">
            Country
          </label>
        </div>

        <button className="register-btn btn"
          onClick={() => {
            const userInfo = {
              name,
              email,
              password,
              age,
              country,
              phoneNumber,
              role: "6595c8431aa2ed8204c495c2",
            };
            axios
              .post("http://localhost:5000/user/register", userInfo)
              .then((res) => {
                user.Navigate("/login");
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Register
        </button>

      </div>
    </div>
  );
};

export default Register;
