import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";

import "./Footer.css";
import { images } from "../../constants";

const Footer = () => {
  return (
    <div className="app__footer section__padding ">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links" style={{ zIndex: "2" }}>
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact us</h1>
          <p className="p__opensans grey">
            9 W 53rd St, New York, NY 10019, USA
          </p>
          <p className="p__opensans grey">+1 212-344-1230</p>
          <p className="p__opensans grey">+1 212-555-1230</p>
        </div>
        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="footer_logo" />
          <p className="p__opensans">
            "The best way to find yourseft is to lose yourself in the service of
            others"
          </p>
          <img
            src={images.spoon}
            alt="spoon"
            className="spoon__img"
            style={{ marginTop: "15px" }}
          />
          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>
        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans grey">Monday-Friday</p>
          <p className="p__opensans grey">08:00am - 12:00am</p>
          <p className="p__opensans grey">Saturday-Sunday</p>
          <p className="p__opensans grey">07:00am - 11:00pm</p>
        </div>
      </div>
      <div className="footer__copyright" style={{ zIndex: "2" }}>
        <p className="p__opensans grey">
          {new Date().getFullYear()} Gerícht. All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
