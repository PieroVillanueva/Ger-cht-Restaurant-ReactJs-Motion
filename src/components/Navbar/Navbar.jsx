import { useState, Fragment } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { motion } from "framer-motion";
import { fadeIn, container, slideInStagged, slideIn } from "../../utils/motion";

import images from "../../constants/images";

import "./Navbar.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <motion.nav
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="app__navbar"
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 0.5)}
        className="app__navbar-logo"
      >
        <img src={images.gericht} alt="app Logo" />
      </motion.div>

      <ul className="app__navbar-links">
        <motion.li variants={slideInStagged("down")} className="p__opensans">
          <a href="#home">Home</a>
        </motion.li>
        <motion.li variants={slideInStagged("down")} className="p__opensans">
          <a href="#about">About</a>
        </motion.li>
        <motion.li variants={slideInStagged("down")} className="p__opensans">
          <a href="#menu">Menu</a>
        </motion.li>
        <motion.li variants={slideInStagged("down")} className="p__opensans">
          <a href="#awards">Awards</a>
        </motion.li>
        <motion.li variants={slideInStagged("down")} className="p__opensans">
          <a href="#contact">Contact</a>
        </motion.li>
      </ul>

      <motion.div
        variants={fadeIn("left", "tween", 0.2, 0.5)}
        className="app__navbar-login"
      >
        <a href="#login" className="p__opensans">
          Log In / Register
        </a>
        <div />
        <a href="/" className="p__opensans">
          Book table
        </a>
      </motion.div>
      <div className="app__navbar-smallscreen">
        <motion.Fragment variants={fadeIn("left", "tween", 0.2, 0.5)}>
          <GiHamburgerMenu
            color="#fff"
            fontSize={27}
            style={{ cursor: "pointer" }}
            onClick={() => setToggleMenu(true)}
          />
        </motion.Fragment>

        {toggleMenu && (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="app__navbar-smallscreen_overlay flex__center "
          >
            <motion.Fragment
              variants={slideInStagged("down")}
              className="overlay__close"
            >
              <MdOutlineRestaurantMenu
                fontSize={27}
                onClick={() => setToggleMenu(false)}
              />
            </motion.Fragment>
            <ul className="app__navbar-smallscreen_links">
              <motion.li
                variants={slideInStagged("down")}
                className="p__opensans"
              >
                <a href="#home">Home</a>
              </motion.li>
              <motion.li
                variants={slideInStagged("down")}
                className="p__opensans"
              >
                <a href="#about">About</a>
              </motion.li>
              <motion.li
                variants={slideInStagged("down")}
                className="p__opensans"
              >
                <a href="#menu">Menu</a>
              </motion.li>
              <motion.li
                variants={slideInStagged("down")}
                className="p__opensans"
              >
                <a href="#awards">Awards</a>
              </motion.li>
              <motion.li
                variants={slideInStagged("down")}
                className="p__opensans"
              >
                <a href="#contact">Contact</a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;
