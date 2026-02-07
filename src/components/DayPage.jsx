import Card from "./Card";
import Footer from "./Footer";
import { motion } from "framer-motion";

export default function DayPage({ title, cards }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="page"
    >
      <h1>{title}</h1>

      <div className="card-grid">
        {cards.map((c, i) => (
          <Card key={i} image={c.image} text={c.text} />
        ))}
      </div>
      <Footer />
    </motion.div>
  );
}
