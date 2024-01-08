import "./style.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../App";

const Home = () => {
  const user = useContext(UserContext);
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/category/getAllCategory")
      .then((result) => {
        setCategory(result.data.result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="card">
        {category.map((res, ind) => {
          return (
            <div key={ind} className="single-category">
              <img src={res.url} alt={res.name} />
              <h4 className="category-title">{res.name}</h4>
              <button
                onClick={() => {
                  user.Navigate("/course");
                  localStorage.setItem('category',res._id)
                }}
              >
                Click here
              </button>
            </div>
          );
        })}
      </div>

      <h1>Home component</h1>
    </div>
  );
};

export default Home;
