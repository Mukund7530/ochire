import { motion, useAnimation } from "framer-motion";
import { Power4 } from "gsap/all";
import React, { useState } from "react";

function Featured() {

    motion
    const cards = [useAnimation(), useAnimation()];
    const handleHover = (index) => {
        cards[index].start({ y: "0" });
    };
    const handleHoverEnd = (index) => {
        cards[index].start({ y: "100%" });
    };

    return (
        <div data-scroll data-scroll-section className='relative w-full py-11'>
            <div className='w-full px-20 border-b-[1px] pb-10 border-zinc-600'>
                <h1 className='text-6xl font-["Bebas_Neue"] tracking-tight'>Featured Projects</h1>
            </div>
            <div className='px-20'>
                <div className="cards w-full gap-5 flex mt-10">
                    <motion.div
                        onHoverStart={() => handleHover(0)}
                        onHoverEnd={() => handleHoverEnd(0)}
                        className="cardcontainer relative  w-1/2 h-[80vh] ">
                        <h1 className='absolute flex overflow-hidden left-full -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] text-8xl leading-none tracking-tight  font-["Bebas_Neue"]'>
                            {"FYDE".split('').map((item, index) => (
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[0]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }}
                                    className='inline-block'
                                >
                                    {item}
                                </motion.span>))}
                        </h1>
                        <div className=' card w-full h-full  rounded-xl  overflow-hidden  '>
                            <img className='h-full w-full hover:scale-90' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-1326x1101.png" alt="" />
                        </div>
                    </motion.div>
                    <motion.div
                        onHoverStart={() => handleHover(1)}
                        onHoverEnd={() => handleHoverEnd(1)}
                        className="cardcontainer  relative w-1/2 h-[80vh] ">
                        <h1 className='absolute flex overflow-hidden right-full translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68] z-[9] text-8xl leading-none tracking-tight  font-["Bebas_Neue"]'>
                            {"VISE".split('').map((item, index) =>
                                <motion.span
                                    initial={{ y: "100%" }}
                                    animate={cards[1]}
                                    transition={{ ease: [0.22, 1, 0.36, 1], delay: index * .05 }}
                                    className='inline-block'
                                >
                                    {item}
                                </motion.span>)}
                        </h1>
                        <div className=' card w-full h-full  rounded-xl overflow-hidden'>
                            <img className='h-full w-full hover:scale-90' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-1326x1101.jpg" alt="" />
                        </div>
                    </motion.div>
                </div>
            </div>

        </div>
    )
}

export default Featured