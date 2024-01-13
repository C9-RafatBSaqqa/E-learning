import "./style.css";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { UserContext } from "../../App";

const Home = () => {
  const { Navigate } = useContext(UserContext);
  const [category, setCategory] = useState([]);
  let page = [];
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryPerPage, setcategoryPerPage] = useState(3);
  for (let i = 1; i <= Math.ceil(category.length / categoryPerPage); i++) {
    page.push(i);
  }
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

  const lastCategory = currentPage * categoryPerPage;
  const firstCategory = lastCategory - categoryPerPage;

  const currentCategory = category.slice(firstCategory, lastCategory);
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
        <p className="par-sec-home">The world Largest selection of course</p>
      </div>
      <div className="sect-card">
        <div className="card">
          {currentCategory.map((res, ind) => {
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
      <div className="center">
        <div class="pagination">
          {page.map((page, ind) => {
            return (
              <p className={page == currentPage ?'active':'' }
                key={ind}
                onClick={() => {
                  setCurrentPage(page);
                }}
              >
                {page}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
