"use client";
import { navBarRoutes } from "@/constants/routeConstants";
import Link from "next/link";
import React, { useState } from "react";
import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";
import { AuthState } from "./AuthState";

export default function Header() {
  const [open, setOpen] = useState(false);
  
  return (
    <section className="bg-[#071948] w-full">
      <div className="flex items-center justify-between h-16">
        <div className="flex flex-auto">
          <div className="hidden mx-auto my-auto md:block">
            <div className="flex justify-end -mr-2 items-baseline">
              {navBarRoutes?.map((route) => (
                <Link
                  key={route?.id}
                  href={route?.link}
                  className="px-3 py-2 text-gray-50 justify-end rounded-md text-base md:text-lg font-medium"
                >
                  {route?.name}
                </Link>
              ))}
              <AuthState />
            </div>
          </div>
          <div
            className="sm:hidden flex text-gray-50"
            onClick={() => setOpen(!open)}
          >
            <div className="flex justify-items-end">
              {open ? (
                <GiReceiveMoney className="ml-4 w-8 h-8" />
              ) : (
                <GiPayMoney className="ml-4 w-8 h-8" />
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          open ? "block" : "hidden"
        } absolute z-20 bg-[#071948] w-full sm:hidden text-gray-50 opacity-90`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 translate ease-in-out duration-300">
          {navBarRoutes?.map((route) => (
            <Link
              key={route?.id}
              href={route?.link}
              className="block px-3 py-2 rounded-md text-base font-medium"
            >
              {route?.name}
            </Link>
          ))}
          <AuthState />
        </div>
      </div>
    </section>
  );
}
