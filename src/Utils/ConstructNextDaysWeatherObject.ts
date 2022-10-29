import { DetailedCityWeatherInfoType } from "../Types/DetailedCityData.types";
import { nextDaysWeatherObjectType } from "../Types/NextDaysWeather.types";
import { dateTimeToTime } from "./DateTimeToTime";
import { dateTimeToWeekDay } from "./DateTimeToWeekDay";
export const constructNextDaysWeatherObject = (
  nextDaysWeatherInfo: DetailedCityWeatherInfoType
) => {
  const nextDaysWeatherObject: nextDaysWeatherObjectType = {};
  for (let i = 0; i < nextDaysWeatherInfo.length; i++) {
    let day = String(dateTimeToWeekDay(nextDaysWeatherInfo[i].dt_txt));
    let main = nextDaysWeatherInfo[i].main;
    let weather = nextDaysWeatherInfo[i].weather[0];
    let wind = nextDaysWeatherInfo[i].wind;
    let time = dateTimeToTime(nextDaysWeatherInfo[i].dt_txt);
    nextDaysWeatherObject[day] = nextDaysWeatherObject[day]
      ? [...nextDaysWeatherObject[day], { main, weather, wind, time }]
      : [{ main, weather, wind, time }];
  }
  return nextDaysWeatherObject;
};
