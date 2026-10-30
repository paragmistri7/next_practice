import React, { Suspense } from "react";
import Compo1 from "./compo1/page";
import Compo2 from "./compo2/page";
import Compo3 from "./compo3/page";
import Compo4 from "./compo4/page";

const Loader = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">loader component</h1>
      <div className="flex flex-col gap-4">
        <Compo1 />
        <Compo2 />
        <Suspense
          fallback={
            <h1 className="text-2xl font-bold flex justify-center items-center broader-2 border-red-500 p-4">
              loading ......
            </h1>
          }
        >
          <Compo3 />
        </Suspense>
        <Compo4 />
      </div>
    </div>
  );
};

export default Loader;
