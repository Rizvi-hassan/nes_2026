import React from 'react'

const Loader = () => {

  return (
    <div className='z-9999 fixed h-lvh w-lvw bg-primary'>
      <div className='w-full h-full flex items-center justify-center text-white text-center text-5xl font-extrabold tracking-widest'>
        NES <br />
        2026
        <p className='text-gray-100 text-sm font-normal tracking-normal text-center absolute bottom-20 md:bottom-5 w-full px-10'>
          Organized by Department of Electronics Engineering, Silicon University
        </p>
      </div>
    </div>
  )
}

export default Loader
