import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import React from "react";
import CityInfoContainer from "../../Styles/CityInfo.styles";
import { DetailedCityInfoType } from "../../Types/DetailedCityData.types";
import { unixToReadableFormat } from "../../Utils/UnixTimeToReadableFormat";

const CityInfo = ({ cityInfo }: { cityInfo: DetailedCityInfoType }) => {
  return (
    <CityInfoContainer
      as={motion.div}
      whileHover={{ backgroundColor: "hsl(0, 0%, 80%)" }}
    >
      <section>
        <div>
          <FontAwesomeIcon icon={faMapMarkerAlt} />
          <h2>
            {cityInfo.name}, {cityInfo.country}
          </h2>
        </div>
        <div>
          <p>latitude : {cityInfo.coord.lat}</p>
          <p>longitude : {cityInfo.coord.lon}</p>
          <p>Population : {cityInfo.population}</p>
        </div>
      </section>
      <section>
        <div>
          <h2>Sunrise</h2>
          <p>{unixToReadableFormat(cityInfo.sunrise)}</p>
        </div>
        <div>
          <h2>Sunset</h2>
          <p>{unixToReadableFormat(cityInfo.sunset)}</p>
        </div>
      </section>
    </CityInfoContainer>
  );
};
export default React.memo(CityInfo);
