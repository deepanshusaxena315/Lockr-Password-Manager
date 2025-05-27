import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { Copy01Icon } from "hugeicons-react";

import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast,Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Manager = () => {
    
    const ref = useRef();
    const passwordref = useRef();

    const [form, setform] = useState({ site: '', username: '', password: '' })
    const [passwordArray, setpasswordArray] = useState([])

    useEffect(() => {
        let passwords = localStorage.getItem("passwords");
        if (passwords) {
            setpasswordArray(JSON.parse(passwords))
        }
    }, [])


    const showPassword = () => {
        passwordref.current.type = 'text';
        if (ref.current.src.includes('icons/eyecross.png')) {
            ref.current.src = 'icons/eye.png'
            passwordref.current.type = 'password'
        }
        else {
            ref.current.src = 'icons/eyecross.png'
            passwordref.current.type = 'text'
        }
    }

    const savePassword = () => {
        if(form.site.length >=3 && form.username.length >=3 && form.password.length >=3){

        
        setpasswordArray([...passwordArray, {...form,id:uuidv4()}])
        localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form,id:uuidv4()}]))
        setform({ site: '', username: '', password: '' });
        toast.success('Password saved!', {
            position: "top-left",
            autoClose: 2997,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Flip,
            });
        }
        else{
            toast.error("Invalid inputs!",{
             position: "top-right",
            autoClose: 2997,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Flip,
            })
        }
    }

    const deletePassword = (id) => {
        let c = confirm("Do you want to delete this password?");
        if(c){
        setpasswordArray(passwordArray.filter(item=>item.id!==id))
        localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!=id)))
        toast.success('Password deleted!', {
            position: "top-left",
            autoClose: 2997,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Flip,
            });
        }
    }
    const editPassword = (id) => {
        setform(passwordArray.filter(i=>i.id===id)[0])
        setpasswordArray(passwordArray.filter(item=>item.id!==id))
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const copyText = (text) => {
        toast.success('Copied to clipboard!', {
            position: "top-left",
            autoClose: 2997,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Flip,
            });
      navigator.clipboard.writeText(text)
    }
    
    const handleKeyDown = (e)=>{
        if(e.key === 'Enter'){
            savePassword()
        }
    }



    return (
        <>
            <ToastContainer
                position="top-left"
                autoClose={2997}
                limit={3}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="dark"
                transition= {Flip}
                />

            <div className=' px-2 py-18 mycontainer '>
                <h1 className='text-5xl text-center font-bold text-white '>
                    <div className="logo font-bold"> <span className='text-blue-400'>&lt;</span>
                        Lockr<span className='text-blue-400'>&gt;</span></div>
                </h1>
                <p className='text-blue-400 font-semiboldbold text-lg text-center'>Your own Password manager</p>
                <div className='text-white flex flex-col p-4 gap-8 items-center'>
                    <input onChange={handleChange} value={form.site} placeholder='Enter Website Url' className=' border-3 border-gray-500 rounded-2xl w-full p-4 py-1' type="text" name="site" id="site" />
                    <div className='flex flex-col md:flex-row w-full gap-8'>
                        <input onChange={handleChange} value={form.username} placeholder='Enter Username' className='border-3 border-gray-500 rounded-2xl w-full p-4 py-1' type="text" name="username" id="username" />
                        <div className="relative  w-full">
                            <input ref={passwordref} onKeyDown={handleKeyDown} onChange={handleChange} value={form.password} placeholder='Enter password' className='border-3 border-gray-500 rounded-2xl w-full p-4 py-1' type="password" name="password" id="password" />
                            <span onClick={showPassword} className="absolute right-2 top-2 cursor-pointer"><img ref={ref} className='invert' width={15} src="icons/eye.png" alt="" /></span>
                        </div>
                    </div>
                    <button onClick={savePassword} className='text-black font-bold flex cursor-pointer justify-center items-center w-fit rounded-full bg-cyan-300 px-8 py-2 gap-4 border-2 my-4 hover:bg-cyan-500 hover:font-bold'><lord-icon
                        src="https://cdn.lordicon.com/efxgwrkc.json"
                        trigger="hover"
                    >
                    </lord-icon> Save password</button>
                </div>

                <div className="passwords text-white ">
                    <h2 className='font-bold text-3xl pt-14 pb-7 text-center'>Your Passwords:</h2>
                    {passwordArray.length === 0 && <div className='font-bold text-center'> No passwords saved</div> }
                    {passwordArray.length !=0 && <table className="table-auto w-full overflow-hidden rounded-2xl border border-gray-400 border-collapse">
  <thead className="bg-black text-white">
    <tr>
      <th className="border border-gray-400 px-4 py-2">Site</th>
      <th className="border border-gray-400 px-4 py-2">Username</th>
      <th className="border border-gray-400 px-4 py-2">Password</th>
      <th className="border border-gray-400 px-4 py-2">Actions</th>
    </tr>
  </thead>
  <tbody className="bg-neutral-800 text-white">
     {
        passwordArray.map((item,index)=>{
        return <tr key={index} >
      <td className="border border-gray-400 px-4 py-2 text-center flex w-full gap-3 items-center justify-center">
        {<a href={item.site} target='_blank'>{item.site}</a> } <Copy01Icon className="w-6 h-6 cursor-pointer"  onClick={()=>{copyText(item.site)}}/>
      </td>
      <td className="border border-gray-400 px-4 py-2 text-center ">
        <div className='flex w-full gap-3 items-center justify-center'>{item.username} <Copy01Icon className="w-6 h-6 cursor-pointer" onClick={()=>{copyText(item.username)}} /></div>
      </td>
      <td className="border border-gray-400 px-4 py-2 text-center ">
       <div className=' flex w-full gap-3 items-center justify-center'> {item.password} <Copy01Icon className="w-6 h-6 cursor-pointer" onClick={()=>{copyText(item.password)}} /></div>
      </td>
      <td className="border border-gray-400 px-4 py-2 text-center ">
        <span className='mx-2 cursor-pointer invert' onClick={()=>{editPassword(item.id)}}><lord-icon
    src="https://cdn.lordicon.com/exymduqj.json"
    trigger="hover"
    style= {{"width":"24px", "height" :"24px"}}>
</lord-icon></span> <span onClick={()=>{deletePassword(item.id)}} className='mx-2 cursor-pointer invert'><lord-icon
    src="https://cdn.lordicon.com/xyfswyxf.json"
    trigger="hover"
    style= {{"width":"24px", "height" :"24px"}}>
</lord-icon></span>
      </td>
    </tr>
     })
     }
  </tbody>
</table>}

                </div>

            </div>
        </>
    )
}

export default Manager
