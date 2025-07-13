"use client";

import Image from "next/image";
import { CoverParticles } from "../components/coverParticles";

const AvatarServices = () => {
  return (
    <div className="fixed inset-0 z-0 flex items-end justify-start pointer-events-none">
      {/* Fondo con partículas */}
      <CoverParticles />
      <div className="relative w-[300px] -ml-4">
        <Image
          src="/services.png"
          alt="Avatar"
          width={300}
          height={300}
          className="w-full h-auto"
        />
      </div>
    </div>
  );
};

export default AvatarServices;