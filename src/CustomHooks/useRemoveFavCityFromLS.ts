import React from "react";
import { CityContext } from "../App";
import { CityActions } from "../Utils/constants";

export const useRemoveFavCityFromLS = () => {
  const { dispatch } = React.useContext(CityContext)!;
  const removeFavFromLS = React.useCallback(
    (cityName: string) => {
      const favCities = localStorage.getItem("Fav Cities");
      const favCitiesArray = JSON.parse(favCities!);
      favCitiesArray.splice(favCitiesArray.indexOf(cityName), 1);
      localStorage.setItem("Fav Cities", JSON.stringify(favCitiesArray));
      dispatch({
        type: CityActions.FAV_CITIES,
        payload: favCitiesArray,
      });
    },
    [dispatch]
  );
  return removeFavFromLS;
};
