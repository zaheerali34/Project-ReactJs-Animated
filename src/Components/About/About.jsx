import React from "react";

function About() {
  return (
    <div className="w-full h-screen py-8 px-4">
      <div className="w-full h-full bg-black relative rounded-[35px] max-md:rounded-[20px] shadow-xl px-10  overflow-hidden">
        <video className="w-full h-full object-cover max-sm:object-contain" loop autoPlay muted src="../images/video 2.mp4"></video>
        <h1 className="text-white text-[40vw] absolute top-0 left-[5rem] uppercase font-[file5] max-sm:top-[22rem] max-sm:text-[50vw] max-sm:left-[2rem]">about</h1>
      </div>
    </div>
  );
}

export default About;
