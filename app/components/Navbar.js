import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className='border-2 border-red-300 h-16 flex justify-between text-white px-24 items-center'>
        <div>
            <h3>Logo</h3>
        </div>
        <div>
            <ul className='flex gap-8'>
                <Link href='/vowelCounter'>Vowel Counter</Link>
                <li>link</li>
                <li>link</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar