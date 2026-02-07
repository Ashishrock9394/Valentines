export const getTodayPage = () => {
  const today = new Date().getDate();

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

  return map[today] || "valentine";
  // return "valentine";
};
