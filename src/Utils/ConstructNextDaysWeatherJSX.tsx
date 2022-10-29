import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { degToDirection } from "./DegToDirection";
import { kelvinToCelsius } from "./KelvinToCelsius";
import { motion } from "framer-motion";
import {
  nextDaysWeatherJSXObjectType,
  nextDaysWeatherObjectType,
} from "../Types/NextDaysWeather.types";
export const constructNextDaysWeatherJSX = (
  constructedObject: nextDaysWeatherObjectType
) => {
  const jsxObj: nextDaysWeatherJSXObjectType = {};
  for (let day in constructedObject) {
    constructedObject[day].forEach((value: any) => {
      const jsx = (
        <motion.div
          whileHover={{
            backgroundColor: "hsl(0, 0%, 75%)",
          }}
          className="weather"
        >
          <h3>{value.weather.description}</h3>
          <h4>At {value.time}</h4>
          <p>
            Temp{" "}
            <span>{kelvinToCelsius(value.main.temp).toFixed(1)} &#8451;</span>
          </p>
          <p>
            Feels Like{" "}
            <span>
              {kelvinToCelsius(value.main.feels_like).toFixed(1)}
              &#8451;
            </span>
          </p>
          <p>
            Max Temp{" "}
            <span>
              {kelvinToCelsius(value.main.temp_max).toFixed(1)} &#8451;
            </span>
          </p>
          <p>
            Min Temp{" "}
            <span>
              {kelvinToCelsius(value.main.temp_min).toFixed(1)} &#8451;
            </span>
          </p>
          <p>
            Humidity <span>{value.main.humidity}%</span>
          </p>
          <div>
            <FontAwesomeIcon icon={faLocationArrow} />
            <p>
              {value.wind.speed}m/s {degToDirection(value.wind.deg)}
            </p>
          </div>
        </motion.div>
      );

      jsxObj[day] = jsxObj[day] ? [...jsxObj[day], jsx] : [jsx];
    });
  }
  return jsxObj;
};
