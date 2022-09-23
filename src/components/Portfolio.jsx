import React from 'react'
import PortfolioCard from './PortfolioCard'
import {
  Photo1,
  Photo2,
  Photo3,
  Photo4,
  Photo5,
  Photo6,
} from '../assets/index'

const Portfolio = () => {
  return (
    <div className="bg-gray-200 py-10">
      <div className="text-center my-10">
        <p className="text-6xl font-thin">Portfolio</p>
        <p className="mt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus
          excepturi aliquam in quis quia ullam a ea dicta officiis? Officia
          dolor voluptatum delectus quod hic.
        </p>
      </div>
      <div className="flex justify-center items-center">
        <div className="max-w-[80rem] grid sm:grid-cols-2 md-grid-cols-3 mt-4 mx-5 gap-5">
          {/* */}
          <PortfolioCard photo={Photo1} />
          <PortfolioCard photo={Photo2} />
          <PortfolioCard photo={Photo3} />
          <PortfolioCard photo={Photo4} />
          <PortfolioCard photo={Photo5} />
          <PortfolioCard photo={Photo6} />
          {/* */}
        </div>
      </div>
    </div>
  )
}

export default Portfolio
