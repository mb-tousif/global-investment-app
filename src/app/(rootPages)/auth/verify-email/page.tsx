"use client";
import { useVerifyOtpMutation } from '@/redux/app/auth/authApiEndPoints';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

interface IFormInput {
  email: string;
  OTP: Number;
}

export default function VerifyUser() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<IFormInput>();
    const [ verifyOtp, {isError, isSuccess} ]= useVerifyOtpMutation();
    const router = useRouter();
    const onSubmit = async (data: IFormInput) => {
      data.OTP = Number(data.OTP);
      await verifyOtp(data);
    };
    if (isSuccess) {
      toast.success("OTP Verified Successfully");
      router.push("/auth/reset-password")
    };
    if (isError) {
      // @ts-ignore
      toast.error("Something went wrong, please try again");
    }
  return (
    <div className="w-full md:1/2 lg:w-2/3 mx-auto my-auto mt-4 mb-4">
      <div className="w-full px-8 md:px-32 lg:px-24">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-gray-400 rounded-md shadow-2xl p-5"
        >
          <h1 className="text-gray-50 font-bold text-2xl mb-1">
            Hello Our Valued User
          </h1>
          <p className="text-sm font-normal text-gray-50 mb-8">
            Please verify your OTP
          </p>
          <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#063970]"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              className="pl-2 w-full bg-transparent outline-none border-none"
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
              })}
              placeholder="Email Address"
            />
          </div>
          <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-[#063970]"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            <input
              className="pl-2 w-full bg-gray-400 focus:bg-gray-400 outline-none border-none"
              type="number"
              placeholder="Enter OTP"
              {...register("OTP", {
                required: {
                  value: true,
                  message: "OTP is required",
                },
              })}
            />
          </div>
          <div className="flex justify-between mt-4">
            <Link
              href="/auth/forget-password"
              className="text-sm ml-2 text-gray-50 font-bold hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
            >
              Forgot OTP?
            </Link>
            <Link
              href="/auth/register"
              className="text-sm ml-2 text-gray-50 font-bold hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
            >
              Don&#39;t have an account yet?
            </Link>
          </div>
          <button
            type="submit"
            className="block w-full md:w-3/5 mx-auto bg-gradient-to-b from-gray-700 to-gray-900 mt-5 py-2 rounded-2xl hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
          >
            Verify OTP
          </button>
        </form>
      </div>
    </div>
  );
}
