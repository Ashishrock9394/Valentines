import { motion } from "framer-motion";
import { useState } from "react";
import Card from "./Card";

export default function GiftBox() {
  const [open, setOpen] = useState(false);

  return (
    <div className="gift-section">
      {!open && (
        <motion.div
          className="gift-box"
          whileHover={{ scale: 1.1 }}
          onClick={() => setOpen(true)}
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          🎁 Click Me
        </motion.div>
      )}

      {open && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="card-grid"
        >
          {[1,2,3,4,5,6,7].map(i => (
            <Card
              key={i}
              image={`/img/love${i}.jpg`}
              text="Forever Us ❤️"
            />
          ))}
        </motion.div>
      )}
    </div>
  );
}
