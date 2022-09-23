import React from 'react'
import banner from '../assets/banner.jpeg'

const Main = () => {
  return (
    <div>
      <div className="h-screen absolute">
        <img
          src={banner}
          alt="main_photo"
          className="h-full w-screen object-cover"
        />
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="text-center relative mt-15">
          <p className="text-4xl text-purple-800">
            The IT Career of Your Dreams Starts Here!
          </p>
          <p className='text-5xl text-purple-900'>Alpha Tech</p>
          <button className='bg-red-700 px-4 py-2 mt-6 text-white rounded-lg hover:bg-red-900  duration-200'>Our Services</button>
        </div>
      </div>
    </div>
  )
}

export default Main
