"use client";
import React from "react";
import Link from "next/link";
import { HiHome } from "react-icons/hi";
import { dashboardRoutes } from "@/constants/routeConstants";

export default function DashboardNav() {
  const [toggle, setToggle] = React.useState(false);
  const navigate = (path:string) => {
    window.location.pathname = path;
  }
  const handleToggle = () => {
    setToggle(!toggle);
  }
  return (
    <div className="sm:min-w-[38vh] text-left top-0 pb-6 left-0 min-h-screen bg-gradient-to-b from-[#D0DAE3] to-[#ADCDED]">
      <div className="m-2 mb-6 mt-14">
        <Link href="/">
          <HiHome className="mx-auto my-auto w-8 h-8" />
        </Link>
      </div>
      {dashboardRoutes.map((route)=>(
        <div className="m-2 mb-2" key={route.id}>
        <Link href={route.link} className="flex">
          {route.icon}
          <span className="sm:flex hidden text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#1c3a13] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out hover:ml-2">
            {route.name}
          </span>
        </Link>
      </div>
  ))}
    </div>
  );
}
