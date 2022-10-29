export const constructNextDaysWeatherArray = (obj: object) => {
  let arr: Array<Array<any>> = [];
  let keys = Object.keys(obj);
  let values = Object.values(obj);

  for (let i: number = 0; i < keys.length; i++) {
    arr[i] = [keys[i], values[i]];
  }
  return arr;
};
