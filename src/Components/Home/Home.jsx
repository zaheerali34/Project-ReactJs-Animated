import React from 'react'
import Header from '../Header/Header'
import TextButtom from './TextButtom'

function Home() {
  return (
    <div className='w-full h-screen p-4'>
        <div className='w-full h-full bg-black rounded-[30px] shadow-md shadow-slate-500 bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_1861,h_933,fp_0.69_0.64,q_85,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)] bg-center bg-cover'>
            <Header/>
            
            <div className='w-[50%] uppercase leading-[80px] mt-[10rem] pl-[3.5rem]'>
              <h1 className='text-[4rem] font-[file2] text-white '>I AM <span className='text-black'>dark mode</span>™</h1>
              <h1 className='font-[file4] text-[7rem] text-white'>Designer</h1>
              <h1 className='font-[file2] text-[4rem] text-white'>to hire</h1>
            </div>

            <TextButtom/>
        </div>
    </div>
  )
}

export default Home