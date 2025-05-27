import { useState } from 'react'
import Navbar from './components/Navbar'

import './App.css'
import Manager from './components/Manager'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="fixed inset-0 -z-10 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]" />
      </div>
      <Navbar/>
      <Manager/>
      <Footer/>
    </>
  )
}

export default App
