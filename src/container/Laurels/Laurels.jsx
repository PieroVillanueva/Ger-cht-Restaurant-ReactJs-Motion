import { images, data } from "../../constants";
import { SubHeading } from "../../components";
import { motion } from "framer-motion";
import { fadeIn, container, slideInStagged } from "../../utils/motion";

import "./Laurels.css";

const AwardCard = ({ award: { imgUrl, title, subtitle } }) => {
  return (
    <motion.div
      variants={slideInStagged("down")}
      className="app__laurels_awards-card"
    >
      <img src={imgUrl} alt="award" />
      <div className="app__laurels_awards-card_content">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
        <p className="p__cormorant" style={{ color: "#aaa" }}>
          {subtitle}
        </p>
      </div>
    </motion.div>
  );
};

const Laurels = () => {
  return (
    <div className="app__bg app__wrapper section__padding" id="awards">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="app__wrapper_info"
      >
        <motion.div variants={slideInStagged("left")}>
          <SubHeading title="Awards & recognition" />
        </motion.div>
        <motion.h1
          variants={slideInStagged("left")}
          className="headtext__cormorant"
        >
          Our Laurels
        </motion.h1>
        <div className="app__laurels_awards">
          {data.awards.map((award) => (
            <AwardCard award={award} key={award.title} />
          ))}
        </div>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="app__wrapper_img"
      >
        <img src={images.laurels} alt="laurels" />
      </motion.div>
    </div>
  );
};

export default Laurels;
