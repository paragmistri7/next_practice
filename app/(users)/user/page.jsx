import Link from "next/link";
import React from "react";

const UserHome = () => {
  return (
    <div className="flex flex-col items-center ">
      <h1 className="text-2xl font-bold mb-4">User Home</h1>
      <ul className="gap-5 flex items-center">
        <Link className="bg-red-500 text-white p-2 rounded" href="/user/vijay">
          Vijay
        </Link>
        <Link className="bg-blue-500 text-white p-2 rounded" href="/user/pintu">
          Pintu
        </Link>
      </ul>
    </div>
  );
};

export default UserHome;
