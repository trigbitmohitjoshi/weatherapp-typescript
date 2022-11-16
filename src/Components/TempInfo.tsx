import React from "react";
import TempInfoContainer from "./TempInfoContainer";
import { CityDataMain } from "../Types/CityData";
import { kelvinToCelsius } from "../Utils/kelvinToCelsius";
const TempInfo = ({ cityTempInfo }: { cityTempInfo: CityDataMain }) => {
  const currentTemp = kelvinToCelsius(cityTempInfo.temp).toFixed(1);
  const maxTemp = kelvinToCelsius(cityTempInfo.temp_max).toFixed(1);
  const minTemp = kelvinToCelsius(cityTempInfo.temp_min).toFixed(1);
  const feelsLikeTemp = kelvinToCelsius(cityTempInfo.feels_like).toFixed(1);
  return (
    <TempInfoContainer>
      <h2>{currentTemp} &#8451;</h2>
      <p>Feels Like {feelsLikeTemp} &#8451;</p>
      <div>
        <p>Max Temp {maxTemp} &#8451;</p>
        <p>Min Temp {minTemp} &#8451;</p>
        <p>Humidity {cityTempInfo.humidity}%</p>
      </div>
    </TempInfoContainer>
  );
};

export default TempInfo;
