"use client";

import Image from "next/image";

const CircleImage = () => {
  return (
    <div className="hidden md:block fixed bottom-0 right-0 -z-10">
      <Image
        src="/circles.png"
        width={200}
        height={200}
        alt="Circle"
        className="w-full h-full"
      />
    </div>
  );
};

export default CircleImage;