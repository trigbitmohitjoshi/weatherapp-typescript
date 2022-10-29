export const unixToReadableFormat = (unixTimestamp: number) => {
  const dateObject = new Date(unixTimestamp * 1000);
  return dateObject.toLocaleString();
};
