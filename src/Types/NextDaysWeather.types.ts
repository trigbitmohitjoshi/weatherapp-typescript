import { CityDataMain, CityDataWind } from "./CityData.types";

export type nextDaysWeatherObjectType = {
  [day: string]: {
    main: CityDataMain;
    weather: {
      description: string;
    };
    wind: CityDataWind;
    time: string;
  }[];
};

export type nextDaysWeatherJSXObjectType = {
  [day: string]: React.ReactElement[];
};
