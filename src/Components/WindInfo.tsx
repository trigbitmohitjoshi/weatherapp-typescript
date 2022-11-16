import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WindInfoContainer from "./WindInfoContainer";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { degToDirection } from "../Utils/degToDirection";
import { CityDataWind } from "../Types/CityData";
function WindInfo({
  cityWindInfo: { deg, speed },
}: {
  cityWindInfo: CityDataWind;
}) {
  const windDirection = degToDirection(deg);
  return (
    <>
      <WindInfoContainer>
        <FontAwesomeIcon icon={faLocationArrow} />
        <p>
          {speed}m/s {windDirection}
        </p>
      </WindInfoContainer>
    </>
  );
}

export default WindInfo;
