export default function LockedPage({ targetDay }) {
  const today = new Date().getDate();
  const daysLeft = targetDay - today;

  return (
    <div className="page">
      <h1>🔒 Locked</h1>
      <p>
        Unlocks in <b>{daysLeft}</b> day(s) 💌
      </p>
    </div>
  );
}
