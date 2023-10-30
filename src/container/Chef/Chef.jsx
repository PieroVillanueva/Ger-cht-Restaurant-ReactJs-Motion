import "./Chef.css";
import { images } from "../../constants";
import { SubHeading, TypingText } from "../../components";
import { motion } from "framer-motion";
import { fadeIn, container, slideInStagged } from "../../utils/motion";

const Chef = () => {
  return (
    <div className="app__bg app__wrapper section__padding">
      <div className="app__wrapper_img app__wrapper_img-reverse">
        <motion.img
          variants={fadeIn("right", "tween", 0.1, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          src={images.chef}
          alt="chef"
        />
      </div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="app__wrapper_info"
      >
        <motion.div variants={slideInStagged("right")}>
          <SubHeading title={"Chef's Word"} />
        </motion.div>
        <motion.h1
          variants={slideInStagged("right")}
          className="headtext__cormorant"
        >
          What We Belive In
        </motion.h1>

        <motion.div
          variants={slideInStagged("right")}
          className="app__chef-content"
        >
          <div className="app__chef-content_quote">
            <img src={images.quote} alt="quote" />
            <p className="p__opensans" style={{ color: "#AAA" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor
              sit.
            </p>
          </div>

          <p className="p__opensans" style={{ color: "#AAA" }}>
            auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget
            sit. Nulla scelerisque scelerisque congue ac consequat, aliquam
            molestie lectus eu. Congue iaculis integer curabitur semper sit
            nunc.
          </p>
        </motion.div>

        <div className="app__chef-sign">
          <TypingText title={"Kevin Luo"} classname={"parrafo"} />

          <TypingText
            title={"Chef & Founder"}
            classname={"p__opensans color-claro"}
          />
          <motion.img
            variants={slideInStagged("right")}
            src={images.sign}
            alt="sign"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Chef;
