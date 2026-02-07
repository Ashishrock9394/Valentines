import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

export default function GiftBox({ noMusic = false }) {
  const [open, setOpen] = useState(false);
  const [openedEnvelope, setOpenedEnvelope] = useState(null);
  const audioRefs = useRef({});
  const [playingAudio, setPlayingAudio] = useState(null);

  const days = [
    {
      day: "Rose Day",
      emoji: "🌹",
      message: "You are my most beautiful rose, blooming in my heart forever.",
      music: "rose.mp3",
    },
    {
      day: "Propose Day",
      emoji: "💍",
      message: "Every moment with you feels like a dream I never want to wake from.",
      music: "propose.mp3",
    },
    {
      day: "Chocolate Day",
      emoji: "🍫",
      message: "You are sweeter than any chocolate in this world.",
      music: "chocolate.mp3",
    },
    {
      day: "Teddy Day",
      emoji: "🧸",
      message: "I want to hold you close and never let go, like my teddy bear.",
      music: "teddy.mp3",
    },
    {
      day: "Promise Day",
      emoji: "💑",
      message: "I promise to love you forever, through every moment of our lives.",
      music: "promise-day.mp3",
    },
    {
      day: "Hug Day",
      emoji: "🤗",
      message: "Your hugs are my sanctuary, my safe place in this world.",
      music: "hug.mp3",
    },
    {
      day: "Kiss Day",
      emoji: "💋",
      message: "Every kiss with you is a promise of eternal love and devotion.",
      music: "kiss.mp3",
    },
  ];

  // Handle audio playback
  useEffect(() => {
    if (noMusic) return; // Don't play music on Valentine's page

    // Stop all audio first
    Object.values(audioRefs.current).forEach(audio => {
      if (audio) {
        audio.pause();
        audio.currentTime = 0;
      }
    });

    if (openedEnvelope !== null) {
      const audio = audioRefs.current[openedEnvelope];
      if (audio) {
        audio.currentTime = 0;
        audio.play().catch(() => {
          // Autoplay blocked
        });
        setPlayingAudio(openedEnvelope);
      }
    } else {
      setPlayingAudio(null);
    }
  }, [openedEnvelope, noMusic]);

  const handleEnvelopeClick = (index) => {
    setOpenedEnvelope(openedEnvelope === index ? null : index);
  };

  if (!open) {
    return (
      <motion.div
        className="gift-box-wrapper"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setOpen(true)}
      >
        <div className="gift-box-3d">
          🎁
        </div>
        <p className="gift-label">Open Your Heart</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="gift-opened-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <motion.button
        className="gift-back-btn"
        onClick={() => {
          setOpen(false);
          setOpenedEnvelope(null);
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        ← Back
      </motion.button>

      <motion.div
        className="envelopes-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ staggerChildren: 0.08 }}
      >
        {days.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {!noMusic && (
              <audio
                ref={(el) => {
                  if (el) audioRefs.current[index] = el;
                }}
                src={`/music/${item.music}`}
                loop
              ></audio>
            )}

            <motion.div
              className={`envelope-card ${openedEnvelope === index ? "opened" : ""}`}
              onClick={() => handleEnvelopeClick(index)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="envelope-front"
                animate={{ opacity: openedEnvelope === index ? 0 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <span className="envelope-emoji">{item.emoji}</span>
                <p className="envelope-label">{item.day}</p>
              </motion.div>

              {openedEnvelope === index && (
                <motion.div
                  className="envelope-message"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p>{item.message}</p>
                  {!noMusic && playingAudio === index && (
                    <span className="music-playing">♪ Music Playing</span>
                  )}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
