"use client"
import { useState, useRef } from 'react';
import 'animate.css';
import VowelForm from './components/VowelForm';
//========================================

export default function Home() {
  const [vowelInput, setVowelInput] = useState(null);
  const vowels = ['a','e','i','o','u','A','E','I','O','U'];


  return (
    <div className="flex flex-col items-center overflow-hidden p-4">
      <div className='max-w-md md:max-w-xl'>
        <h1 className='tracking-wide bg-gradient-to-r from-purple-600 via-emerald-500 to-yellow-100 bg-clip-text text-transparent md:text-7xl text-5xl text-center mt-8 md:mt-14 animate__animated animate__pulse'>Vowel Counter</h1>
        <h2 className='text-white text-lg md:text-xl font-mono tracking-wide font-bold text-center my-8'>Use this tool to count the amount of vowels contained in your provided input!</h2>
      </div>
     
      <VowelForm vowels={vowels} vowelInput={vowelInput} setVowelInput={setVowelInput}/>
    </div>
  )
}


