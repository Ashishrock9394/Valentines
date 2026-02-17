export const getTodayPage = () => {
  const now = new Date();
  const utc = now.getTime() + now.getTimezoneOffset() * 60000;
  const istOffset = 5.5 * 60 * 60 * 1000; // IST = UTC+5:30
  const istDate = new Date(utc + istOffset);
  const today = istDate.getDate();

  const map = {
    7: "rose",
    8: "propose",
    9: "chocolate",
    10: "teddy",
    11: "promise",
    12: "hug",
    13: "kiss",
    14: "valentine",
  };

  return map[today] || "Good Bye";
};
