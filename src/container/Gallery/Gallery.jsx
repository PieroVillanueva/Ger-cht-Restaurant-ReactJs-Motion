import { images } from "../../constants";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { SubHeading } from "../../components";
import { useRef } from "react";
import { motion } from "framer-motion";
import { fadeIn, container, slideInStagged } from "../../utils/motion";

import "./Gallery.css";

const galleryImages = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="app__gallery-content"
      >
        <motion.div variants={slideInStagged("left")}>
          <SubHeading title="Instagram" />
        </motion.div>
        <motion.h1
          variants={slideInStagged("left")}
          className="headtext__cormorant"
        >
          Photo Gallery
        </motion.h1>
        <motion.p
          variants={slideInStagged("left")}
          className="p__opensans"
          style={{ color: "#aaa", marginTop: "2rem" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </motion.p>
        <motion.button
          variants={slideInStagged("left")}
          type="button"
          className="custom__button"
        >
          View More
        </motion.button>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 0.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="app__gallery-images"
      >
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div
              className="app__gallery-images_card flex__center"
              key={`gallery_image-${index}`}
            >
              <img src={image} alt="gallery image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__arrow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__arrow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Gallery;
