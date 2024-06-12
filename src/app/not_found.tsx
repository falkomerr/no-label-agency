import Navbar from '@/containers/Navbar'
import React from 'react'

const NotFount = () => {
    return (
        <div className="w-full h-[803px] bg-[url(/img/interface/bg-main.png)] bg-contain bg-right bg-no-repeat px-8">
            <Navbar />
            <div className="absolute top-0 bottom-0 right-0 left-0 m-auto w-[300px] h-[200px] text-white font-extrabold text-[9rem]">
                404
            </div>
        </div>
    )
}

export default NotFount
