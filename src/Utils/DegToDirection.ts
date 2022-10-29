export const degToDirection = (degNum: number) => {
  const dirArr = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  const val: number = Number(degNum) / 22.5 + 0.5;
  return dirArr[Number(val.toFixed(0)) % 16];
};
