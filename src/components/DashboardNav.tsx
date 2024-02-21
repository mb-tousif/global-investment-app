"use client";
import React, { use, useEffect, useState } from "react";
import Link from "next/link";
import { HiHome } from "react-icons/hi";
import dashboardRoutes from "@/constants/routeConstants";
import { ENUM_USER_ROLES, TUserRole } from "@/constants/common";
import { jwtDecode } from "jwt-decode";
import { getToken } from "@/redux/app/auth/authSlice";
import { useRouter } from "next/navigation";

export default function DashboardNav() {
  const [role, setRole] = useState<TUserRole>();
  const token = getToken();
  
  useEffect(() => {
    if (token) {
      const userCredentials: {
        id: string;
        role: TUserRole;
        iat: number;
        exp: number;
      } = jwtDecode(token as string);
      setRole(userCredentials?.role);
    }
  },[ token]);
  const routes = dashboardRoutes(role as TUserRole);

  return (
    <div className="sm:min-w-[38vh] text-left top-0 pb-6 left-0 min-h-screen bg-gradient-to-b from-[#D0DAE3] to-[#ADCDED]">
      <div className="m-2 mb-6 mt-14">
        <Link href="/">
          <HiHome className="mx-auto my-auto w-8 h-8" />
        </Link>
      </div>
      {routes?.map((route) => (
        <div className="m-2 mb-2" key={route?.id}>
          <Link href={route?.link} className="flex">
            {route?.icon}
            <span className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#1c3a13] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out hover:ml-2">
              {route?.name}
            </span>
          </Link>
        </div>
      ))}
    </div>
  );
}
