import { motion } from 'framer-motion';
import React from 'react'
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
    motion
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-.2" className='w-full h-screen bg-zinc-900 pt-1 '>
            <div className='textstructure mt-28 px-14 '>
                <div className="masker">
                    <h1 className=' uppercase text-[8vw] leading-[6.5vw] tracking-tighter font-medium font-["Founders Grotesk"]'>WE never </h1>
                </div>
                    
                <div className="masker flex">
                <motion.div initial={{width:0}} animate={{width:"6vw"}} transition={{ease: [0.68, -0.6, 0.32, 1.6], duration:1 }} className='bg-red-600  w-[6vw] h-[6vw] mt-[11px] rounded-[100%]'></motion.div>
                    <h1 className=' uppercase text-[8vw] leading-[7vw] tracking-tighter font-medium font-["Founders Grotesk"]'>stop at </h1>
                </div>
                <div className="masker">
                    <h1 className=' uppercase text-[8vw] leading-[6.5vw] tracking-tighter font-medium font-["Founders Grotesk"]'>Anything </h1>
                </div>
            </div>
            <div className='border-t-[1px] border-zinc-600 mt-24 flex justify-between items-center py-5 px-14'>
                {["For public and private companies", " From first pitch to IPO"].map((item, index) => <p className='text-md font-light tracking-tight leading-none'>{item}</p>)}
                <div className='start flex gap-2'>
                    <div className='px-3 py-1 border-[1.5px] border-zinc-500 font-light text-md uppercase rounded-full'>Start the project</div>
                    <div className='w-9 h-9 rounded-full border-[1.5px] border-zinc-500 flex items-center justify-center  ' >
                        <span className='rotate-[45deg]'><FaArrowUpLong/></span>
                        </div>
                </div>

            </div>

        </div>
    )
}

export default LandingPage