import "./style.css"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../App"
const Navbar = () => {
    const user = useContext(UserContext)
    const logout = () => {
        localStorage.clear();
        user.token = undefined;
    }
    return (
        <div className="">
            {user.token ?
                <div className="logged-in-list">
                    <Link onClick={logout} className="logout-link" to={'/login'}>Logout</Link>
                    <Link className="home-link" to={'/home'}>Home</Link>
                </div> :
                <div className="logged-out-list">
                    <Link className="register-link" to={'/register'}>Register</Link>
                    <Link className="login-link" to={'/login'}>Login</Link>
                </div>
            }
        </div>)
}


export default Navbar