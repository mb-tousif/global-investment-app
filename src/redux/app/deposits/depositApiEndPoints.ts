import { api } from "@/redux/api";

const depositApi = api.injectEndpoints({
  endpoints: (builder) => ({
    createDeposit: builder.mutation({
      query: (data) => ({
        url: "deposits/createDeposit",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        method: "POST",
        body: data,
        providesTags: ["Deposits"],
      }),
    }),
    getAllDeposits: builder.query({
      query: () => ({
        url: "deposits",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        invalidatesTags: "Deposits",
      }),
    }),
    getDepositById: builder.query({
      query: (id) => ({
        url: `deposits/${id}`,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        invalidatesTags: "Deposits",
      }),
    }),
  }),
});

export const {
  useCreateDepositMutation,
  useGetAllDepositsQuery,
  useGetDepositByIdQuery,
} = depositApi;