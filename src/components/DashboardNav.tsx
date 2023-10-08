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
import { HiHome } from "react-icons/hi";

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
      <div className="m-2 mb-2">
        <Link href="/dashboard" className="flex">
          <BiSolidDashboard className="w-6 h-8" />
          <span className="sm:flex hidden text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#1c3a13] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out hover:ml-2">
            Dashboard
          </span>
        </Link>
      </div>
      <div className="m-2">
        <Link href="/dashboard/admin" className="flex">
          <MdAdminPanelSettings className="w-6 h-8" />
          <span className="sm:flex hidden text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#1c3a13] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out hover:ml-2">
            Admin
          </span>
        </Link>
      </div>
      <div className="m-2">
        <Link href="/dashboard/user" className="flex">
          <RiAccountBoxFill className="w-6 h-8" />
          <span className="sm:flex hidden text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#1c3a13] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out hover:ml-2">
            My Profile
          </span>
        </Link>
      </div>
      <div className="m-2">
        <Link href="/dashboard/wallet" className="flex">
          <ImProfile className="w-6 h-8" />
          <span className="sm:flex hidden text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#1c3a13] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out hover:ml-2">
            My Wallet
          </span>
        </Link>
      </div>
      <div className="m-2">
        <Link href="/dashboard/deposits" className="flex">
          <MdOutlineGetApp className="w-6 h-8" />
          <span className="sm:flex hidden text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#1c3a13] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out hover:ml-2">
            Deposits
          </span>
        </Link>
      </div>
      <div className="m-2">
        <Link href="/dashboard/transfers" className="flex">
          <TbTransferOut className="w-6 h-8" />
          <span className="sm:flex hidden text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#1c3a13] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out hover:ml-2">
            Transfer
          </span>
        </Link>
      </div>
      <div className="m-2">
        <Link href="/dashboard/withdraws" className="flex">
          <GiTakeMyMoney className="w-6 h-8" />
          <span className="sm:flex hidden text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#1c3a13] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out hover:ml-2">
            Withdraw
          </span>
        </Link>
      </div>
      <div className="m-2">
        <Link href="/dashboard/stakes" className="flex">
          <AiOutlineStock className="w-6 h-8" />
          <span className="sm:flex hidden text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#1c3a13] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out hover:ml-2">
            My Stake
          </span>
        </Link>
      </div>
      <div className="m-2">
        <Link href="/dashboard/revenues" className="flex">
          <GiProfit className="w-6 h-8" />
          <span className="sm:flex hidden text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#1c3a13] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out hover:ml-2">
            Revenues
          </span>
        </Link>
      </div>
    </div>
  );
}
