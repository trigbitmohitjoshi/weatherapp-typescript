import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { CityContext } from "../App";
import { useRemoveFavCityFromLS } from "../CustomHooks/useRemoveFavCityFromLS";
import AddandRemoveFavContainer from "./AddandRemoveFavButtonContainer";
import { AddandRemoveFavVariant } from "../Animations/AddandRemoveFavButton";
import { motion } from "framer-motion";
const RemoveFromFavButton = () => {
  const {
    state: { cityName },
  } = React.useContext(CityContext)!;
  const removeFavFromLS = useRemoveFavCityFromLS();
  return (
    <AddandRemoveFavContainer
      type="removeFromFavbtn"
      onClick={() => removeFavFromLS(cityName)}
      as={motion.div}
      variants={AddandRemoveFavVariant}
      whileHover="hover"
    >
      <p>Remove From Fav</p>
      <FontAwesomeIcon icon={faStar} />
    </AddandRemoveFavContainer>
  );
};

export default RemoveFromFavButton;
