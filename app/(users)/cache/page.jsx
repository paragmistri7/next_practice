import React from "react";
import { cacheLife } from "next/cache";

const StaticPageUsers = async () => {
  const result = await fetchData();

  console.log("<<<<< static page >>>>>", result);

  return (
    <>
      <div>Static Page Content</div>
      <div>
        Fetched Users:{" "}
        {result.length
          ? result.map((user) => <p key={user.id}>{user.name}</p>)
          : "No users found"}{" "}
      </div>
      <UserList />
    </>
  );
};

const UserList = async () => {
  const result = await fetchData();
  console.log("<<<<< static page user list >>>>>", result);

  return (
    <div>
      Fetched Users 8999999999900:{" "}
      {result.length
        ? result.map((user) => <p key={user.id}>{user.name}</p>)
        : "No users found"}{" "}
    </div>
  );
};

const fetchData = async () => {
  "use cache";
  cacheLife("minutes");

  const response = await fetch(`${process.env.APP_URL}/api/users`);
  if (!response.ok) {
    throw new Error(`Failed to fetch users: ${response.status}`);
  }

  const result = await response.json();
  if (!result.success) {
    throw new Error(result.message || "Failed to fetch users");
  }

  return result.data;
};

const StaticPage = () => (
  <React.Suspense fallback={<p>Loading users...</p>}>
    <StaticPageUsers />
  </React.Suspense>
);

export default StaticPage;
