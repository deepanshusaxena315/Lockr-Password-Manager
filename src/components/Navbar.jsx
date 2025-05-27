import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-gray-950 text-white text-xl' >
            <div className='flex px-5 justify-around items-center h-13 py-6 mycontainer'>
                <div className="logo font-bold text-2xl "> <span className='text-blue-400'>&lt;</span>
                    Lockr<span className='text-blue-400'>&gt;</span></div>
                {/* <ul>
                    <li className='gap-25 flex text-xl'>
                        <a className='hover:font-bold' href="#">About</a>
                        <a className='hover:font-bold' href="#">Home</a>
                        <a className='hover:font-bold' href="#">Contact</a>
                    </li>
                </ul> */}
                <div>
                    <button className='flex gap-2 items-center hover:font-bold ring-white ring-1 rounded-2xl px-1'>

                        <a href="https://github.com/deepanshusaxena315" className='text-lg' target='_blank'>
                            <div className='flex gap-2 items-center'><img className='invert w-8' src="icons/github.svg" alt="github logo" /> Github Profile</div></a>
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
