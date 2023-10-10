"use client"
import Image from "next/image";
import leftImage from "@/assets/signup.svg";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
interface IFormData {
  name: string;
  email: string;
  password: string;
  DOB: string;
  role: string;
  contactNo: string;
  img?: string;
  address: string;
};

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();
  const onSubmit: SubmitHandler<IFormData> = async (data, e:any) => {
    e.preventDefault();
    // upload image to cloudinary
  };


  return (
    <div className="pt-8 pb-6 mx-auto">
      <div className="flex justify-center px-6">
        <div className="w-full xl:w-3/4 lg:w-11/12 flex">
          <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg">
            <Image src={leftImage} className="min-h-full" alt="leftImage" />
          </div>
          <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none">
            <h3 className="pt-4 text-2xl text-[#03A776] font-bold text-center">
              Create an Account!
            </h3>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
            >
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="name"
                >
                  Full Name
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  {...register("name", { required: true })}
                  type="text"
                  placeholder="Enter Your Name"
                />
                {errors.name && (
                  <p className="text-rose-600 text-center text-sm">
                    Full name is required.
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  {...register("email", {
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                    required: {
                      value: true,
                      message: "Email is required",
                    },
                  })}
                  type="email"
                  placeholder="Email"
                />
                {errors.email?.type === "pattern" && (
                  <p className="text-rose-600 text-center text-sm">
                    {errors.email.message}
                  </p>
                )}
                {errors.email?.type === "required" && (
                  <p className="text-rose-600 text-center text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="mb-4 md:flex md:justify-between">
                <div className="mb-4 md:mr-2 md:mb-0">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    {...register("password", {
                      required: {
                        value: true,
                        message: "Password is required",
                      },
                      pattern: {
                        value:
                          /^(?=.*[a-z]{3,})(?=.*[A-Z])(?=.*\d)(?=.*[^\w\d])(.{6,})$/,
                        message:
                          "Password must be with one uppercase, number and special character",
                      },
                      minLength: {
                        value: 6,
                        message: "Password min-length six characters",
                      },
                    })}
                    type="password"
                    placeholder="******************"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-rose-600 text-center text-sm">
                      {errors.password.message}
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="text-red-600 text-xs">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-rose-600 text-center text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <div className="md:ml-2">
                  <label
                    className="block mb-2 text-sm font-bold text-gray-700"
                    htmlFor="phoneNumber"
                  >
                    Enter Phone Number
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    {...register("contactNo", { required: true })}
                    type="cell"
                    placeholder="88012 345 6789"
                  />
                  {errors.contactNo && (
                    <p className="text-rose-600 text-center text-sm">
                      Phone Number is required.
                    </p>
                  )}
                </div>
              </div>
              {/* upload image later
              <div className="mb-4">
                <label className="flex flex-col items-center px-4 py-6 bg-white text-[#03A776] rounded-lg shadow border border-blue cursor-pointer hover:bg-blue">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                  </svg>
                  <span className="mt-2 text-base">Upload Your Photo</span>
                  <input
                    type="file"
                    className="hidden"
                    {...register("img", { required: true })}
                  />
                </label>
                {errors.img && (
                  <p className="text-rose-600 text-center text-sm">
                    Upload your profile picture.
                  </p>
                )}
              </div> */}
              <div className="mb-4">
                <label
                  className="block mb-2 text-sm font-bold text-gray-700"
                  htmlFor="address"
                >
                  Address
                </label>
                <textarea
                  className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  rows={6}
                  placeholder="Enter Your Address"
                  {...register("address", { required: true })}
                />
                {errors.address && (
                  <p className="text-rose-600 text-center text-sm">
                    Address is required.
                  </p>
                )}
              </div>
              <div className="mb-6 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white bg-gradient-to-r from-[#03A776] to-[#0D1519] rounded-full focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Register Account
                </button>
              </div>
              <hr className="mb-6 border-t" />
              <div className="text-center">
                <span className="text-sm md:text-base text-[#0D1519] align-baseline">
                  Already have an account ?
                  <Link href="/login" className="ml-2 hover:text-[#03A776]">
                    Login
                  </Link>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};