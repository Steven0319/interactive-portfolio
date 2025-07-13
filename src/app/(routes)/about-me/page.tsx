"use client";

import Avatar from "../../components/avatar";
import CounterServices from "../../components/counter-services";
import TimeLine from "../../components/time-line";
import TransitionPage from "../../components/transition-page";
import { CoverParticles } from "../../components/coverParticles";

const AboutMePage = () => {
  return (
    <>
      <CoverParticles />
      <div className="fixed inset-0 -z-10 bg-gradient-to-tr from-purple-900/60 via-indigo-900/50 to-purple-800/60" />

      <TransitionPage />

      <div className="fixed bottom-0 left-0 z-10 hidden md:block">
        <div className="w-[380px] md:w-[420px] opacity-90">
          <Avatar />
        </div>
      </div>

      <div className="relative z-20 px-4 pt-40 pb-20 max-w-6xl mx-auto min-h-screen">
        <h1 className="text-2xl text-center leading-tight md:text-left md:text-5xl md:mt-10 text-white">
          My entire{" "}
          <span className="font-bold text-secondary">professional journey</span>
        </h1>

        <CounterServices />
        <TimeLine />
      </div>
    </>
  );
};

export default AboutMePage;
