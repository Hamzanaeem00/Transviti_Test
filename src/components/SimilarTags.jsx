import React from 'react'
import { Tags } from '../utils'

const SimliarTags = () => {
  return (
      <div className="mt-4">
        <span className="text-sm text-gray-600 mr-2">Similar:</span>
        {Tags.map((tag, i) => (
          <button
            key={i}
            className="px-3 py-2 border border-gray-300 text-sm rounded text-gray-500 mr-2 hover:bg-primary hover:text-white cursor-pointer"
          >
            {tag}
          </button>
        ))}
      </div>
  )
}

export default SimliarTags
