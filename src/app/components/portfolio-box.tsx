"use client";

import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    image: string;
    urlGithub: string;
    urlDemo: string;
  };
}

const PortfolioBox = ({ data }: PortfolioBoxProps) => {
  const { id, title, image, urlDemo, urlGithub } = data;

  return (
    <div
      key={id}
      className="flex flex-col w-[240px] h-[280px] p-4 rounded-xl
                 bg-gradient-to-b from-white/5 via-white/10 to-white/5
                 border border-teal-50
                 shadow-lg shadow-black/20
                 hover:bg-gradient-to-b hover:from-white/10 hover:via-white/20 hover:to-white/10
                 transition-colors duration-300"
    >
      <h3 className="mb-2 text-lg font-semibold text-white truncate">{title}</h3>
      <div className="relative flex-grow w-full overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={title}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-2xl"
          priority
        />
      </div>

      <div className="flex gap-4 mt-4 justify-center">
        <Link
          href={urlGithub}
          target="_blank"
          className="px-3 py-1 text-sm text-white transition duration-150 rounded-lg bg-slate-500 hover:bg-slate-500/80 text-center flex-1"
        >
          Github
        </Link>

        <Link
          href={urlDemo}
          target="_blank"
          className="px-3 py-1 text-sm text-white transition duration-150 rounded-lg bg-secondary hover:bg-secondary/80 text-center flex-1"
        >
          Live demo
        </Link>
      </div>
    </div>
  );
};

export default PortfolioBox;