import img from "../../img/about.jpg";
import './style.css'
const Out = () => {
    return (
        <div>
  <div  id="about" className="app-AboutUs">
          <div className="text-AboutUs">
            <h1 className="about-section">About Us</h1>
            <p className="app-parag">
              Welcome To Academia Academia is a Professional course Platform.
              Here we will provide you only interesting content, which you will
              like very much. We're dedicated to providing you the best of
              course, with a focus on dependability and Online course. Please
              give your support and love. Thanks For Visiting Our Site Have a
              nice day!
            </p>
            <h1 className="app-prov">We offer</h1>

            <h5>
              We're working to turn our passion for course into a booming.
            </h5>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.
            </p>
            <div className="success-par app-parag">
            <p>* Error minus sint nobis dolor</p>
            <p>* Voluptatum porro expedita labore esse</p>
            <p>* Voluptas unde sit pariatur earum</p>
            </div>
          </div>
          <div className="Item">
            <h2 className="logo">2</h2>
            <h4 className="title">Course</h4>
            <div>
            <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.
            </p>
            <div className="success-par app-parag">
            <p>* Error minus sint nobis dolor</p>
            <p>* Voluptatum porro expedita labore esse</p>
            <p>* Voluptas unde sit pariatur earum</p>
            </div>
            </div>
          </div>
          <div className="Item">
            <h2 className="logo">3</h2>
            <h4 className="title">Outcomes</h4>
            <p className="description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt praesentium dicta consectetur fuga neque fugit a at. Cum quod vero assumenda iusto.
            </p>
            <div className="success-par app-parag">
            <p>* Error minus sint nobis dolor</p>
            <p>* Voluptatum porro expedita labore esse</p>
            <p>* Voluptas unde sit pariatur earum</p>
            </div>
          </div>
        </div>
   
        <div className="app-ContactUs">
          <h1 className="ContactUs-section">Contact Us</h1>
        </div>
        </div>
    )
}


export default Out