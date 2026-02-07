export const isUnlocked = (dayNumber) => {
  const today = new Date().getDate();
  return today >= dayNumber;
  // return true;
};
