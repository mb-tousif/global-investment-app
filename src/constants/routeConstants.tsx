import { BiSolidDashboard } from "react-icons/bi";
import { MdAdminPanelSettings, MdOutlineGetApp } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { RiAccountBoxFill } from "react-icons/ri";
import { GiTakeMyMoney, GiProfit } from "react-icons/gi";
import { AiOutlineStock } from "react-icons/ai";
import { TbTransferOut } from "react-icons/tb";
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
    link: "/dashboard",
  },
  {
    id: 5,
    name: "Sign up",
    link: "/register",
  },
];

export const dashboardRoutes = [
  {
    id: 1,
    name: "Dashboard",
    icon: <BiSolidDashboard className="w-6 h-8" />,
    link: "/dashboard",
  },
  {
    id: 2,
    name: "Admin",
    icon: <MdAdminPanelSettings className="w-6 h-8" />,
    link: "/dashboard/admin",
  },
  {
    id: 3,
    name: "My Profile",
    icon: <RiAccountBoxFill className="w-6 h-8" />,
    link: "/dashboard/user",
  },
  {
    id: 4,
    name: "My Wallet",
    icon: <ImProfile className="w-6 h-8" />,
    link: "/dashboard/wallet",
  },
  {
    id: 5,
    name: "Deposits",
    icon: <MdOutlineGetApp className="w-6 h-8" />,
    link: "/dashboard/deposits",
  },
  {
    id: 6,
    name: "Transfers",
    icon: <TbTransferOut className="w-6 h-8" />,
    link: "/dashboard/transfers",
  },
  {
    id: 7,
    name: "Withdraws",
    icon: <GiTakeMyMoney className="w-6 h-8" />,
    link: "/dashboard/withdraws",
  },
  {
    id: 8,
    name: "Stakes",
    icon: <AiOutlineStock className="w-6 h-8" />,
    link: "/dashboard/stakes",
  },
  {
    id: 9,
    name: "Revenues",
    icon: <GiProfit className="w-6 h-8" />,
    link: "/dashboard/revenues",
  },
];
