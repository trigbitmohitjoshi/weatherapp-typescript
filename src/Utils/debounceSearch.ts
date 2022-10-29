function debounceSearch(callback: (cityName: string) => void, delay: number) {
  let timeoutId: NodeJS.Timeout;
  return function (cityName: string) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback(cityName);
    }, delay);
  };
}
export { debounceSearch };
