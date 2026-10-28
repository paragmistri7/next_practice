"use client";
import React, { useEffect } from "react";
import { useSearchParams } from "next/navigation";

const ClientCompo = () => {
  const [data, setData] = React.useState(null);
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    if (!id) return;

    let fetchData = async () => {
      let res = await fetch(`https://dummyjson.com/users/${id}`);

      let jsonData = await res.json();
      setData(jsonData);
    };
    fetchData();
  }, [id]);

  return (
    <div>
      <h1 className="text-center text-2xl font-bold">Client Component</h1>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default ClientCompo;
