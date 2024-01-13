import "./style.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../App";

const Home = () => {
  const { Navigate } = useContext(UserContext);
  const [category, setCategory] = useState([]);
  const [filter, setFilter] = useState(category);
  const handleFilter = (event) => {   
    const value = event.target.value;
    const filtered = category.filter((cate) => cate.name.includes(value));
    setFilter(filtered);
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/category/getAllCategory")
      .then((result) => {
        setCategory(result.data.result);
        setFilter(result.data.result)
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <div className="desc-home">
        <h1 className="h1-home">The Worlds Best Online Courses</h1>
        <p className="parg-home">
          Own you future by learning new skills online
        </p>
        <input className="search-home" type="search" placeholder=" Search..." />
      </div>
      <div className="home-sec">
        <h1 className="h1-sec-home">Our Category</h1>
        <p>The world Largest selection of course</p>
      </div>
      <div>
        <input placeholder="Search..." className="category-search" type="text" onChange={handleFilter} />
      </div>
      <div className="sect-card">
        <div className="card">
          {filter.map((res, ind) => {
            return (
              <div key={ind} className="single-category">
                <img className="categoty-img" src={res.image} alt={res.name} />
                <div className="container">
                  <h4 className="cate-title">
                    <b>{res.name}</b>
                  </h4>
                  <button
                    className="cate-btn btn"
                    onClick={() => {
                      Navigate("/course");
                      localStorage.setItem("category", res._id);
                    }}
                  >
                    Click here
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
