import { CityCoord, CityDataMain, CityDataWind } from "./CityData";
export type DetailedCityData = {
  name: string;
  country: string;
  sunrise: number;
  sunset: number;
  timezone: number;
  population: number;
  coord: CityCoord;
};

export type DetailedCityDataList = {
  dt_txt: string;
  main: CityDataMain;
  weather: {
    description: string;
  };
  wind: CityDataWind;
}[];

export type DetailedCityDataType = {
  list: DetailedCityDataList;
  city: DetailedCityData;
} | null;

export type DataObject = {
  main: CityDataMain;
  weather: {
    description: string;
  };
  wind: CityDataWind;
  time: string;
};
export type DataObjectType = {
  [day: string]: DataObject[];
};
