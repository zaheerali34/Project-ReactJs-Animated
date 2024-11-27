import React from "react";
import "remixicon/fonts/remixicon.css";

function Header() {
  return (
    <>
      <div className="w-full flex items-center justify-end fixed py-[3rem] px-[5rem]">
        <button className="bg-black px-8 py-3 rounded-[2rem] border-[5px] text-white border-white hover:bg-slate-500 transition duration-[0.4s]">
          Hire me
        </button>
        <i className="ri-draggable text-white text-[1.5rem] ml-2"></i>
      </div>

      <div className="py-[1.7rem] px-[3rem]">
        <img src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png" alt="" className="w-[5rem]" />
      </div>
    </>
  );
}

export default Header;
