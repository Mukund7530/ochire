import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'

function Eye() {
    motion
    const [rotate,setRotate] = useState(0);

    useEffect(()=>{
        window.addEventListener('mousemove',(e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2
            let deltaY = mouseY - window.innerHeight/2

            var angle = Math.atan2(deltaY, deltaX)*(180/Math.PI);
            setRotate(angle-180);
        })
    })
    return (
        <div className='eyes w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed="-.7" className=' relative w-full h-full bg-center bg-contain bg-[url("https://i.graphicmama.com/blog/wp-content/uploads/2019/12/19074559/Paper-Note-Memphis-Style-Free-HQ-Background.jpg")]'>
                <div className='flex  gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
                    <div className='w-[15vw] h-[15vw] items-center justify-center flex bg-zinc-300 rounded-full '>
                        <div className='w-2/3 h-2/3 relative bg-zinc-900 rounded-full items-center justify-center flex'>
                            <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%] w-full h-10 '>
                                <div className='w-10 h-10 bg-zinc-100 rounded-full '></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[15vw] h-[15vw] items-center justify-center flex bg-zinc-300 rounded-full '>
                    <div className='w-2/3 h-2/3 relative bg-zinc-900 rounded-full items-center justify-center flex'>
                    <div style={{transform: `translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2  -translate-x-[50%] -translate-y-[50%] w-full h-10 '>
                                <div className='w-10 h-10 bg-zinc-100 rounded-full '></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Eye