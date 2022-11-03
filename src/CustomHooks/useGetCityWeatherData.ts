import React from "react";
import { getCityWeatherData } from "../Api/getCityWeatherData";
import { CityContext } from "../App";
import {CityActions } from "../Utils/constants";

export const useGetCityWeatherData = () => {
  const { dispatch } = React.useContext(CityContext)!;
  return React.useCallback(
    (cityName: string) => {
      getCityWeatherData(cityName.toLowerCase())
        .then((res) => {
          dispatch({
            type: CityActions.SET_CITY_DATA,
            payload: res.data,
          });
        })
        .catch(() => {
          dispatch({
            type: CityActions.SET_CITY_NOT_FOUND,
            payload: true,
          });
        });
    },
    [dispatch]
  );
};
