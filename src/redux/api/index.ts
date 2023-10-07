import getToken from "@/utils/getToken";
import { RootState } from "../store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Users", "Deposits", "Withdrawals", "Stakes", "Investors", "Wallets"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://investor-trading.vercel.app/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const accessToken = getToken(state);
      if (accessToken) {
        headers.set("Authorization", `${accessToken}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
