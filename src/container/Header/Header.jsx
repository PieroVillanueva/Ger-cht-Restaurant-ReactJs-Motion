import { SubHeading } from "../../components";
import { images } from "../../constants";
import { motion } from "framer-motion";
import { fadeIn, container, slideInStagged } from "../../utils/motion";

import "./Header.css";

const Header = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="app__header app__wrapper section__padding"
      id="home"
    >
      <div className="app__wrapper_info">
        <motion.div variants={slideInStagged("down")}>
          <SubHeading title="Chase the new flavour" />
        </motion.div>
        <motion.h1 variants={slideInStagged("down")} className="app__header-h1">
          The key to Fine Dining
        </motion.h1>
        <motion.p
          variants={slideInStagged("down")}
          className="p__opensans"
          style={{ margin: "2rem 0" }}
        >
          Sit Tellus Lobortis Sed Senectus Vivamus Molestie Condimentum Volotpat
          Morbi Facilisis Quam Scelerisque Sapien. Et, Penatibus Aliquam Amet
          Tellus
        </motion.p>
        <motion.button
          variants={slideInStagged("down")}
          type="button"
          className="custom__button"
        >
          Explore Menu
        </motion.button>
      </div>
      <motion.div
        variants={fadeIn("down", "tween", 0.2, 0.5)}
        //variants={slideInStagged("down")}
        // initial="hidden"
        // whileInView="show"
        // viewport={{ once: true, amount: 0.25 }}
        className="app__wrapper_img"
      >
        <img src={images.welcome} alt="header img" />
      </motion.div>
    </motion.div>
  );
};

export default Header;
