import React from "react";

const ServerCompo = () => {
  return (
    <div>
      <h1>Server Component</h1>
      <button
        className="bg-red-500 text-white p-2 rounded-lg"
        onClick={() => alert("helloo")}
      >
        Click me
      </button>
    </div>
  );
};

export default ServerCompo;
