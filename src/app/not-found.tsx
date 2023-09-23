import Link from "next/link";

const NotFound = () => {

  return (
    <div className="text-center p-7 h-screen">
      <div className="my-auto sm:mt-20">
        <h1 className="text-2xl mb-4 text-red-600">
          Oops! We’ve got a problem.
        </h1>
        <div className="flex justify-center text-gray-50">
          <Link
            href="/"
            className="w-32 mb-2 flex items-center p-1 justify-center bg-green-500 rounded-md shadow-md focus:outline-none"
          >
            <i className="bx bxs-home w-5"></i>
            <span>Go home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default NotFound