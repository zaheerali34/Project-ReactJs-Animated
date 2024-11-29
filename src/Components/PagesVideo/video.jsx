import React from 'react'

function video() {
  return (
    <div className='w-full h-screen flex items-center justify-center relative'>
        <img className='absolute h-[70vh]' src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_1254,h_721,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/try.png" alt="" />
        <video className='w-[48%] h-[60vh] object-cover' loop muted autoPlay='true' src='../images/video.mp4'></video>
    </div>
  )
}

export default video