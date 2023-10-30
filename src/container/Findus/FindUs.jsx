import { images, data } from "../../constants";
import { SubHeading } from "../../components";
import { motion } from "framer-motion";
import { fadeIn, container, slideInStagged } from "../../utils/motion";

const FindUs = () => {
  return (
    <motion.div className="app__bg app__wrapper section__padding" id="contact">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="app__wrapper_info"
      >
        <motion.div variants={slideInStagged("left")}>
          <SubHeading title="Contact" />
        </motion.div>

        <motion.h1
          variants={slideInStagged("left")}
          className="headtext__cormorant"
          style={{ marginBottom: "3rem" }}
        >
          Find Us
        </motion.h1>

        <div className="app__wrapper-content">
          <motion.p
            variants={slideInStagged("left")}
            className="p__opensans"
            style={{ color: "#AAA" }}
          >
            Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
          </motion.p>
          <motion.p
            variants={slideInStagged("left")}
            className="p__cormorant"
            style={{ color: "#DCCA87", margin: "2rem 0" }}
          >
            Open Hours
          </motion.p>
          <motion.p variants={slideInStagged("left")} className="p__opensans">
            Mon - Fri: 10:00am - 2:00am
          </motion.p>
          <motion.p variants={slideInStagged("left")} className="p__opensans">
            Sat - Sun: 10:00am - 3:00am
          </motion.p>
        </div>
        <motion.button
          variants={slideInStagged("left")}
          type="button"
          className="custom__button"
          style={{ marginTop: "2rem" }}
        >
          Visit Us
        </motion.button>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="app__wrapper_img"
      >
        <img src={images.findus} alt="findus" />
      </motion.div>
    </motion.div>
  );
};

export default FindUs;
