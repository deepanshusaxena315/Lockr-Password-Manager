import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-transparent text-white text-xl' >
            <div className='flex px-5 justify-around items-center h-13 py-6 mycontainer'>
                <h1 className='text-2xl pb-2 text-center font-bold text-green-600 '>
                    <div className="logo font-bold"> <span className='text-white'>&lt;</span>
                        Lockr<span className='text-white'>&gt;</span></div>
                </h1>
                {/* <ul>
                    <li className='gap-25 flex text-xl'>
                        <a className='hover:font-bold' href="#">About</a>
                        <a className='hover:font-bold' href="#">Home</a>
                        <a className='hover:font-bold' href="#">Contact</a>
                    </li>
                </ul> */}
                <div>
                    <button className='flex gap-2 items-center hover:font-semibold ring-white ring-1 rounded-2xl px-1'>

                        <a href="https://github.com/deepanshusaxena315/Lockr-Password-Manager" className='text-lg' target='_blank'>
                            <div className='flex gap-2 items-center'><img className='invert w-8' src="/icons/github.svg" alt="github logo" />Github</div></a>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
