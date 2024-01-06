import { useContext, useEffect } from "react";
import axios from "axios";
import { UserContext } from "../../App";

const Home = () => {
    const user = useContext(UserContext)
    return (
        <div>
            <h1>Home page</h1>
        </div>
    );
}

export default Home