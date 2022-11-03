import React from "react";
import { CityContext } from "../App";
import { CityActions } from "../Utils/constants";

export const useAddFavCityToLS = () => {
  const { dispatch } = React.useContext(CityContext)!;
  const addFavToLS = React.useCallback(
    (cityName: string) => {
      const favCities = localStorage.getItem("Fav Cities");
      const favCitiesArray =
        favCities == null ? [cityName] : [cityName, ...JSON.parse(favCities)];
      localStorage.setItem("Fav Cities", JSON.stringify(favCitiesArray));
      dispatch({
        type: CityActions.FAV_CITIES,
        payload: favCitiesArray,
      });
    },
    [dispatch]
  );
  return addFavToLS;
};
