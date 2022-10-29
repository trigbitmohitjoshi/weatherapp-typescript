import axios from "axios";
const getCityWeatherData = (city: string) => {
  const res = axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=40f750264f80cf395984132d41d9bf76`
  );
  return res;
};
const getCityFiveDayWeatherData = (city: string) => {
  const res = axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=40f750264f80cf395984132d41d9bf76`
  );
  return res;
};
export { getCityWeatherData, getCityFiveDayWeatherData };
