import { DetailedCityDataType } from "../Types/DetailedCityData";
import { CityActions } from "../Utils/constants";

export const detailedWeatherReducer = (
  state: {
    detailedCityData: DetailedCityDataType;
    cityNotFound: boolean;
  },
  action: {
    type: CityActions.SET_CITY_DATA | CityActions.SET_CITY_NOT_FOUND;
    payload: any;
  }
) => {
  switch (action.type) {
    case CityActions.SET_CITY_DATA:
      return {
        ...state,
        detailedCityData: action.payload,
      };
    case CityActions.SET_CITY_NOT_FOUND:
      return { ...state, cityNotFound: action.payload };
    default:
      return state;
  }
};
