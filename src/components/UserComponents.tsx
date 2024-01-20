// "use client"
import Loader from '@/app/loader';
import { useGetAllUsersQuery } from '@/redux/app/auth/authApiEndPoints';
import Image from 'next/image'
import Link from 'next/link'

export default function UserComponents() {
  const { isError, isLoading, data} = useGetAllUsersQuery({page:2});  
  if (isLoading) {
    return <Loader/>;
  }
  if (isError) {
    return <div>{isError}</div>;
  }
  console.log(data);
  
  return (
    <div className="bg-white rounded-lg md:m-4 shadow-xl p-8">
      <h1 className="text-xl text-center text-gray-900 font-bold">
        Our All Member and Stakers {data?.data?.length}
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 mt-8">
        {data?.data?.data?.map((user: any) => (
          <Link
            href={`/dashboard/user/${user.id}`}
            key={user.id}
            className="flex flex-col items-center justify-center text-indigo-900"
            title="View Profile"
          >
            <Image
              alt="User"
              src={user.img}
              className="w-20 rounded-full shadow-lg"
              width={500}
              height={500}
            />
            <p className="text-center font-bold text-sm mt-1">{user.name.firstName}</p>
            <p className="text-xs text-green-800 text-center">{user.role}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
