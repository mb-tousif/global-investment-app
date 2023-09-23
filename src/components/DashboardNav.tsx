"use client";
import React from "react";
import Link from "next/link";
import { MdAdminPanelSettings, MdOutlineGetApp } from "react-icons/md";
import { BiSolidDashboard } from "react-icons/bi";
import { ImProfile } from "react-icons/im";
import { RiAccountBoxFill } from "react-icons/ri";
import { GiTakeMyMoney, GiProfit } from "react-icons/gi";
import { AiOutlineStock } from "react-icons/ai";
import { TbTransferOut } from "react-icons/tb";

export default function DashboardNav() {
  const [toggle, setToggle] = React.useState(false);
  const navigate = (path:string) => {
    window.location.pathname = path;
  }
  const handleToggle = () => {
    setToggle(!toggle);
  }
  return (
    <div className="sm:min-w-[38vh] text-left top-0 pb-6 left-0 min-h-4/5 bg-gradient-to-b from-[#D0DAE3] to-[#ADCDED]">
      <div className="m-2 mb-2 mt-20 flex">
        <BiSolidDashboard className="w-6 h-8" />
        <Link
          href="/dashboard"
          className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#1c3a13] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
        >
          <span>Dashboard</span>
        </Link>
      </div>
      <div className="m-2 flex">
        <MdAdminPanelSettings className="w-6 h-8" />
        <Link
          href="/dashboard/admin"
          className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#1c3a13] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
        >
          <span>Admin</span>
        </Link>
      </div>
      <div className="m-2 flex">
        <RiAccountBoxFill className="w-6 h-8" />
        <Link
          href="/dashboard/user"
          className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#1c3a13] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
        >
          <span>My Profile</span>
        </Link>
      </div>
      <div className="m-2 flex">
        <ImProfile className="w-6 h-8" />
        <Link
          href="/dashboard/account"
          className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#1c3a13] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
        >
          <span>My Account</span>
        </Link>
      </div>
      <div className="m-2 flex">
        <MdOutlineGetApp className="w-6 h-8" />
        <Link
          href="/dashboard/deposits"
          className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#1c3a13] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
        >
          <span>Deposits</span>
        </Link>
      </div>
      <div className="m-2 flex">
        <TbTransferOut className="w-6 h-8" />
        <Link
          href="/dashboard/transfers"
          className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#1c3a13] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
        >
          <span>Transfer</span>
        </Link>
      </div>
      <div className="m-2 flex">
        <GiTakeMyMoney className="w-6 h-8" />
        <Link
          href="/dashboard/withdraws"
          className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#1c3a13] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
        >
          <span>Withdraw</span>
        </Link>
      </div>
      <div className="m-2 flex">
        <AiOutlineStock className="w-6 h-8" />
        <Link
          href="/dashboard/stakes"
          className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#1c3a13] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
        >
          <span>My Stake</span>
        </Link>
      </div>
      <div className="m-2 flex">
        <GiProfit className="w-6 h-8" />
        <Link
          href="/dashboard/revenues"
          className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#1c3a13] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
        >
          <span>Revenues</span>
        </Link>
      </div>
    </div>
  );
}
