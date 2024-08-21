import React from 'react'

function Cards() {
    return (
        <div className='w-full h-screen bg-zinc-900 flex gap-5 items-center px-10'>
            <div className='cardcontainer h-[70vh] w-1/2 '>
                <div className=' card relative w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center '>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" />
                    <button className='left-10 bottom-10 absolute border-2 border-yellow-400 rounded-full px-5 py-1 text-yellow-400'>&copy;2019-2022</button>
                </div>
            </div>
            <div className='cardcontainer h-[70vh] w-1/2 flex gap-5 relative'>
                <div className='card h-full w-1/2 rounded-xl  bg-[#212121] flex items-center justify-center'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" />
                    <button className='left-3 bottom-10 absolute border-2 border-zinc-200 rounded-full px-3 py-1 text-white-200 uppercase'>rating 5.5 on clutch</button>
                </div>
                <div className='card h-full w-1/2 rounded-xl  bg-[#212121] flex items-center justify-center relative text-[16px]'>
                    <img className='w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" />
                    <button className='left-3 bottom-10 absolute border-2 border-zinc-200 rounded-full px-2 py-1 text-white-200 uppercase'>buiseness bootcamp allumini</button>
                </div>
            </div>


        </div>
    )
}

export default Cards