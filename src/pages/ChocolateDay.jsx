import DayPage from "../components/DayPage";

export default function ChocolateDay() {
  return (
    <DayPage
      title="🌹 Happy Chocolate Day"
      cards={[
        { image: "/img/chocolate1.jpg", text: "Happy Chocolate Day!" },
        { image: "/img/chocolate2.jpg", text: "Chocolate is my love language ❤️" },
        { image: "/img/chocolate3.jpg", text: "I love you more than chocolate can express 😘" },
      ]}
    />
  );
}
