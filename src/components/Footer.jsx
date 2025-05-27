import React from 'react'

const Footer = () => {
    return (
        <div className='text-white bg-gray-900 flex justify-around fixed bottom-0 w-full py-1'>
            <div className="logo font-bold text-2xl "> <span className='text-blue-400'>&lt;</span>
                    Lockr<span className='text-blue-400'>&gt;</span>
                </div>
            <div className='flex '>
                Created with <img width={29} src="icons/heart.png" alt="" /> by&nbsp; <span className='hover:font-bold'> <a href="http://www.linkedin.com/in/deepanshu-saxena-60bbb1286"> Deepanshu </a></span>
            </div>
        </div>
    )
}

export default Footer
