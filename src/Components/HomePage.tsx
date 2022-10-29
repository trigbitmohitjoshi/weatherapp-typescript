import React from "react";
import { motion } from "framer-motion";
import { AppVariant } from "../Animations/App.animations";
import AppStyles from "../Styles/App.styles";
import SearchField from "./SearchField";
import VerticalSpacer from "./VerticalSpacer";
import WeatherInfo from "./WeatherInfo";
import FavCity from "./FavCity";
import { CityContext } from "../App";
const HomePage = () => {
  const { state } = React.useContext(CityContext)!;

  return (
    <AppStyles.MainContainer
      as={motion.div}
      variants={AppVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <AppStyles.AppContainer>
        <SearchField />
        <VerticalSpacer space={"1rem"} />
        {state.cityName.length !== 0 ? (
          state.cityData !== null ? (
            <WeatherInfo />
          ) : state.cityNotFound === false ? (
            <p>Loading...</p>
          ) : (
            <p>City Not Found</p>
          )
        ) : (
          <p>No City Entered</p>
        )}
      </AppStyles.AppContainer>
      <AppStyles.FavCityContainer>
        <FavCity />
      </AppStyles.FavCityContainer>
    </AppStyles.MainContainer>
  );
};
export default HomePage;
