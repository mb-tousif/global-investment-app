"use client";
import { useAppSelector } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import toast from 'react-hot-toast';

export default function AccountHolder() {
  const router = useRouter();
  const { token } = useAppSelector((state) => state.auth);
  useEffect(() => {
    if (!token) {
      router.push("/auth/login");
      toast.error("You are not logged in");
    }
  }, [token, router]);
  return (
    <div>AccountHolder</div>
  )
}
