import React from "react";

function PagesWhat() {
  return (
    <div className="w-full h-screen py-8 px-4">
      <div className="w-full h-full bg-black rounded-[35px] shadow-xl overflow-hidden relative">
        <video
          loop
          autoPlay
          muted
          src="../images/video 3.mp4"
          className="w-full h-full object-cover"
        ></video>
        <div className="absolute top-10 left-2/4 -translate-x-2/4 flex items-center flex-col gap-10">
          <div className="uppercase text-center">
            <h1 className="text-[13vw] text-white leading-[10rem] font-[file5]">
              personal
            </h1>
            <span className="text-zinc-300 font-semibold">
              Intuition, Imagination, Discipline
            </span>
          </div>

          <div className="uppercase text-center">
            <h1 className="text-[13vw] text-white leading-[10rem] font-[file5]">
              professlonal
            </h1>
            <span className="text-zinc-300 font-semibold">
              Time Management, Multitasking, Creativity{" "}
            </span>
          </div>

          <div className="uppercase text-center">
            <h1 className="text-[13vw] text-white leading-[10rem] font-[file5]">
              additional
            </h1>
            <span className="text-zinc-300 font-semibold">
              3D, Animation, AI Tools
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PagesWhat;
