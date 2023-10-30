import { SubHeading, TypingText } from "../../components";
import { motion } from "framer-motion";
import { fadeIn, container, slideInStagged } from "../../utils/motion";

import "./Newsletter.css";

const Newsletter = () => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="app__newsletter"
    >
      <div className="app__newsletter-heading">
        <motion.div variants={slideInStagged("down")}>
          <SubHeading title="Newsletter" />
        </motion.div>
        <motion.h1
          variants={slideInStagged("down")}
          className="headtext__cormorant"
        >
          Subscribe to our newsletter
        </motion.h1>
        <TypingText
          title={"And never miss latest updates!"}
          classname={"p__opensans "}
        />
      </div>
      <div className="app__newsletter-input flex__center">
        <motion.input
          variants={slideInStagged("down")}
          type="email"
          placeholder="Enter your Email Address"
        />
        <motion.button
          variants={slideInStagged("down")}
          type="button"
          className="custom__button"
        >
          Subscribe
        </motion.button>
      </div>
    </motion.div>
  );
};

export default Newsletter;
