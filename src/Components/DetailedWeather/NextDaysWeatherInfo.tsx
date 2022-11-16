import React from "react";
import NextDaysWeatherInfoContainer from "./NextDaysWeatherInfoContainer";
import { dateTimeToWeekDay } from "../../Utils/dateTimeToWeekDay";
import { dateTimeToTime } from "../../Utils/dateTimeToTime";
import WeatherTimeSlot from "./WeatherTimeSlot";
import {
  DataObject,
  DataObjectType,
  DetailedCityDataList,
} from "../../Types/DetailedCityData";

const NextDaysWeatherInfo = ({
  nextDaysWeatherInfoList,
}: {
  nextDaysWeatherInfoList: DetailedCityDataList;
}) => {
  const [dataObject, setDataObject] = React.useState<DataObjectType>({});

  React.useEffect(() => {
    let data: DataObjectType = {};
    nextDaysWeatherInfoList.forEach(({ dt_txt, main, weather, wind }) => {
      let day = dateTimeToWeekDay(dt_txt);
      let time = dateTimeToTime(dt_txt);
      data[day] = data[day]
        ? [...data[day], { main, weather, wind, time }]
        : [{ main, weather, wind, time }];
    });
    setDataObject(data);
  }, [nextDaysWeatherInfoList]);

  if (!dataObject) return null;

  return (
    <NextDaysWeatherInfoContainer>
      {Object.keys(dataObject).map((day) => (
        <React.Fragment key={day}>
          <div className="week-day-box">
            <div className="week-day-name">
              <h1>{day}</h1>
            </div>
            <div className="week-day-weather">
              {dataObject[day].map(
                (dayWeatherTimeSlot: DataObject, index: number) => (
                  <WeatherTimeSlot
                    key={index}
                    dayWeatherTimeSlot={dayWeatherTimeSlot}
                  />
                )
              )}
            </div>
          </div>
        </React.Fragment>
      ))}
    </NextDaysWeatherInfoContainer>
  );
};
export default NextDaysWeatherInfo;
