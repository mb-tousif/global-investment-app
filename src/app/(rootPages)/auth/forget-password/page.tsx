"use client"
import { useForgetPasswordMutation } from "@/redux/app/auth/authApiEndPoints";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
interface IFormDataType {
  email: string 
}
export default function ForgetPasswordPage() {
  const [ forgetPassword, {isError, isSuccess} ]= useForgetPasswordMutation();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormDataType>({
    mode: "onBlur",
  });
  const onSubmit = async (data: IFormDataType) => {
    const res = await forgetPassword(data);
    // @ts-ignore
    toast.success(res?.data?.message);
  };
  if (isSuccess) {
    router.push("/auth/verify-email");
  }
  if (isError) {
    // @ts-ignore
    toast.error(isError?.data?.message);
  }
  return (
    <section className="w-full text-gray-800 max-w-md mx-auto p-6">
      <div className="mt-7 rounded-xl bg-gray-50">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <p className="mt-2 text-sm dark:text-gray-400">
              Remember your password?
              <Link
                className="ml-2 pb-2 decoration-2 hover:underline font-medium"
                href="/auth/login"
              >
                Login here
              </Link>
            </p>
          </div>
          <div className="mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="grid gap-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold ml-1 mb-2 dark:text-white"
                  >
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm shadow-sm"
                      placeholder="Enter your email address"
                      {...register("email", {
                        required: "Please enter your email address",
                      })}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 border border-transparent font-semibold bg-gray-800 rounded-md shadow-lg text-white transition-all text-sm"
                >
                  Reset password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
