import { motion } from "framer-motion";

export default function FloatingHearts() {
  return (
    <div className="hearts">
      {[...Array(20)].map((_, i) => (
        <motion.span
          key={i}
          className="heart"
          initial={{ y: "100vh", opacity: 0 }}
          animate={{
            y: "-10vh",
            opacity: 1,
            x: Math.random() * 200 - 100,
          }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        >
          ❤️
        </motion.span>
      ))}
    </div>
  );
}
