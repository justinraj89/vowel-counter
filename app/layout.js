'use client'
import './globals.css'
import {barriecito} from './fonts';
import { useState } from 'react';
import Navbar from './components/Navbar';
import MenuOverlay from './components/NavOverlay';



export default function RootLayout({ children }) {

  const [navbarOpen, setNavbarOpen] = useState(false);


  return (
    <html lang="en">
      <body className='bg-zinc-900'>
        <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
        <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}/>
        <div className={barriecito.className}>
          {children}
        </div>
        
        </body>
    </html>
  )
}
