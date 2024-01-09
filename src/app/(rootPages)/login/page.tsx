"use client"
import Loader from "@/app/loader";
import { useLoginUserMutation } from "@/redux/app/auth/authApiEndPoints";
import { setToken } from "@/redux/app/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

interface IFormInput {
  email: string;
  password: string;
}

export default function Login() {
  const [loginUser, { isError, isSuccess, isLoading, data }] =
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
      const res = await loginUser({ ...data }).unwrap();
      console.log(res, "res");
      dispatch(setToken(res?.data?.accessToken));
      router.push("/dashboard");
    } catch (error: any) {
      console.error(error.message);
    }
  };
  if (isLoading) {
    return <Loader/>;
  }
  if ( isSuccess) {
    return toast.success(`${data?.message}`);
  }

  return (
    <div className="pt-8">
      <div className="py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-[#03A776] to-[#0D1519] shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl text-[#03A776] font-semibold">
                  Login to your account
                </h1>
              </div>
              <div className="divide-y divide-gray-200">
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7"
                >
                  <div className="relative">
                    <input
                      type="email"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email is required",
                        },
                      })}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-green-600"
                      placeholder="Email address"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Email Address
                    </label>
                    {errors.email?.type === "required" && (
                      <span className="text-red-600 text-xs">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password is required!",
                        }
                      })}
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:border-green-600"
                      placeholder="Password"
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                    {errors.password?.type === "required" && (
                      <span className="text-red-600 text-xs">
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                  {/* <div className="relative text-center">
                    <Link
                      className="inline-block text-sm md:text-base hover:text-[#03A776] text-[#0D1519]"
                      href={"#/"}
                    >
                      Forgot Password?
                    </Link>
                  </div> */}
                  <div className="relative flex justify-center">
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-[#0D1519] to-[#03A776] text-white md:w-32 rounded-md px-2 py-1"
                    >
                      Submit
                    </button>
                  </div>
                  <div className="relative text-center">
                    <p className="text-sm text-gray-500">
                      Do not have an account?
                      <Link
                        href="/register"
                        className="font-medium ml-2 text-[#03A776] hover:text-[#0D1519] focus:outline-none focus:underline transition ease-in-out duration-150"
                      >
                        Sign Up
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
