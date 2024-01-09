import { api } from "@/redux/api";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: "/users/all-users",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        invalidatesTags: "Users",
      }),
    }),
    getUserById: builder.query({
      query: (id) => ({
        url: `/users/user/${id}`,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        invalidatesTags: "Users",
      }),
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: "/users/create-user",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        method: "POST",
        body: data,
        invalidatesTags: "Users",
      }),
    }),
    createManagement: builder.mutation({
      query: (data) => ({
        url: "/users/create-mgt",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        method: "POST",
        body: data,
        invalidatesTags: "Users",
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `/users/update-user/${data.id}`,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        method: "PATCH",
        body: data,
        invalidatesTags: "Users",
      }),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/delete-user/${id}`,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        method: "DELETE",
        invalidatesTags: "Users",
      }),
    }),
    // Auth Endpoints
    verifyOtp: builder.mutation({
      query: (data) => ({
        url: "/auth/verify-otp",
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
    forgetPassword: builder.mutation({
      query: (data) => ({
        url: `/auth/forgot-password`,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        method: "POST",
        body: data,
        invalidatesTags: "Users",
      }),
    }),
    resetPassword: builder.mutation({
      query: (data) => ({
        url: `/auth/reset-password`,
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        method: "POST",
        body: data,
        invalidatesTags: "Users",
      }),
    }),
  }),
});

export const { 
  useGetAllUsersQuery, 
  useGetUserByIdQuery, 
  useCreateUserMutation, 
  useCreateManagementMutation, 
  useUpdateUserMutation, 
  useDeleteUserMutation, 
  useVerifyOtpMutation, 
  useLoginUserMutation, 
  useForgetPasswordMutation, 
  useResetPasswordMutation
} = authApi;