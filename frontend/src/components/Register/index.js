import './style.css';
import { useState ,useContext} from 'react';
import axios from 'axios'
import { UserContext } from '../../App';
const Register = () => {
    const user = useContext(UserContext);

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [age, setAge] = useState();
    const [phoneNumber, setPhoneNumber] = useState();
    const [country, setCountry] = useState();

    return (
        <div className="register">
            <h1>Rigester component</h1>
            <div className='form'>
                <label>Name</label>
                <input placeholder='Name' onChange={(e) => {
                    setName(e.target.value)
                }} />
                <br />
                <label>Email</label>
                <input placeholder='Email' onChange={(e) => {
                    setEmail(e.target.value)
                }} />
                <br />
                <label>Password</label>
                <input placeholder='Password' onChange={(e) => {
                    setPassword(e.target.value)
                }} />
                <br />
                <label>Age</label>
                <input placeholder='Age' onChange={(e) => {
                    setAge(e.target.value)
                }} />
                <br />
                <label>Phone number</label>
                <input placeholder='PhoneNumber' onChange={(e) => {
                    setPhoneNumber(e.target.value)

                }} />
                <br />
                <label>Country</label>
                <input placeholder='Country' onChange={(e) => {
                    setCountry(e.target.value)
                }} />
                <br />
                <button onClick={() => {
                    const userInfo = {
                        name,
                        email,
                        password,
                        age,
                        country,
                        phoneNumber,
                        role: "6595c8431aa2ed8204c495c2"
                    }
                    axios.post('http://localhost:5000/user/register', userInfo).then((res) => {
                        user.Navigate('/login')
                        console.log(res);
                    })
                        .catch((err) => {
                            console.log(err);
                        })
                }}>Register</button>
            </div>
        </div>
    );
}

export default Register