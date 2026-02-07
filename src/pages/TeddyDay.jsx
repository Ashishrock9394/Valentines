import DayPage from "../components/DayPage";

export default function TeddyDay() {
  return (
    <DayPage
      title="🌹 Happy Teddy Day"
      cards={[
        { image: "/img/teddy.jpg", text: "Happy Teddy Day! My love ❤️" },
        { image: "/img/teddy1.jpg", text: "You are my favorite teddy bear ❤️" },
        { image: "/img/teddy2.jpg", text: "You and I are the perfect teddy pair ❤️" },
      ]}
    />
  );
}
