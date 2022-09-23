import React from 'react'

const PortfolioCard = ({ photo }) => {
  return (
    <div className="w-auto rounded-lg overflow-hidden">
      <div>
        <img src={ photo } alt="sdgadgf" className="w-full object-cover" />
      </div>
      <div className="text-center bg-white p-5">
        <p className="text-2xl">Lorem, ipsum.</p>
        <p className="text-sm mt-1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab vero
          eaque porro?
        </p>
      </div>
    </div>
  )
}

export default PortfolioCard
