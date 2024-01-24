"use client";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Admin() {
  const router = useRouter();
  const { token } = useAppSelector((state) => state.auth);
  useEffect(() => {
    if (!token) {
      router.push("/login");
    }
  }, [token, router]);
  return (
    <div className='text-center text-2xl'>Admin Panel</div>
  )
}
