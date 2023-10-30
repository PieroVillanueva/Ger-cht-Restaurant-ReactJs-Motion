import { images } from "../../constants";
import { motion } from "framer-motion";
import { fadeIn, container, slideInStagged } from "../../utils/motion";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div
      className="app__aboutus app__bg flex__center section__padding"
      id="about"
    >
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="g letter" />
      </div>
      <div className="app__aboutus-content flex__center">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="app__aboutus-content_about"
        >
          <motion.h1
            variants={slideInStagged("left")}
            className="headtext__cormorant"
          >
            About Us
          </motion.h1>
          <motion.img
            src={images.spoon}
            alt="about_spoon"
            variants={slideInStagged("left")}
            className="spoon__img"
          />
          <motion.p variants={slideInStagged("left")} className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </motion.p>
          <motion.button
            type="button"
            variants={slideInStagged("left")}
            className="custom__button"
          >
            Know More
          </motion.button>
        </motion.div>

        <motion.div
          variants={fadeIn("down", "tween", 0.2, 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="app__aboutus-content_knife flex__center"
        >
          <img src={images.knife} alt="knife" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="app__aboutus-content_history"
        >
          <motion.h1
            variants={slideInStagged("right")}
            className="headtext__cormorant"
          >
            Our History
          </motion.h1>
          <motion.img
            variants={slideInStagged("right")}
            src={images.spoon}
            alt="about_spoon"
            className="spoon__img"
          />
          <motion.p variants={slideInStagged("right")} className="p__opensans">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
            pharetra adipiscing ultrices vulputate posuere tristique. In sed
            odio nec aliquet eu proin mauris et.
          </motion.p>
          <motion.button
            variants={slideInStagged("right")}
            type="button"
            className="custom__button"
          >
            Know More
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUs;
