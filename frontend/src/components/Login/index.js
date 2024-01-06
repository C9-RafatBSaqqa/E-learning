import { useState ,useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
const Login = () => {
    const Navigate = useNavigate(); 
    const user = useContext(UserContext);
    
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    
    return (
        <div className="Login">
            <label>Email</label>
           <input onChange={(e) => {
            setEmail(e.target.value)
           }} placeholder="Email"/>
           <br/>
           <label>Password</label>
           <input onChange={(e) => {
            setPassword(e.target.value)
           }} placeholder="Password"/>
           <br/>
           <button onClick={() => {
            const userInfo = {
                password,
                email
            }
            axios.post('http://localhost:5000/user/login',userInfo).then((result) => {
             user.setToken(localStorage.setItem('token',result.data.userToken))
                Navigate("/app")
            
            }).catch((err) => {
                console.log(err);
            })
           }}>Login</button>
        </div>
    );
}


export default Login