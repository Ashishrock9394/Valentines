import Card from "./Card";
import Footer from "./Footer";
import { motion } from "framer-motion";

export default function DayPage({ title, cards }) {
  const DEFAULT_NAME = 'My Love';
  const FIXED_NAMES = ['ashish', 'Pooja']; // edit allowed names here

  // normalize allowed names for comparison
  const ALLOWED = FIXED_NAMES.map((n) => n.toLowerCase());

  let extraName = '';
  try {
    const params = new URLSearchParams(window.location.search);
    const raw = params.get('name');
    if (raw) {
      const normalized = raw.trim().toLowerCase();
      if (ALLOWED.includes(normalized)) {
        extraName = normalized.charAt(0).toUpperCase() + normalized.slice(1);
      }
    }
  } catch (e) {}

  const nameSegment = extraName ? `${DEFAULT_NAME} ${extraName}` : DEFAULT_NAME;

  const displayTitle = title.includes('{name}')
    ? title.replace(/{name}/g, nameSegment)
    : `${title} ${nameSegment}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="page"
    >
      <h1>{displayTitle}</h1>

      <div className="card-grid">
        {cards.map((c, i) => (
          <Card key={i} image={c.image} text={c.text} />
        ))}
      </div>
      <Footer />
    </motion.div>
  );
}
