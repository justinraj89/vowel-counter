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
                <Link href='/vowelCounter'>Vowel Counter</Link>
                <Link href='/hashtagGenerator'>#hashtagGenerator</Link>
                <li>link</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar