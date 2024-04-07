import React, { useState } from 'react'
import { mixClasses } from '../GeneralTools';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const MainContainer = ({ title, children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {setDarkTheme(value => !value)};

  return (
    <div className={mixClasses([darkTheme ? "bg-slate-800 text-white" : "bg-white", "flex border border-gray-200 rounded-xl shadow-sm overflow-hidden"])}>
      <div className="m-5 flex flex-col gap-2">
        <div className='flex justify-between'>
          <h1>{title}</h1>
          <button onClick={toggleTheme} className='btn btn-outline-info'>
            {darkTheme ? <MdLightMode /> : <MdDarkMode />}
          </button>
        </div>
        { children }
      </div>
    </div>
  )
}

export default MainContainer