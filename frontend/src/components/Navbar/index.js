import "./style.css"
import { Link } from "react-router-dom"
const Navbar = () => {
    return (
    <div className="">
    <Link className="register-link" to={'/register'}>register</Link>
    <Link className="login-link" to={'/login'}>login</Link>
        <h1>Hello Navbar</h1>

    </div>)
}


export default Navbar