import DayPage from "../components/DayPage";

export default function RoseDay() {
  return (
    <DayPage
      title="🌹 Happy Rose Day"
      cards={[
        { image: "/img/rose1.png", text: "For you, my love 🌹" },
        { image: "/img/rose2.png", text: "You are my favorite flower ❤️" },
        { image: "/img/rose3.png", text: "Happy Rose Day!" },
      ]}
    />
  );
}
