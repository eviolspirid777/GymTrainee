export const declineTimes = (n: number): string => {
  const lastTwo = n % 100;
  const last = n % 10;
  if (lastTwo >= 11 && lastTwo <= 19) return "раз";
  if (last === 1) return "раз";
  if (last >= 2 && last <= 4) return "раза";
  return "раз";
};
