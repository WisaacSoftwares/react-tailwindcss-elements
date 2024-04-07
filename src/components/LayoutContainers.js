import React, { useState } from 'react'
import { mixClasses } from '../GeneralTools';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const LayoutContainers = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => { setDarkTheme(value => !value) };

  return (
    <>
      <div className='container'>Basic Container</div>
      <div className='container shadow'>Shadow Container</div>
      <div className='container justify-center'>Center Container</div>
      <div className='flex gap-2'>
        <div className='container w-24 justify-center'>Container</div>
        <div className='container grow justify-center'>Simple Layout</div>
        <div className='container w-24 justify-center'>Container</div>
      </div>
      <div className='flex gap-2'>
        <div className='container grow justify-center'>Container</div>
        <div className='container w-24 justify-center'>Container</div>
        <div className='container grow justify-center'>Container</div>
      </div>
      <div className='container gap-3 bg-gray-400/10'>
        {/* NAVBAR */}
        <div className='container justify-center'>
          <span>Dummy Navbar</span>
        </div>
        <div className='flex gap-3 h-[300px]'>
          {/* SIDEBAR */}
          <div className='container justify-start w-[40%] max-w-[400px] text-wrap hidden sm:flex'>
            <h3>Sidebar</h3>
            <button className='btn btn-outline'>Button</button>
            <button className='btn btn-outline'>Button</button>
            <button className='btn btn-outline'>Button</button>
          </div>
          {/* CONTENT */}
          <div className='container grow justify-start bg-white/30'>
            <h1>Content</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore dolorem distinctio facilis tempore exercitationem, at numquam delectus voluptatum magnam quas blanditiis ipsam ab aut voluptatibus in! Esse eum suscipit nulla.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LayoutContainers