import { DAYS } from "./Constants";

export const dateTimeToWeekDay = (dateTime: string) => {
  const newDateTime = new Date(dateTime);
  return DAYS[newDateTime.getDay()];
};
