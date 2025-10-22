import React from 'react'
import "./App.css";

const App = () => {
  return (
    <div className="flex h-screen bg-[url('../public/background.jpeg')] bg-cover bg-center">
      {/* Sidebar */}
      <aside className='bg-black/75 m-4 md:m-10  text-white p-6 rounded-2xl min-w-[250px] flex flex-col items-center md:items-start'>
        {/* Logo Container */}
        <div>
          <img 
          src="../public/bugeyes_logo.jpg" 
          alt="bugeyes logo" 
          className='w-24 h-24 md:w-32 md:h-32 rounded-full object-cover'
          />

        </div>

        <nav className='w-full'>
          <ul className='space-y-6 text-center md:text-left'>
            <li className='hover:text-gray-300 transition-colors cursor-pointer text-lg font-medium px-4 py-2 rounded-lg hover:bg-white/10'>Home</li>
            <li className='hover:text-gray-300 transition-colors cursor-pointer text-lg font-medium px-4 py-2 rounded-lg hover:bg-white/10'>The Band</li>
            <li className='hover:text-gray-300 transition-colors cursor-pointer text-lg font-medium px-4 py-2 rounded-lg hover:bg-white/10'>Shows</li>
            <li className='hover:text-gray-300 transition-colors cursor-pointer text-lg font-medium px-4 py-2 rounded-lg hover:bg-white/10'>Gallery</li>
            <li className='hover:text-gray-300 transition-colors cursor-pointer text-lg font-medium px-4 py-2 rounded-lg hover:bg-white/10'>Contact</li>
          </ul>
        </nav>
      </aside>
    </div>
  )
}

export default App