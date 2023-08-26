import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='h-16 flex justify-between text-white px-24 items-center border-b border-zinc-800 font-mono shadow-md'>
        <div>
            <Link href='/'>Logo</Link>
        </div>
        <div>
            <ul className='flex gap-8'>
                <Link href='/vowelCounter' className='lg:hover:scale-[1.02] lg:duration-300 bg-gradient-to-r from-purple-600 via-emerald-500 to-yellow-100 bg-clip-text text-transparent'>Vowel Counter</Link>
                <Link href='/hashtagGenerator' className='lg:hover:scale-[1.02] lg:duration-300 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-100 bg-clip-text text-transparent'>#hashtagGenerator</Link>
                <li>link</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar