import React from 'react'
import { BiBold, BiUnderline } from 'react-icons/bi'
import { FaUnderline } from 'react-icons/fa6'

function About() {
  return (
    <>
      <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
        <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw]">Ochi is a strategic partner for fast-growing tech businesses that need to <strong className='underline'>raise funds, sell products, explain complex ideas</strong>, and <strong className='underline'>hire great people</strong>.</h1>
        <div className=' flex gap-5 w-full pt-12 border-t-[1.5px] border-[#8a9957] mt-20'>
          <div className='w-1/2 '>
            <h1 className='text-5xl font-semibold'>Our approach:</h1>
            <button className='flex gap-10 items-center px-9 uppercase py-3 mt-8 bg-zinc-900 rounded-full text-white text-[18px]'>Read More 
              <div className='w-2.5 h-2.5 bg-white rounded-full '></div>
            </button>
          </div>
          <div className='w-1/2 h-[75vh] rounded-3xl bg-red-400'>
          <img className='h-full w-full rounded-3xl hover:scale-y-110 hover:ease-out-2s' src="public/a man with a wo b73f5cd1-7662-497e-9f13-0593d05c7716.png " alt="" /></div>
        </div>

      </div>
    </>)
}

export default About