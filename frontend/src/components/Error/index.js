import "./style.css";
import { useContext } from "react";
import { UserContext } from "../../App";
const Error = () => {
  const { Navigate } = useContext(UserContext);
  return (
    <div>
      <section class="page_404">
       
        <div class="container">
          <div class="row">
            <div class="col-sm-12 ">
              <div class="col-sm-10 col-sm-offset-1">
                <div class="four_zero_four_bg">
                  <h1>404</h1>
                  
                </div>

                <div class="contant_box_404">
                <h2>Not Found</h2>
                  <h3 class="h2">Look like you're lost</h3>

                  <p>the page you are looking for not avaible!</p>

                  <button  onClick={() => Navigate(-1)}class="link_404 btn">
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
