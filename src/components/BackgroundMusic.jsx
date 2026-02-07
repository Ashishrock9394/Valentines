import { useEffect } from "react";

export default function BackgroundMusic() {
  useEffect(() => {
    const audio = new Audio("/music/love.mp3");
    audio.loop = true;
    audio.volume = 0.5;

    document.body.addEventListener("click", () => audio.play(), {
      once: true,
    });
  }, []);

  return null;
}
