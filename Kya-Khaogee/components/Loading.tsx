import React from 'react'


export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="space-y-4">
        <div className="flex space-x-2">
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse delay-150"></div>
          <div className="w-4 h-4 bg-blue-500 rounded-full animate-pulse delay-300"></div>
        </div>
        <h1 className='text-xl text-gray-700 font-bold'>Loading...</h1>
      </div>
    </div>
  )
}