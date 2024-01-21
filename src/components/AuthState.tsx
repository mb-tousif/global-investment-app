"use client";
import { removeToken } from "@/redux/app/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const AuthState = () => {
  const { token } = useAppSelector((state) => state.auth);
  const [hasToken, setHasToken] = useState(false);
  const dispatch = useAppDispatch();
  const handleAuth = () => {
    dispatch(removeToken());
    setHasToken(false);
  };
  useEffect(() => {
    if (token !== null && token !== undefined) {
      setHasToken(true);
    }
  }, [token, hasToken, dispatch]);
  return (
    <>
      {hasToken ? (
        <Link
          onClick={() => handleAuth()}
          href="/"
          className="px-3 underline-none py-2 justify-end rounded-md text-base md:text-lg font-medium"
        >
          Log out
        </Link>
      ) : (
        <Link
          href="/auth/login"
          className="px-3 underline-none py-2 justify-end rounded-md text-base md:text-lg font-medium"
        >
          Log in
        </Link>
      )}
    </>
  );
};
