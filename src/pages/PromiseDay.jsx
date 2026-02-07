import DayPage from "../components/DayPage";

export default function PromiseDay() {
  return (
    <DayPage
      title="🌹 Happy Promise Day"
      cards={[
        { image: "/img/promise1.jpg", text: "I promise to love you forever ❤️" },
        { image: "/img/promise2.jpg", text: "I promise to be your best friend forever ❤️" },
        { image: "/img/promise3.jpg", text: "I promise to always be there for you ❤️" },
      ]}
    />
  );
}
