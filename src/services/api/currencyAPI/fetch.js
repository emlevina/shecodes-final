import { getUrl, getRequestOptions } from "./config";

export const currencyAPIFetch = async (setRates, setIsDataLoaded) => {
  fetch(getUrl(), getRequestOptions())
    .then(response => response.json())
    .then(result => {
      if (!result.success) {
        const error = result.error.info;
        return Promise.reject(error);
      }
      //console.log(result.rates)
      setRates(result)
      setIsDataLoaded(true)
    })
    .catch(error => console.log('error', error));
}