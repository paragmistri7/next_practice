"use client";
import React from "react";

const ClientCompo = () => {
  return (
    <div>
      <h1>Client Component</h1>

      <button
        className="bg-red-500 text-white p-2 rounded-lg"
        onClick={() => alert("Hello from Client Component!")}
      >
        Click me
      </button>
    </div>
  );
};

export default ClientCompo;
