import React from "react";
import SearchFieldContainer from "./SearchFieldContainer";
import { CityContext } from "../App";
import { debounceSearch } from "../Utils/debounceSearch";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CityActions } from "../Utils/constants";
import { useGetCityWeatherData } from "../CustomHooks/useGetCityWeatherData";
const SearchField = () => {
  const {
    state: { cityName },
    dispatch,
  } = React.useContext(CityContext)!;

  const getData = useGetCityWeatherData();

  const { current: decoratedWeatherData } = React.useRef(
    debounceSearch(getData, 3000)
  );

  React.useEffect(() => {
    decoratedWeatherData(cityName);
  }, [decoratedWeatherData, cityName]);

  const handleFieldChange = (e: { target: { value: string } }) => {
    dispatch({
      type: CityActions.SET_CITY_NAME,
      payload: e.target.value,
    });
  };
  const searchButton = (
    <FontAwesomeIcon icon={faSearch} onClick={() => getData(cityName)} />
  );
  return (
    <SearchFieldContainer>
      <input
        type={"text"}
        value={cityName}
        onChange={handleFieldChange}
        placeholder="Enter a City"
        autoFocus
      />
      {searchButton}
    </SearchFieldContainer>
  );
};

export default SearchField;
