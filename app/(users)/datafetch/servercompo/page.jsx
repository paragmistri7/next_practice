import { notFound } from "next/navigation";
import React from "react";

const ServerCompo = async (props) => {
  // /datafetch/servercompo?id=3
  let params = await props.searchParams;

  if (!params.id) {
    notFound();
  }

  let res = await fetch(`https://dummyjson.com/users/${params.id}`);

  let data = await res.json();

  if (data.message) {
    return (
      <h1 className="flex flex-col item-center">
        (`User not found : - ${data.message}`)
      </h1>
    );
  }

  console.log(data);
  return (
    <ul className="flex flex-col items-center  h-screen">
      <li>
        Name: {data.firstName} {data.lastName}
      </li>
      <li>Gender: {data.gender}</li>
      <li>birthDate: {data.birthDate}</li>
      <li>weight: {data.weight}</li>
    </ul>
  );
};

export default ServerCompo;
