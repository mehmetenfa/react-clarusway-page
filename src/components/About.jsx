import React from 'react'
import { AboutUs } from "../assets"

const About = () => {
  return (
    <div className='py-10'>
      <div className="text-center my-10">
        <p className="text-6xl font-thin">About</p>
        <p className="mt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
          excepturi aliquam in quis quia ullam.
        </p>
      </div>
      {/* */}
      <div className="flex flex-col-reverse sm:flex-row mx-10 justify-center">
        <div className="mt-4 sm:mt-0 mx-4">
          {[
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimu excepturi aliquam in quis quia ul ea.',
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimu excepturi aliquam in quis quia ul ea.',
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimu excepturi aliquam in quis quia ul ea.',
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimu excepturi aliquam in quis quia ul ea.',
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimu excepturi aliquam in quis quia ul ea.',
            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimu excepturi aliquam in quis quia ul ea.',
          ].map((item, idx) => (
            <p key={idx} className="p-2">
              {item}
            </p>
          ))}
        </div>
        <div>
            <img src={AboutUs} alt="sgvfdnsngs" className='rounded-2xl sm:h-[20rem]' />
        </div>
      </div>
    </div>
  )
}

export default About
