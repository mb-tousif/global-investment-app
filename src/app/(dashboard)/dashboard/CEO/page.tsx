"use client";
import Statistics from "@/components/Statistics";
import UserComponents from "@/components/UserComponents";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import toast from "react-hot-toast";

export default function Dashboard() {
  const router = useRouter();
  const {token} = useAppSelector((state) => state.auth);
  useEffect(() => {
    if (!token) {
      router.push("/auth/login");
      toast.error("You are not logged in");
    }
  }, [token, router]);
  return (
    <div className="overflow-scroll min-h-full">
      <h1 className="text-center">Dashboard Home</h1>
      <Statistics />
      <UserComponents />
    </div>
  );
}
