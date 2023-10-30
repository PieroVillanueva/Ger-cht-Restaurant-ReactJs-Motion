import { FiFacebook, FiInstagram, FiTwitter } from "react-icons/fi";

import { FooterOverlay, Newsletter } from "../../components";

import "./Footer.css";
import { images } from "../../constants";
import { motion } from "framer-motion";
import { Fragment } from "react";
import { fadeIn, container, slideInStagged, slideIn } from "../../utils/motion";

const Footer = () => {
  return (
    <div className="app__footer section__padding ">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links" style={{ zIndex: "2" }}>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="app__footer-links_contact"
        >
          <motion.h1
            variants={slideInStagged("down")}
            className="app__footer-headtext"
          >
            Contact us
          </motion.h1>
          <motion.p
            variants={slideInStagged("down")}
            className="p__opensans grey"
          >
            9 W 53rd St, New York, NY 10019, USA
          </motion.p>
          <motion.p
            variants={slideInStagged("down")}
            className="p__opensans grey"
          >
            +1 212-344-1230
          </motion.p>
          <motion.p
            variants={slideInStagged("down")}
            className="p__opensans grey"
          >
            +1 212-555-1230
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="app__footer-links_logo"
        >
          <motion.img
            variants={slideInStagged("down")}
            src={images.gericht}
            alt="footer_logo"
          />
          <motion.p variants={slideInStagged("down")} className="p__opensans">
            "The best way to find yourseft is to lose yourself in the service of
            others"
          </motion.p>
          <motion.img
            variants={slideInStagged("down")}
            src={images.spoon}
            alt="spoon"
            className="spoon__img"
            style={{ marginTop: "15px" }}
          />
          <div className="app__footer-links_icons">
            <motion.Fragment variants={slideInStagged("down")}>
              <FiFacebook />
            </motion.Fragment>
            <motion.Fragment variants={slideInStagged("down")}>
              <FiTwitter />
            </motion.Fragment>
            <motion.Fragment variants={slideInStagged("down")}>
              <FiInstagram />
            </motion.Fragment>
          </div>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="app__footer-links_work"
        >
          <motion.h1
            variants={slideInStagged("down")}
            className="app__footer-headtext"
          >
            Working Hours
          </motion.h1>
          <motion.p
            variants={slideInStagged("down")}
            className="p__opensans grey"
          >
            Monday-Friday
          </motion.p>
          <motion.p
            variants={slideInStagged("down")}
            className="p__opensans grey"
          >
            08:00am - 12:00am
          </motion.p>
          <motion.p
            variants={slideInStagged("down")}
            className="p__opensans grey"
          >
            Saturday-Sunday
          </motion.p>
          <motion.p
            variants={slideInStagged("down")}
            className="p__opensans grey"
          >
            07:00am - 11:00pm
          </motion.p>
        </motion.div>
      </div>
      <div className="footer__copyright" style={{ zIndex: "2" }}>
        <motion.p
          variants={slideIn("down", "tween", 0.8, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="p__opensans grey"
        >
          {new Date().getFullYear()} Gerícht. All Rights Reserved
        </motion.p>
      </div>
    </div>
  );
};

export default Footer;
