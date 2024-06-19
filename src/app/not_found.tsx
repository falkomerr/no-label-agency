import Navbar from '@/containers/Navbar'
import React from 'react'

const NotFount = () => {
    return (
        <div className="w-full h-[803px] bg-[url(/img/interface/bg-main.mobile.png)] md:bg-[url(/img/interface/bg-main.png)] bg-cover md:bg-auto bg-center md:bg-right bg-no-repeat px-4 md:px-12 xl:px-20">
            <div className="absolute top-0 bottom-0 right-0 left-0 m-auto w-[300px] h-[200px] text-gray-400 font-extrabold text-[9rem]">
                404
            </div>
        </div>
    )
}

export default NotFount
