import axios from 'axios';

const BASE_URL = 'https://api.coingecko.com/api/v3';

const api = axios.create({
  baseURL: BASE_URL,
});

export const fetchCryptocurrencyPrices = async (ids) => {
  try {
    const response = await api.get('/simple/price', {
      params: {
        ids: ids.join(','),
        vs_currencies: 'usd', 
        include_24hr_change: true,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};


