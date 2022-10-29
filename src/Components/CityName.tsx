import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import CityNameStyle from "../Styles/CityName.styles";
import { CityDataType } from "../Types/CityData.types";
const CityName = ({ cityData }: { cityData: CityDataType }) => {
  return (
    <>
      <CityNameStyle.CityNameContainer>
        <FontAwesomeIcon icon={faMapMarkerAlt} />
        <h1>
          {cityData?.name} , {cityData?.sys.country}
        </h1>
      </CityNameStyle.CityNameContainer>
      <CityNameStyle.WeatherDescriptionContainer>
        <p>{cityData?.weather[0].description}</p>
      </CityNameStyle.WeatherDescriptionContainer>
    </>
  );
};

export default CityName;
