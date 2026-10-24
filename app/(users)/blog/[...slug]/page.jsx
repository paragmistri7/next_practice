import React, { Suspense } from "react";

const CatchAllSegment = (props) => {
  return (
    <Suspense fallback={<div>Loading blog...</div>}>
      <CatchAllSegmentContent params={props.params} />
    </Suspense>
  );
};

async function CatchAllSegmentContent({ params }) {
  // http://localhost:3000/blog/plo/jin/PLSDGPLK
  const { slug } = await params;
  console.log(slug);

  return <div></div>;
}

export default CatchAllSegment;
