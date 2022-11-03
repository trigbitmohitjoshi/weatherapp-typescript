import React from "react";
import AddandRemoveFavContainer from "../Styles/AddandRemoveFavButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { CityContext } from "../App";
import { useAddFavCityToLS } from "../CustomHooks/useAddFavCityToLS";
import { motion } from "framer-motion";
import { AddandRemoveFavVariant } from "../Animations/AddandRemoveFavButton";
const AddToFavButton = () => {
  const { state:{cityName} } = React.useContext(CityContext)!;
  const addFavToLS = useAddFavCityToLS();
  return (
    <AddandRemoveFavContainer
      type="addToFavBtn"
      onClick={() => addFavToLS(cityName)}
      as={motion.div}
      variants={AddandRemoveFavVariant}
      whileHover="hover"
    >
      <p>Add To Fav</p>
      <FontAwesomeIcon icon={faStar} />
    </AddandRemoveFavContainer>
  );
};

export default AddToFavButton;
