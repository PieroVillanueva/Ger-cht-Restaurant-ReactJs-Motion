import { images, data } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import { motion } from "framer-motion";
import { fadeIn, container, slideInStagged } from "../../utils/motion";

import "./SpecialMenu.css";

const SpecialMenu = () => {
  return (
    <div className="app__specialMenu flex__center section__padding" id="menu">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="app_specialMenu-title"
      >
        <motion.div variants={slideInStagged("down")}>
          <SubHeading title="Menu that fits you palatte" />
        </motion.div>
        <motion.h1
          variants={slideInStagged("down")}
          className="headtext__cormorant"
        >
          Today's Special
        </motion.h1>
      </motion.div>

      <div className="app__specialMenu-menu">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="app__specialMenu-menu_wine flex__center"
        >
          <motion.p
            variants={slideInStagged("left")}
            className="app__specialMenu-menu_heading"
          >
            Wine & Beer
          </motion.p>
          <div className="app__specialMenu_menu_items">
            {data.wines.map((wine, index) => (
              <motion.div
                variants={slideInStagged("left")}
                key={wine.title + index}
              >
                <MenuItem
                  title={wine.title}
                  price={wine.price}
                  tags={wine.tags}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn("down", "tween", 0.1, 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="app__specialMenu-menu_img"
        >
          <img src={images.menu} alt="menu img" />
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="app__specialMenu-menu_cocktails flex__center"
        >
          <motion.p
            variants={slideInStagged("right")}
            className="app__specialMenu-menu_heading"
          >
            Cocktails
          </motion.p>
          <div className="app__specialMenu_menu_items">
            {data.cocktails.map((cocktail, index) => (
              <motion.div
                variants={slideInStagged("right")}
                key={cocktail.title + index}
              >
                <MenuItem
                  title={cocktail.title}
                  price={cocktail.price}
                  tags={cocktail.tags}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <div style={{ marginTop: "15px" }}>
        <motion.button
          variants={fadeIn("down", "spring", 0.8, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          type="button"
          className="custom__button"
        >
          View More
        </motion.button>
      </div>
    </div>
  );
};

export default SpecialMenu;
