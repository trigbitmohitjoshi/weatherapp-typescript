export type CityDataMain = {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
};
export type CityDataWind = {
  speed: number;
  deg: number;
};
export type CityDataWeather = {
  description: string;
}[];
export type CityDataSys = {
  country: string;
};
export type CityCoord = {
  lat: number;
  lon: number;
};
export type CityDataType = {
  main: CityDataMain;
  wind: CityDataWind;
  name: string;
  weather: CityDataWeather;
  sys: CityDataSys;
} | null;
