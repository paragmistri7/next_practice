// import React from "react";
// import { cacheLife } from "next/cache";
// import pool from "@/lib/db";

// const StaticPageUsers = async () => {
//   const result = await fetchData();

//   return (
//     <>
//       <div>Static Page Content</div>
//       <div>
//         Fetched Users:{" "}
//         {result.length
//           ? result.map((user) => <p key={user.id}>{user.name}</p>)
//           : "No users found"}{" "}
//       </div>
//       <UserList />
//     </>
//   );
// };

// const UserList = async () => {
//   const result = await fetchData();

//   return (
//     <div>
//       Fetched Users 8999999999900:{" "}
//       {result.length
//         ? result.map((user) => <p key={user.id}>{user.name}</p>)
//         : "No users found"}{" "}
//     </div>
//   );
// };

// const fetchData = async () => {
//   "use cache";
//   cacheLife("minutes");

//   const result = await pool.query("SELECT * FROM users");
//   return result.rows;
// };

// const StaticPage = () => (
//   <React.Suspense fallback={<p>Loading users...</p>}>
//     <StaticPageUsers />
//   </React.Suspense>
// );

// export default StaticPage;

import React from "react";

const Page = () => {
  return <div>nalnkl</div>;
};

export default Page;
