export const dateTimeToTime = (dateTime: string) => {
  const newDateTime = new Date(dateTime);
  return newDateTime.toLocaleTimeString();
};
