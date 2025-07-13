"use client"

import Image from "next/image";

const Avatar = () => {
  return (
    <div className="hidden md:block fixed bottom-0 left-0 -z-10">
      <Image
        src="/avatar-1.png"
        width={350}
        height={350}
        alt="Avatar"
        className="w-full h-full"
      />
    </div>
  );
};

export default Avatar;