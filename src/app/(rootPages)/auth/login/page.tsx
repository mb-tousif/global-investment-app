"use client"
import Loader from "@/app/loader";
import { setToken } from "@/redux/app/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { RiBankFill } from "react-icons/ri";
import { useLoginUserMutation } from "@/redux/app/auth/authApiEndPoints";
import { jwtDecode } from "jwt-decode";
import { TUserRole } from "@/constants/common";

interface IFormInput {
  email: string;
  password: string;
}

export default function Login() {
  const [loginUser, { isSuccess, isLoading, data }] =
    useLoginUserMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    mode: "onBlur",
  });
  const onSubmit = async (
    data:IFormInput
  )=> {
    try {
      const res = await loginUser(data).unwrap();
      dispatch(setToken(res?.data?.accessToken)); 
      const userCredentials: {
        id: string;
        role: TUserRole;
        iat: number;
        exp: number;
      } = jwtDecode(res?.data?.accessToken);
      router.push(`/dashboard/${userCredentials?.role}`);
      toast.success(`${res?.message}`);
    } catch (error: any) {
      toast.error(error?.data?.message);
      if (error?.data?.message === "User not verified") {
        router.push("/auth/verify-email");
      }
    }
  };
  if (isLoading) {
    return <Loader/>;
  }
  if ( isSuccess) {
    return toast.success(`${data?.message}`);
  }

  return (
    <div className="min-h-[500px] overflow-hidden flex items-center md:mt-20 justify-center md:mb-8">
      <div className="bg-gradient-to-b from-[#063970] to-blue-200 lg:w-5/12 md:6/12 w-10/12 shadow-3xl rounded-3xl">
        <div className="bg-[#063970] absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full p-4 md:p-8">
          <RiBankFill className="w-12 h-12 mx-auto text-gray-50" />
        </div>
        <form className="p-12 md:p-24" onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-6 md:mb-8">
            <div className="flex items-center text-lg">
              <svg className="absolute ml-3" width="24" viewBox="0 0 24 24">
                <path
                  d="M20.822 18.096c-3.439-.794-6.64-1.49-5.09-4.418 4.72-8.912 1.251-13.678-3.732-13.678-5.082 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-3.073.71-3.188 2.236-3.178 4.904l.004 1h23.99l.004-.969c.012-2.688-.092-4.222-3.176-4.935z"
                  fill="#063970"
                />
              </svg>
              <input
                type="email"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required!",
                  },
                })}
                className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
                placeholder="Username"
              />
            </div>
            {errors.email?.type === "required" && (
              <span className="text-red-900 pt-1 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="mb-6 md:mb-8">
            <div className="flex items-center text-gray-800 text-lg">
              <svg className="absolute ml-3" viewBox="0 0 24 24" width="24">
                <path
                  d="m18.75 9h-.75v-3c0-3.309-2.691-6-6-6s-6 2.691-6 6v3h-.75c-1.24 0-2.25 1.009-2.25 2.25v10.5c0 1.241 1.01 2.25 2.25 2.25h13.5c1.24 0 2.25-1.009 2.25-2.25v-10.5c0-1.241-1.01-2.25-2.25-2.25zm-10.75-3c0-2.206 1.794-4 4-4s4 1.794 4 4v3h-8zm5 10.722v2.278c0 .552-.447 1-1 1s-1-.448-1-1v-2.278c-.595-.347-1-.985-1-1.722 0-1.103.897-2 2-2s2 .897 2 2c0 .737-.405 1.375-1 1.722z"
                  fill="#063970"
                />
              </svg>
              <input
                type="password"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is required!",
                  },
                })}
                className="bg-gray-200 pl-12 py-2 md:py-4 focus:outline-none w-full"
                placeholder="Password"
              />
            </div>
            {errors.password?.type === "required" && (
              <span className="text-red-900 pt-1 text-sm">
                {errors.password.message}
              </span>
            )}
          </div>
          <button
            type="submit"
            className="bg-gradient-to-b from-gray-700 to-gray-900 font-medium p-2 md:p-4 text-white uppercase w-full"
          >
            Login
          </button>
          <p className="mt-4 text-base text-gray-50 text-center">
            Forgot password?
            <Link
              className="text-gray-50 ml-2 pb-2 decoration-2 hover:underline font-medium"
              href="/auth/forget-password"
            >
              Reset here
            </Link>
          </p>
          <p className="text-base text-center mt-2 text-gray-50">
            Do not have an account?
            <Link
              href="/auth/register"
              className="font-medium ml-2 focus:outline-none focus:underline transition ease-in-out duration-150"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}