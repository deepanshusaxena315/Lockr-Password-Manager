import { CopyrightIcon, InstagramIcon, Linkedin02Icon } from 'hugeicons-react'
import React from 'react'
// import { FiCopyright } from 'react-icons/fi'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <div className='text-white/70 bg-transparent flex flex-col md:flex-row justify-around items-center w-full py-2 px-4'>

        <div>
            &copy;{" "}
            {year}
        </div>

      <div className='flex gap-4 mb-2 md:mb-0'>
        <a href="https://instagram.com/deepanxhu.saxena" target="_blank" rel="noopener noreferrer" className=' flex gap-2'>
          Connect :  <InstagramIcon />
        </a>
        <a href="http://www.linkedin.com/in/deepanshu-saxena-60bbb1286" target="_blank" rel="noopener noreferrer">
          <Linkedin02Icon className='hover:text-shadow-white' />
        </a>
      </div>

        
      <div className='flex items-center gap-1 text-sm'>
        <span> Created with</span>
        <img width={19} src="/icons/heart.png" alt="heart" />
        <span>by Deepanshu</span>
      </div>
    </div>
  )
}

export default Footer
