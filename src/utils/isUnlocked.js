export const isUnlocked = (dayNumber) => {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const istOffset = 5.5 * 60 * 60 * 1000; // IST = UTC+5:30
  const istDate = new Date(utc + istOffset);
  const today = istDate.getDate();

  return today >= dayNumber;
};
