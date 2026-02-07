import { motion } from "framer-motion";

export default function FloatingHearts({ count = 24 }) {
  const hearts = Array.from({ length: count }).map((_, i) => {
    const left = Math.random() * 100; // vw
    const size = 18 + Math.random() * 36; // px
    const duration = 6 + Math.random() * 6;
    const delay = Math.random() * 5;
    const x = Math.random() * 120 - 60; // horizontal drift
    const rotate = Math.random() * 360 - 180;
    const opacity = 0.7 + Math.random() * 0.3;
    return { id: i, left, size, duration, delay, x, rotate, opacity };
  });

  return (
    <div className="hearts" aria-hidden="true">
      {hearts.map((h) => (
        <motion.span
          key={h.id}
          className="heart"
          style={{ left: `${h.left}vw`, fontSize: h.size }}
          initial={{ y: "110vh", opacity: 0, rotate: 0 }}
          animate={{
            y: ["110vh", "-10vh"],
            x: [0, h.x, h.x / 2],
            opacity: [0, h.opacity, h.opacity * 0.9],
            rotate: [0, h.rotate],
            scale: [0.9, 1, 0.95],
          }}
          transition={{
            duration: h.duration,
            ease: "linear",
            repeat: Infinity,
            delay: h.delay,
          }}
        >
          ❤️
        </motion.span>
      ))}
    </div>
  );
}
