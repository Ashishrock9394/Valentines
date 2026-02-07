import { AnimatePresence } from "framer-motion";

import RoseDay from "./pages/RoseDay";
import ProposeDay from "./pages/ProposeDay";
import ChocolateDay from "./pages/ChocolateDay";
import TeddyDay from "./pages/TeddyDay";
import PromiseDay from "./pages/PromiseDay";
import HugDay from "./pages/HugDay";
import KissDay from "./pages/KissDay";
import ValentineDay from "./pages/ValentineDay";

import FloatingHearts from "./components/FloatingHearts";
import BackgroundMusic from "./components/BackgroundMusic";
import LockedPage from "./components/LockedPage";

import { getTodayPage } from "./utils/getTodayPage";
import { isUnlocked } from "./utils/isUnlocked";

export default function App() {
  const day = getTodayPage();

  return (
    <>
      <FloatingHearts />
      <BackgroundMusic />

      <AnimatePresence mode="wait">
        {day === "rose" && (
          <RoseDay key="rose" />
        )}

        {day === "propose" &&
          (isUnlocked(8) ? (
            <ProposeDay key="propose" />
          ) : (
            <LockedPage key="locked-propose" targetDay={8} />
          ))}

        {day === "chocolate" &&
          (isUnlocked(9) ? (
            <ChocolateDay key="chocolate" />
          ) : (
            <LockedPage key="locked-chocolate" targetDay={9}  />
          ))}

        {day === "teddy" &&
          (isUnlocked(10) ? (
            <TeddyDay key="teddy" />
          ) : (
            <LockedPage key="locked-teddy" targetDay={10} />
          ))}

        {day === "promise" &&
          (isUnlocked(11) ? (
            <PromiseDay key="promise" />
          ) : (
            <LockedPage key="locked-promise" targetDay={11} />
          ))}

        {day === "hug" &&
          (isUnlocked(12) ? (
            <HugDay key="hug" />
          ) : (
            <LockedPage key="locked-hug" targetDay={12} />
          ))}
          
        {day === "kiss" &&
          (isUnlocked(12) ? (
            <KissDay key="kiss" />
          ) : (
            <LockedPage key="locked-kiss" targetDay={12} />
          ))}

        {day === "valentine" &&
          (isUnlocked(14) ? (
            <ValentineDay key="valentine" />
          ) : (
            <LockedPage key="locked-valentine" targetDay={14} />
          ))}
      </AnimatePresence>
    </>
  );
}
