import Link from "next/link";
import React, { Suspense } from "react";

const UserName = (props) => {
  return (
    <Suspense fallback={<h2>Loading username...</h2>}>
      <UserDetails params={props.params} />
    </Suspense>
  );
};

async function UserDetails({ params }) {
  const userdata = await params;

  return (
    <div className="flex flex-col items-center font-bold font-mono text-3xl mt-10">
      <h1 className="bg-green-500 p-2 m-2 rounded text-white shadow-lg shadow-red-400">
        UserName: {userdata.username}
      </h1>

      <ol>
        <li className="text-2xl border-2 border-black rounded-lg p-2 bg-yellow-400 text-center mt-1 hover:bg-red-500 hover:text-white">
          <Link href={`/user/${userdata.username}/01`}>01</Link>
        </li>
        <li className="text-2xl border-2 border-black rounded-lg p-2 bg-yellow-400 text-center mt-1 hover:bg-red-500">
          <Link href={`/user/${userdata.username}/02`}>02</Link>
        </li>
        <li className="text-2xl border-2 border-black rounded-lg p-2 bg-yellow-400 text-center mt-1 hover:bg-red-500 hover:text-white">
          <Link href={`/user/${userdata.username}/03`}>03</Link>
        </li>
        <li className="text-2xl border-2 border-black rounded-lg p-2 bg-yellow-400 text-center mt-1 hover:bg-red-500 hover:text-white">
          <Link href={`/user/${userdata.username}/04`}>04</Link>
        </li>
        <li className="text-2xl border-2 border-black rounded-lg p-2 bg-yellow-400 text-center mt-1 hover:bg-red-500 hover:text-white">
          <Link href={`/user/${userdata.username}/05`}>05</Link>
        </li>
        <li className="text-2xl border-2 border-black rounded-lg p-2 bg-yellow-400 text-center mt-1 hover:bg-red-500 hover:text-white">
          <Link href={`/user/${userdata.username}/06`}>06</Link>
        </li>

        <li className="text-3xl border-2 border-black rounded-lg p-2 bg-red-400 text-center mt-1 hover:bg-green-500 hover:text-white">
          <Link href={`/user/${userdata.username}/`}>Back</Link>
        </li>
      </ol>
    </div>
  );
}

export default UserName;
