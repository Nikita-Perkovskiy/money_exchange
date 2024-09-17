import { API_KEY, BASE_URL } from "../constants/constants";

export const getExchange = (base_Currency, symbols) => {
  return fetch(
    `${BASE_URL}/exchangerates_data/latest?base=${base_Currency}&symbols=${symbols}`,
    {
      headers: {
        apikey: API_KEY,
      },
    }
  )
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.error("Error fetching exchange rates:", error);
    });
};
