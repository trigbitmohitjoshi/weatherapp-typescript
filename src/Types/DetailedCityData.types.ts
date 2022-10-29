import {
  CityCoord,
  CityDataMain,
  CityDataWeather,
  CityDataWind,
} from "./CityData.types";
export type DetailedCityInfoType = {
  name: string;
  country: string;
  sunrise: number;
  sunset: number;
  timezone: number;
  population: number;
  coord: CityCoord;
};
export type DetailedCityWeatherInfoType = {
  dt_txt: string;
  main: CityDataMain;
  weather: CityDataWeather;
  wind: CityDataWind;
}[];
export type DetailedCityData = {
  list: DetailedCityWeatherInfoType;
  city: DetailedCityInfoType;
} | null;
