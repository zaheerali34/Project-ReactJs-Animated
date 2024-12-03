import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
function TextButtom() {
  useGSAP(function() {
    gsap.to('#banner img', {
      rotate: 360,
      duration: 5,
      ease: 'linear',
      repeat: -1,
    });
  })

  return (
    <div className='w-full flex items-end justify-between px-[4rem] max-[992px]:mt-[4rem] max-md:px-[2rem] max-sm:mt-[4rem]'>
        <div>
            <h3 className='text-white font-[file2] text-xl max-sm:text-sm'>BRAND DESIGN | WEBSITE DESIGN</h3>
            <h3 className='text-gray-500 text-[1.3rem] max-sm:text-sm'>BESPOKE FREELANCE</h3>
        </div>

        <div id='banner' className='w-[70px] max-sm:w-[50px]'>
            <img src='https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png' alt="" />
            <img className='mt-5' src='https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png' alt="" />
        </div>
    </div>
  )
}

export default TextButtom