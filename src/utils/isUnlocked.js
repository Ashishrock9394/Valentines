export const isUnlocked = (dayNumber) => {
  const today = new Date().getDate();
  // return true;
  return today >= dayNumber;
};
