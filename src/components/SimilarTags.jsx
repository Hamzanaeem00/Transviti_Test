import React from 'react'
import { Tags } from '../utils'

const SimliarTags = () => {
  return (
      <div className="mt-4">
        <div className='flex justify-start '>
        <span className="text-sm text-gray-600 mr-2 sm:mt-2 md:mt-4 lg:mt-2 xl:mt-2 mt-2">Similar:</span>
        {Tags.map((tag, i) => (
          <button
            key={i}
            className=" px-3 py-2 border border-gray-300 text-sm rounded text-gray-500 mr-2 hover:bg-primary hover:text-white cursor-pointer"
            >
            {tag}
          </button>
        ))}
        </div>
      </div>
  )
}

export default SimliarTags
