import ProfileCard from '@/components/ProfileCard';
import React from 'react'

export default function User() {
  return (
    <>
      <h1 className="text-center mx-auto text-3xl">My Profile</h1>
      <div className="flex justify-center">
        <ProfileCard />
      </div>
    </>
  );
}
