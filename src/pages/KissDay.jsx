import DayPage from "../components/DayPage";

export default function KissDay() {
  return (
    <DayPage
      title="🌹 Happy Kiss Day"
      cards={[
        { image: "/img/kiss1.jpg", text: "Kiss me, my love 😘" },
        { image: "/img/kiss2.jpg", text: "Your lips are my favorite place to be ❤️" },
        { image: "/img/kiss3.jpg", text: "One kiss could bind two souls in a second ❤️" },
      ]}
    />
  );
}
