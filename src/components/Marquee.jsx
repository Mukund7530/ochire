import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
    motion

    return (
        <div data-scroll data-scroll-section data-scroll-speed=".1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
            <div className='text border-t-2 border-b-2 border-zinc-300 flex whitespace-nowrap overflow-hidden'>
                
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity,duration:12 }} className='text-[22vw] leading-none font-[Founder Grotesk] font-bold uppercase '>Never stop at anything.</motion.h1>
                <br />
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity,duration:12 }} className='text-[22vw] leading-none font-[Founder Grotesk] font-bold uppercase '>Never stop at anything.</motion.h1>
                <br />
                <motion.h1 initial={{ x: 0 }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity,duration:12}} className='text-[22vw] leading-none font-[Founder Grotesk] font-bold uppercase '>Never stop at anything.</motion.h1>
                <br />
            </div>
        </div>
    )
}

export default Marquee