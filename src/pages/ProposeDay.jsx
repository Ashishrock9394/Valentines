import DayPage from "../components/DayPage";

export default function ProposeDay() {
  return (
    <DayPage
      title="🌹 Happy Propose Day"
      cards={[
        { image: "/img/propose1.jpg", text: "Will you be my Valentine?" },
        { image: "/img/propose2.jpg", text: "You are my everything ❤️" },
        { image: "/img/propose.jpg", text: "I love you more than words can say 😘" },
      ]}
    />
  );
}
