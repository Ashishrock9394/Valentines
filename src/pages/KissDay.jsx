import DayPage from "../components/DayPage";

export default function KissDay() {
  return (
    <DayPage
      title="🌹 Happy Kiss Day"
      cards={[
        { image: "/img/rose1.jpg", text: "Will you accept my rose?" },
        { image: "/img/rose2.jpg", text: "You are my favorite flower ❤️" },
        { image: "/img/rose3.jpg", text: "A rose for my love" },
      ]}
    />
  );
}
