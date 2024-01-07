import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../App";

const Home = () => {
    // const user = useContext(UserContext)
    const [category, setCategory] = useState([]);

    return (
        <div>
            {useEffect(() => {
                axios.get('http://localhost:5000/category/getAllCategory')
                    .then((result) => {
                        setCategory(result.data.result)
                    })
                    .catch((err) => {
                        console.log(err);
                    })
            }, [])}
            {category.map((res, ind) => {
                console.log(res);
                return <>
                    <h1>{res.name}</h1></>
            })}
            <h1>Home component</h1>
        </div>
    );
}

export default Home