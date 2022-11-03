import { CityDataType } from "../Types/CityData";
import { CityActions } from "../Utils/constants";

export type CityReducerState = {
  cityName: string;
  cityData: CityDataType | null;
  cityNotFound: boolean;
  favCities: [];
};

export type CityReducerAction = {
  type: CityActions;
  payload: any;
};

export const cityReducer = (
  state: CityReducerState,
  action: CityReducerAction
) => {
  switch (action.type) {
    case CityActions.SET_CITY_NAME:
      return {
        ...state,
        cityName: action.payload,
        cityData: null,
        cityNotFound: false,
      };
    case CityActions.SET_CITY_DATA:
      return { ...state, cityData: action.payload };
    case CityActions.SET_CITY_NOT_FOUND:
      return { ...state, cityNotFound: action.payload };
    case CityActions.FAV_CITIES:
      return { ...state, favCities: action.payload };
    default:
      return state;
  }
};
