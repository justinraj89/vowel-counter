import Link from "next/link";

function Navbar({ navbarOpen, setNavbarOpen }) {
  return (
    <header className={`bg-zinc-950 w-full fixed top-0 left-0 z-20 h-12 px-8 py-8 flex justify-between items-center`}>
      <div className="text-white flex-grow z-20">
        <Link href='/'>
          <h1 className="text-xl lg:text-2xl font-bold my-0">Learn to Code</h1>
        </Link>
        
      </div>

      
      <button
        className="flex top-0 right-0 z-20 relative w-10 h-10 text-white focus:outline-none"
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <span
            className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
              navbarOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out ${
              navbarOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
            }`}
          ></span>
          <span
            className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
              navbarOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
            }`}
          ></span>
        </div>
      </button>
    </header>
  );
}

export default Navbar;

// className="w-full fixed top-0 left-0 z-20 bg-zinc-900 h-12 px-8 py-8 flex justify-between items-center"


// import React from 'react'
// import Link from 'next/link'

// function Navbar({ navbarOpen, setNavbarOpen}) {
//   return (
//     <nav className='h-16 flex justify-between text-white px-24 items-center border-b border-zinc-800 font-mono shadow-md'>
//         <div>
//             <Link href='/'>Logo</Link>
//         </div>
//         <div>
//             <ul className='flex gap-8'>
//                 <Link href='/vowelCounter' className='lg:hover:scale-[1.02] lg:duration-300 bg-gradient-to-r from-purple-600 via-emerald-500 to-yellow-100 bg-clip-text text-transparent'>Vowel Counter</Link>
//                 <Link href='/hashtagGenerator' className='lg:hover:scale-[1.02] lg:duration-300 bg-gradient-to-r from-red-600 via-orange-500 to-yellow-100 bg-clip-text text-transparent'>#hashtagGenerator</Link>
//                 <li>link</li>
//             </ul>
//         </div>
//     </nav>
//   )
// }

// export default Navbar