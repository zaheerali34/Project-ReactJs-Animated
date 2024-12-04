import React from 'react'

function video() {
  return (
    <div className='w-full h-screen flex items-center justify-center relative max-sm:h-[60vh]'>
        <img className='z-10 absolute h-[70vh] max-md:h-[40vh] max-md:w-full' src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_1254,h_721,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/try.png" alt="" />
        <video className='z-20 w-[48%] h-[60vh] object-cover max-[992px]:w-[77%] max-md:w-[73%] max-md:h-[30vh] max-sm:w-[74%] max-sm:h-[35vh]' loop muted autoPlay='true' src='../images/video.mp4'></video>

        <div className='h-[0.1rem] w-[60%] bg-black absolute z-0 top-[45%] max-md:w-[85%] max-sm:top-[30%]'></div>
        <div className='h-[0.1rem] w-[80%] bg-black absolute z-0 top-[60%] max-md:w-[90%] max-sm:top-[50%]'></div>
        <div className='h-[0.1rem] w-full bg-black absolute z-0 top-[75%] max-sm:top-[70%]'></div>
    </div>
  )
}

export default video