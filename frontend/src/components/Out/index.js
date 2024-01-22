import img from "../../img/about.jpg";
import "./style.css";
const Out = () => {
  return (
    <div>
      <div id="about" className="app-AboutUs ">
        <div className="text-AboutUs">
          <h1 className="about-section">About Us</h1>
          <p className="app-parag">
            Welcome To Academia Academia is a Professional course Platform. Here
            we will provide you only interesting content, which you will like
            very much. We're dedicated to providing you the best of course, with
            a focus on dependability and Online course. Please give your support
            and love. Thanks For Visiting Our Site Have a nice day!
          </p>
          <h1 className="app-prov">We offer</h1>

          <h5>We're working to turn our passion for course into a booming.</h5>
          <br />
          <h5>
            We hope you enjoy our courseas much as we enjoy offering them to
            you.
          </h5>
          <br />
          <h5>
            We will keep posting more important posts on my Website for all of
            you.
          </h5>
          <br />
          {/*  .   */}
        </div>
        <div className="img-AboutUs">
          <img
            className="app-img"
            src={img}
            alt="latest fashion this season. Shop all the hottest styles in clothes, shoes and boots at affordable prices."
          />
        </div>
      </div>
      <h1 className="how-section how">How it work</h1>
      <div className="How-it-work how">
        <div className="Item">
          <h2 className="logo">1</h2>
          <h4 className="title">Subscription</h4>
          <p className="description">
            You can enroll a indivisual course by clicking the Subscription
            button on each course. We will keep in mind those instructions.
          </p>
          <div className="success-par app-parag">
            <p>* Mony back after a month.</p>
            <p>* Accept all card payments.</p>
            <p>* Start immediately after submition.</p>
          </div>
        </div>
        <div className="Item">
          <h2 className="logo">2</h2>
          <h4 className="title">Course</h4>
          <div>
            <p className="description">
              The courses is up to data and you dont need to pay more extra for
              the.Fell free to start. We will keep in mind those instructions.
            </p>
            <div className="success-par app-parag">
              <p>* LifeTime course</p>
              <p>* All courses translated</p>
              <p>* The duration for each course 15m</p>
            </div>
          </div>
        </div>
        <div className="Item">
          <h2 className="logo">3</h2>
          <h4 className="title">Outcomes</h4>
          <p className="description">
            You will learn from the best instructors. We guarantee that you will
            be better after enrolled a specific course. We will keep in mind
            those instructions.
          </p>
          <div className="success-par app-parag">
            <p>* High quality teachs.</p>
            <p>* Voluptatum porro expedita labore esse</p>
            <p>* Voluptas unde sit pariatur earum</p>
          </div>
        </div>
      </div>

      <div className="app-ContactUs">
        <h1 className="ContactUs-section">Contact Us</h1>
        <p className="app-parag">See Our Daily News & Updates</p>
        <div className="display-flex">
          <div className="app-contact-form">
            <div className="name">
              <div>
              <input className="input input1" type="text" placeholder=" First name" />
              <input className="input" type="text" placeholder=" Last name" />
              </div>
            <input  className="input" type="text" placeholder=" Email" />
            <input  className="input"type="text" placeholder=" Subject" />
            <textarea className="input" placeholder=" Message" rows="4" cols="50"  >
      
            </textarea>
            <button className="btn message">Send message</button> 
            </div>
          </div>
          <div className="my-information">
            <h3 className="info-title">Address</h3>
            <p  className="coladd">203 Fake St. Ayn-Basha, San Francisco, California, JD</p>
            <h3 className="info-title">Phone</h3>
            <p className="col">+962 777396184</p>
            <h3 className="info-title">Email Address</h3>
            <p  className="col">raafat.saqqa@gmail.com</p>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Out;
