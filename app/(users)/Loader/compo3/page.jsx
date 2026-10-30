import React from "react";

const Compo3 = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div className="border-2 border-red-500 p-4">
      <h1>component 3</h1>
      lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
      voluptatum. lorem ipsum dolor sit amet consectetur adipisicing elit.
      Quisquam, voluptatum.
    </div>
  );
};

export default Compo3;
