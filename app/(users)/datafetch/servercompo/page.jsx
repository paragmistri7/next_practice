import React from "react";

const ServerCompo = async (props) => {
  // /datafetch/servercompo?id=3
  let params = await props.searchParams;

  let res = await fetch(`https://dummyjson.com/users/${params.id}`);
  let data = await res.json();

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
