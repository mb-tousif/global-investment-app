import getAccessToken from "@/utils/getToken";
import { RootState } from "../store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  tagTypes: [
    "Users",
    "Savings",
    "Loans",
    "Current",
    "Transactions",
    "Banks",
  ],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://ibbl-backend.vercel.app/api/v1",
    // baseUrl: "https://localhost:5000/api/v1",
    prepareHeaders: (headers, { getState }) => {
      const state = getState() as RootState;
      const accessToken = getAccessToken(state);
      if (accessToken) {
        headers.set("Authorization", `${accessToken}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
});
