import { motion } from "framer-motion";
import { container, textVariant2 } from "../utils/motion";

const TypingText = ({ title, classname }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      {Array.from(title).map((letter, index) => (
        <motion.span key={index} variants={textVariant2} className={classname}>
          {letter === " " ? "\u00a0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

// export const TitleText = ({ title, textStyles }) => {
//   return (
//     <motion.h2
//       variants={textVariant2}
//       initial="hidden"
//       whileInView="show"
//       viewport={{ once: true, amount: 0.25 }}
//       className={`mt-2 font-bold md:text-[64px] text-[40px] text-white ${textStyles}`}
//     >
//       {title}
//     </motion.h2>
//   );
// };
export default TypingText;
