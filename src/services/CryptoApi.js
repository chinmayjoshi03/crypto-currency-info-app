import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders = {
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
  'X-RapidAPI-Key': '54fc6c1427mshfa27c3cbffef30fp182c99jsn871ac47ff2d4',  // Replace with your actual RapidAPI key
};

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest('/coins'),  // Use /coins if you want a list of cryptocurrencies
    }),
    getCryptoStats: builder.query({
      query: () => createRequest('/stats'),  // Use /stats to get global stats
    }),
  }),
});

export const { useGetCryptosQuery, useGetCryptoStatsQuery } = cryptoApi;
