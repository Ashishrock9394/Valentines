import DayPage from "../components/DayPage";

export default function HugDay() {
  return (
    <DayPage
      title="🌹 Happy Hug Day"
      cards={[
        { image: "/img/hug1.jpg", text: "Hugs are my favorite way to show love ❤️" },
        { image: "/img/hug2.jpg", text: "Your hugs make my heart full ❤️" },
        { image: "/img/hug3.jpg", text: "I hug you with all my heart 🫂" },
      ]}
    />
  );
}
