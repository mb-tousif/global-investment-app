import Image from "next/image";
import Link from "next/link";
import React from "react";

const routes = [
  {
    id: 1,
    name: "User Profile",
    link: "/dashboard/user",
  },
  {
    id: 2,
    name: "Deposits",
    link: "/dashboard/deposits",
  },
  {
    id: 3,
    name: "Withdrawals",
    link: "/dashboard/withdraws",
  },
  {
    id: 4,
    name: "Wallets",
    link: "/dashboard/wallet",
  },
];

export default function ProfileCard() {
  return (
    <div className="container mx-auto my-20">
      <div className="bg-white relative shadow rounded-lg w-5/6 md:w-5/6  lg:w-4/6 xl:w-3/6 mx-auto">
        <div className="flex justify-center">
          <Image
            height={200}
            width={200}
            src="https://vojislavd.com/ta-template-demo/assets/img/profile.jpg"
            alt=""
            className="rounded-full mx-auto absolute -top-20 w-32 h-32 shadow-md border-4 border-[#00a950] transition duration-200 transform hover:scale-110"
          />
        </div>
        <div className="mt-16">
          <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-2">
            <div className="w-full flex flex-col 2xl:w-1/3">
              <div className="flex-1 bg-white rounded-lg p-8">
                <h4 className="text-xl text-gray-900 font-bold">
                  Personal Info
                </h4>
                <ul className="mt-2 text-gray-700">
                  <li className="flex border-y py-2">
                    <span className="font-bold w-24">Name:</span>
                    <span className="text-gray-700">Amanda S. Ross</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-center my-5 px-6">
            {routes.map((route) => (
              <Link
                key={route.id}
                href={route.link}
                className="text-gray-500 hover:text-gray-900 hover:bg-gray-100 rounded transition duration-150 ease-in font-medium text-sm text-center w-full py-3"
              >
                {route.name}
              </Link>
            ))}
          </div>
          <div className="w-full">
            <h3 className="font-medium text-gray-900 text-left px-6">
              Recent activity
            </h3>
            <div className="mt-5 w-full flex flex-col items-center overflow-hidden text-sm">
              <a
                href="#"
                className="border-t border-gray-100 text-gray-600 py-4 pl-6 pr-3 w-full block hover:bg-gray-100 transition duration-150"
              >
                <Image
                  height={200}
                  width={200}
                  src="https://avatars0.githubusercontent.com/u/35900628?v=4"
                  alt=""
                  className="rounded-full w-8 h-6 shadow-md inline-block mr-2"
                />
                Updated his status
                <span className="text-gray-500 text-xs">24 min ago</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
