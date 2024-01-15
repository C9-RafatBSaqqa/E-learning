import { useContext } from "react";
import { UserContext } from "../../App";
const CourseActions = () => {
    const {token} = useContext(UserContext)
    console.log(token);
    const userid = localStorage.getItem('userId')
    console.log(userid);
    return (
        <h1>Wlcome</h1>
    );
}


export default CourseActions