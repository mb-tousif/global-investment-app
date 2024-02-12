"use client";
import React, { useState } from "react";
import Link from "next/link";
import { GiReceiveMoney, GiPayMoney } from "react-icons/gi";
import { AuthState } from "./AuthState";
import { navBarRoutes } from "@/constants/routeConstants";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <section className="bg-[#071948] text-gray-50 w-full">
      <div className="flex items-center justify-between h-16">
        <div className="flex flex-auto">
          <div className="mx-auto my-auto">
            <div className="flex justify-end -mr-2 items-baseline">
              {navBarRoutes?.map((route) => (
                <Link
                  key={route?.id}
                  href={route?.link}
                  className="px-3 py-2 text-gray-50 justify-end rounded-md text-base md:text-lg font-medium hover:bg-slate-700"
                >
                  {route?.name}
                </Link>
              ))}
              <AuthState />
            </div>
          </div>
          <div className="sm:hidden flex justify-evenly text-gray-50">
            <div
              className="flex justify-items-end"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <GiReceiveMoney className="w-8 h-8 mr-4" />
              ) : (
                <GiPayMoney className="w-8 h-8 mr-4" />
              )}
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          open ? "block" : "hidden"
        } absolute z-20 bg-[#071948] sm:hidden text-gray-50 opacity-90`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 translate ease-in-out duration-300">
          {navBarRoutes?.map((route) => (
            <Link
              onClick={() => setOpen(false)}
              key={route?.id}
              href={route?.link}
              className="block px-3 py-2 hover:bg-slate-700 rounded-md text-base font-medium"
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
