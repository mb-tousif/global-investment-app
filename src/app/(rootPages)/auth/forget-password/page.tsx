import Link from "next/link";
import React from "react";

export default function ForgetPassword() {
  return (
    <section className="w-full text-gray-50 max-w-md mx-auto p-6">
      <div className="mt-7 rounded-xl bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold dark:text-white">
              Forgot password?
            </h1>
            <p className="mt-2 text-sm dark:text-gray-400">
              Remember your password?
              <Link
                className="text-gray-50 ml-2 pb-2 decoration-2 hover:underline font-medium"
                href="/auth/login"
              >
                Login here
              </Link>
            </p>
          </div>

          <div className="mt-5">
            <form>
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
                      name="email"
                      className="py-3 px-4 block w-full border-2 border-gray-200 rounded-md text-sm shadow-sm"
                      required
                      aria-describedby="email-error"
                    />
                  </div>
                  <p
                    className="hidden text-xs text-red-600 mt-2"
                    id="email-error"
                  >
                    Please include a valid email address so we can get back to
                    you
                  </p>
                </div>
                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 border border-transparent font-semibold bg-gradient-to-r from-[#03A776] to-[#0D1519] rounded-md shadow-lg text-white transition-all text-sm"
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
