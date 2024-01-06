import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
const Login = () => {
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    
    return (
        <div className="Login">
           <label>Password</label>
           <input onChange={(e) => {
            setPassword(e.target.value)
           }} placeholder="Password"/>
           <br/>
           <label>Email</label>
           <input onChange={(e) => {
            setEmail(e.target.value)
           }} placeholder="Email"/>
           <br/>
           <button onClick={() => {
            const userInfo = {
                password,
                email
            }
            axios.post('http://localhost:5000/user/login',userInfo).then((result) => {
             
                localStorage.setItem('token',result.data.userToken)
                const token = localStorage.getItem('token')
                console.log(token);
            }).catch((err) => {
                console.log(err);
            })
           }}>Login</button>
        </div>
    );
}


export default Login