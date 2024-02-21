"use strict";
import { MdAdminPanelSettings, MdOutlineGetApp } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { RiAccountBoxFill } from "react-icons/ri";
import { GiTakeMyMoney, GiProfit } from "react-icons/gi";
import { TbTransferOut } from "react-icons/tb";
import { IoMdLogOut } from "react-icons/io";
import { ENUM_USER_ROLES, TUserRole } from "./common";
import { jwtDecode } from "jwt-decode";
import { getToken } from "@/redux/app/auth/authSlice";

let role: TUserRole = ENUM_USER_ROLES.USER;
const token  = getToken();
if (token) {
  const userCredentials: {
    id: string;
    role: TUserRole;
    iat: number;
    exp: number;
  } = jwtDecode(token as string);
 role = userCredentials?.role;
}
export const navBarRoutes = [
   {
     id: 1,
     name: "Home",
     link: "/",
   },
   {
     id: 2,
     name: "About",
     link: "/about",
   },
   {
     id: 3,
     name: "Blogs",
     link: "/blogs",
   },
   {
     id: 4,
     name: "Dashboard",
    link: `/dashboard/${role}`,
   },
   {
     id: 5,
     name: "Sign up",
     link: "/auth/register",
   },
 ];

const dashboardRoutes = (roleDashboard:TUserRole) => { 

const commonRoutes = [
  {
    id: 6,
    name: "My Profile",
    icon: <RiAccountBoxFill className="w-6 h-8" />,
    link: `/dashboard/${roleDashboard}/profile`,
  },
  {
    id: 7,
    name: "Logout",
    icon: <IoMdLogOut className="w-6 h-8" />,
    link: "/",
  },
];

const dashboardAccountHoldersRoutes = [
  {
    id: 8,
    name: "My Wallet",
    icon: <ImProfile className="w-6 h-8" />,
    link: `/dashboard/${roleDashboard}/wallet`,
  },
  {
    id: 9,
    name: "Deposits",
    icon: <MdOutlineGetApp className="w-6 h-8" />,
    link: `/dashboard/${roleDashboard}/deposits`,
  },
  {
    id: 10,
    name: "Transfers",
    icon: <TbTransferOut className="w-6 h-8" />,
    link: `/dashboard/${roleDashboard}/transfers`,
  },
  {
    id: 11,
    name: "Withdraws",
    icon: <GiTakeMyMoney className="w-6 h-8" />,
    link: `/dashboard/${roleDashboard}/withdraws`,
  },
];

const dashboardCashiersRoutes = [
  {
    id: 12,
    name: "Revenues",
    icon: <GiProfit className="w-6 h-8" />,
    link: `/dashboard/${roleDashboard}/revenues`,
  },
];

const dashboardManagersRoutes = [
  {
    id: 13,
    name: "Revenues",
    icon: <GiProfit className="w-6 h-8" />,
    link: `/dashboard/${roleDashboard}/revenues`,
  },
];

  const dashboardCEORoutes = [
    {
      id: 14,
      name: "Revenues",
      icon: <GiProfit className="w-6 h-8" />,
      link: `/dashboard/${roleDashboard}/revenues`,
    },
  ];


const dashboardAdminRoutes = [
  {
    id: 15,
    name: "Admin Panel",
    icon: <MdAdminPanelSettings className="w-6 h-8" />,
    link: `/dashboard/${roleDashboard}/admins`,
  },
];

if (roleDashboard === ENUM_USER_ROLES.ACCOUNT_HOLDER) {
  return [...commonRoutes, ...dashboardAccountHoldersRoutes];
} else if (roleDashboard === ENUM_USER_ROLES.CASHIER) {
  return [...commonRoutes, ...dashboardCashiersRoutes];
} else if (roleDashboard === ENUM_USER_ROLES.MANAGER) {
  return [...commonRoutes, ...dashboardManagersRoutes];
} else if (roleDashboard === ENUM_USER_ROLES.CEO) {
  return [...commonRoutes, ...dashboardCEORoutes];
} else if (roleDashboard === ENUM_USER_ROLES.ADMIN) {
  return [...commonRoutes, ...dashboardAdminRoutes];
} else {
  return [...commonRoutes];
}
}
export default dashboardRoutes;
