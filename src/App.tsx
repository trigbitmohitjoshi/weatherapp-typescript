import React from "react";
import { cityReducer } from "./Reducers/cityReducer";
import { FAV_CITIES } from "./Utils/Constants";
import IndexGlobalStyle from "./Styles/index.styles";
import { Route, Routes, useLocation } from "react-router-dom";
import DetailedWeatherPage from "./Components/Detailed Weather/DetailedWeatherPage";
import HomePage from "./Components/HomePage";
import PageNotFound from "./Components/PageNotFound";
import { CityDataType } from "./Types/CityData.types";
import { AnimatePresence } from "framer-motion";

const initialState = {
  cityName: "",
  cityData: null,
  cityNotFound: false,
  favCities: [],
};
type CityContextType = {
  state: {
    cityName: string;
    cityData: CityDataType;
    cityNotFound: boolean;
    favCities: [];
  };
  dispatch: React.Dispatch<any>;
};
export const CityContext = React.createContext<CityContextType | null>(null);
const App = () => {
  const [state, dispatch] = React.useReducer(cityReducer, initialState);
  const location = useLocation();
  React.useEffect(() => {
    const fav = localStorage.getItem("Fav Cities");
    dispatch({
      type: FAV_CITIES,
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
