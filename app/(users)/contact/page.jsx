import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div>
      <h1>we are in Contact page</h1>

      <div className="bg-red-500 border-5 border-black m-5 relative">
        <Image
          src="/bird.jpg"
          alt="Bird"
          width={300}
          height={500}
          // fill
          quality={100}
          placeholder="blur"
          blurDataURL="/bird.jpg"
        />
      </div>
    </div>
  );
};

export default Contact;
