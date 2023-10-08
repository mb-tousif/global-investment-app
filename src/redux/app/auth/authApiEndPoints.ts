import { api } from "@/redux/api";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "/users",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        invalidatesTags: "Users",
      }),
    }),
    getUserById: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        invalidatesTags: "Users",
      }),
    }),
    registerUser: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        method: "POST",
        body: data,
        providesTags: ["Users"],
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        method: "POST",
        body: data,
        providesTags: ["Users"],
      }),
    }),
    updateUser: builder.mutation({
      query: (id) => ({
        url: `/users/update/${id}`,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        method: "PATCH",
        body: id,
        invalidatesTags: "Users",
      }),
    }),
  }),
});

export const { 
  useGetAllUsersQuery, 
  useGetUserByIdQuery, 
  useLoginUserMutation, 
  useRegisterUserMutation, 
  useUpdateUserMutation
} = authApi;