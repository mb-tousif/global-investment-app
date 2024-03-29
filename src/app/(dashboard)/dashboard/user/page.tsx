"use client";
import ProfileCard from '@/components/ProfileCard';
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import toast from 'react-hot-toast';

export default function User() {
  const router = useRouter();
  const { token } = useAppSelector((state) => state.auth);
  useEffect(() => {
    if (!token) {
      router.push("/auth/login");
      toast.error("You are not logged in");
    }
  }, [token, router]);
  return (
    <>
      <h1 className="text-center mx-auto text-3xl">My Profile</h1>
      <div className="flex justify-center align-middle">
        <ProfileCard />
      </div>
    </>
  );
}
