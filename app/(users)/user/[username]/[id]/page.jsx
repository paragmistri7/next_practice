import Link from "next/link";
import React, { Suspense } from "react";

const UserId = async (props) => {
  return (
    <Suspense fallback={<h2>Loading user details...</h2>}>
      <UserDetails params={props.params} />
    </Suspense>
  );
};
async function UserDetails({ params }) {
  const userdata = await params;
  return (
    <div className="flex flex-col items-center font-bold font-mono text-3xl mt-10">
      <div className="text-xl font-bold ">User Details: {userdata.id}</div>
      <ol className="flex gap-10 mt-5">
        <li className="text-2xl border-2 border-black rounded-lg p-2 bg-yellow-400 ">
          <Link href={`/user/${userdata.username}/`}>Back</Link>
        </li>
        <li className="text-2xl border-2 border-black rounded-lg p-2 bg-yellow-400 ">
          <Link href={`/user`}>Home</Link>
        </li>
      </ol>
    </div>
  );
}

export default UserId;
