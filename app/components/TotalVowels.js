import React from 'react'

function TotalVowels({ count }) {
  return (
    <div className='mt-4 lg:mt-0'>
        <p className='font-mono text-gray-100 font-bold border-b border-white tracking-wide md:text-2xl text-xl text-center mt-4 md:mt-14 animate__animated animate__pulse'>Total Vowels:</p>
        <p className='text-center font-mono tracking-wide bg-gradient-to-r from-purple-600 via-emerald-500 to-yellow-100 bg-clip-text text-transparent md:text-7xl text-5xl mt-4 animate__animated animate__pulse'>{count}</p>
    </div>
  )
}

export default TotalVowels