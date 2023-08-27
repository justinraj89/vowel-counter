'use client'
import './globals.css'
import {barriecito} from './fonts';
import { useState } from 'react';
import Navbar from './components/Navbar';
import NavOverlay from './components/NavOverlay';



export default function RootLayout({ children }) {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <html lang="en">
      <body className='bg-zinc-950'>
        <div className={barriecito.className}>
        <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
        <NavOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} className={barriecito.className}/>
        </div>

        <div className={barriecito.className}>
          {children}
        </div>
        
        </body>
    </html>
  )
}
