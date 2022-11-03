import React from "react";
import { cityReducer } from "./Reducers/cityReducer";
import { CityActions } from "./Utils/constants";
import IndexGlobalStyle from "./Styles";
import { Route, Routes, useLocation } from "react-router-dom";
import DetailedWeatherPage from "./Components/DetailedWeather/DetailedWeatherPage";
import HomePage from "./Components/HomePage";
import PageNotFound from "./Components/PageNotFound";
import { AnimatePresence } from "framer-motion";
import { CityContextType } from "./Types/CityData";

const initialState = {
  cityName: "",
  cityData: null,
  cityNotFound: false,
  favCities: [],
};

export const CityContext = React.createContext<CityContextType>(null);
const App = () => {
  const [state, dispatch] = React.useReducer(cityReducer, initialState);
  const location = useLocation();
  React.useEffect(() => {
    const fav = localStorage.getItem("Fav Cities");
    dispatch({
      type: CityActions.FAV_CITIES,
      payload: fav !== null ? JSON.parse(fav) : [],
    });
  }, []);

  return (
    <CityContext.Provider value={{ state, dispatch }}>
      <IndexGlobalStyle />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route index path="/" element={<HomePage />} />
          <Route
            path="more-details/:cityName"
            element={<DetailedWeatherPage />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
    </CityContext.Provider>
  );
};

export default App;
