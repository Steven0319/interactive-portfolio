"use client";

import AvatarServices from "../../components/avatar-services";
import CircleImage from "../../components/circle-image";
import SliderServices from "../../components/slider-services";
import TransitionPage from "../../components/transition-page";

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <CircleImage />

      <div className="relative max-w-5xl mx-auto md:px-20 min-h-screen flex items-center">

        <AvatarServices />

        <div className="grid items-center justify-center w-full gap-6 md:grid-cols-2 z-10">
          <div className="max-w-[450px] mt-20 md:mt-0 text-white">
            <h1 className="text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-5">
              My <span className="font-bold text-secondary">services.</span>
            </h1>
            <p className="mb-3 text-xl text-gray-300">
              I offer specialized frontend web development services focused on
              crafting attractive, functional, and responsive websites and
              applications. Using the latest technologies like HTML, CSS, and
              JavaScript, I design intuitive user interfaces that reflect your
              brand identity and enhance your online presence.
            </p>
            <button className="px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/65">
              Contact Me
            </button>
          </div>

          {/* Slider Section */}
          <div>
            <SliderServices />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;