import './style.css'
const Footer = () => {
  return (
    <div className="footer">
        <div>
        <p><i className="fa-solid fa-location-dot fa-lg" style={{color: "#ff0000"}}></i></p>
      </div>
      <div>
      <p>Copyright © Your Website 2024.</p>
      
      </div>
      <div>
      <p className="social-media"><i className="fa-brands fa-facebook fa-lg" style={{color: "#0b61c4",}}></i>
      <i className="fa-brands fa-instagram fa-lg" style={{color: "#eb005e",}}></i>
      <i className="fa-brands fa-github fa-lg"></i>
      <i className="fa-brands fa-snapchat fa-lg" style={{color: "#FFD43B"}}></i></p>
      </div>
    </div>
  );
};

export default Footer;
