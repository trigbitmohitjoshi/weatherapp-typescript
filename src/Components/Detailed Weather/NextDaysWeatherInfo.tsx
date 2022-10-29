import React from "react";
import NextDaysWeatherInfoContainer from "../../Styles/NextDaysWeatherInfo.styles";
import { constructNextDaysWeatherObject } from "../../Utils/ConstructNextDaysWeatherObject";
import { constructNextDaysWeatherJSX } from "../../Utils/ConstructNextDaysWeatherJSX";
import { DetailedCityWeatherInfoType } from "../../Types/DetailedCityData.types";
import { nextDaysWeatherObjectType } from "../../Types/NextDaysWeather.types";
import { constructNextDaysWeatherArray } from "../../Utils/ConstructNextDaysWeatherArray";
const NextDaysWeatherInfo = ({
  nextDaysWeatherInfo,
}: {
  nextDaysWeatherInfo: DetailedCityWeatherInfoType;
}) => {
  const [constructedJSXArr, setConstructedJSXArr] =
    React.useState<Array<Array<any>>>();
  React.useEffect(() => {
    const constructedObject: nextDaysWeatherObjectType =
      constructNextDaysWeatherObject(nextDaysWeatherInfo);
    const jsxObject = constructNextDaysWeatherJSX(constructedObject);
    setConstructedJSXArr(constructNextDaysWeatherArray(jsxObject));
  }, [nextDaysWeatherInfo]);

  if (!constructedJSXArr) {
    return <p>Loading...</p>;
  }

  return (
    <NextDaysWeatherInfoContainer>
      {constructedJSXArr.map((value: any[], index: number) => (
        <div className="week-day-box" key={index}>
          <div className="week-day-name">
            <h1>{value[0]}</h1>
          </div>
          <div className="week-day-weather" key={index}>
            {value[1]}
          </div>
        </div>
      ))}
    </NextDaysWeatherInfoContainer>
  );
};
export default React.memo(NextDaysWeatherInfo);
