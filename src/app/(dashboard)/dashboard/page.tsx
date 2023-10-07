"use client";
import Table from "@/components/Table";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

export default function Dashboard() {
  const router = useRouter();
  const {token} = useAppSelector((state) => state.auth);
  useEffect(() => {
    if (!token) {
      router.push("/");
    }
  }, [token, router]);
  return (
    <div className="overflow-scroll min-h-full">
      <h1 className="text-center">Dashboard Home</h1>
      <Table />
    </div>
  );
}
