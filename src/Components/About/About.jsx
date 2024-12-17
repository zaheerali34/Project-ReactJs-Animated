import React from "react";

function About() {
  return (
    <div className="w-full h-screen py-8 px-4">
      <div className="w-full h-full bg-black relative rounded-[35px] max-md:rounded-[20px] shadow-xl px-10  overflow-hidden">
        <video className="w-full h-full object-cover max-sm:object-contain" loop autoPlay muted src="https://video.wixstatic.com/video/11062b_92619c730c4b4b0bb27ea39c4276a52b/1080p/mp4/file.mp4"></video>
        <h1 className="text-white text-[40vw] absolute top-0 left-[5rem] uppercase font-[file5] max-sm:top-[22rem] max-sm:text-[50vw] max-sm:left-[2rem]">about</h1>
      </div>
    </div>
  );
}

export default About;
