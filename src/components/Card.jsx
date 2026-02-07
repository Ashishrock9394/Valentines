import { motion } from "framer-motion";

export default function Card({ image, text }) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="card"
    >
      <img src={image} alt="" />
      <p>{text}</p>
    </motion.div>
  );
}
