import { api } from "@/redux/api";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "/users",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }),
    }),
    getUserById: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
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
} = userApi;