import "./style.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../App";

const Home = () => {
  const {Navigate} = useContext(UserContext);
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
    <div >
  
      <div className="desc-home">
        <h1 className="h1-home">The Worlds Best Online Courses</h1>
        <p className="parg-home">Own you future by learning new skills online</p>
        <input className="search-home" type="search" placeholder=" Search..."/>
      </div>
      <div className="home-sec">
      <h1 className="h1-sec-home">Our Category</h1>
      <p>The world Largest selection of course</p>
      </div>
    
      <div className="sect-card">
      <div className="card">
        {category.map((res, ind) => {
          return (
            <div key={ind} className="single-category">
              <img className="cate-img" src={res.image} alt={res.name} />
              <h4 className="category-title">{res.name}</h4>
              <button className="btn"
                onClick={() => {
                  Navigate("/course");
                  localStorage.setItem('category',res._id)
                }}
              >
                Click here
              </button>
            </div>
          );
        })}
      </div>
      </div>

    </div>
  );
};

export default Home;
