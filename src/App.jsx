import { useState } from 'react'
import Navbar from './components/Navbar'

import './App.css'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="fixed inset-0 -z-10">
        <div className="min-h-screen bg-gradient-to-br from-emerald-800 via-teal-950 to-green-800" />
      </div>
      
      <div className="flex flex-col min-h-screen ">
        <Navbar/>
      <main className='flex-grow'>
       <Manager />
      </main>
      <Footer/>
      </div>
    </>
  )
}

export default App
