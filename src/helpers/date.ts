export const addMonths = (months: number, date?: Date) => {
  const currentDate = date || new Date();
  currentDate.setMonth(currentDate.getMonth() + months);
  return currentDate;
};

export const addDays = (days: number, date?: Date) => {
  const currentDate = date || new Date();
  currentDate.setDate(currentDate.getDate() + days);
  return currentDate;
};
