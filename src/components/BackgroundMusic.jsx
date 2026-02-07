import { useEffect } from "react";
import { getTodayPage } from "../utils/getTodayPage";

export default function BackgroundMusic() {
  useEffect(() => {
    const currentPage = getTodayPage();
    
    // Don't play music on Valentine's page
    if (currentPage === "valentine") {
      return;
    }

    const audio = new Audio("/music/love.mp3");
    audio.loop = true;
    audio.volume = 0.5;

    document.body.addEventListener("click", () => audio.play(), {
      once: true,
    });
  }, []);

  return null;
}
