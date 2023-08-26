"use client";
import { useState } from "react";
import "animate.css";
import VowelForm from "../components/VowelForm";
import HighlightedVowels from "../components/HighlightedVowels";
import TotalVowels from "../components/TotalVowels";
import Link from "next/link";
//========================================

export default function Home() {
  const [vowelInput, setVowelInput] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [vowelCount, setVowelCount] = useState(null);

  const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];


  return (
    <div className="flex flex-col items-center overflow-hidden p-4">
      <div className="max-w-md md:max-w-xl">
        <h1 className="tracking-wide bg-gradient-to-r from-purple-600 via-emerald-500 to-yellow-100 bg-clip-text text-transparent md:text-7xl text-5xl text-center mt-4 md:mt-14 animate__animated animate__pulse">
          Vowel Counter
        </h1>
        <h2 className="text-white text-lg md:text-xl font-mono tracking-wide font-bold text-center my-8">
          Use this tool to count the amount of vowels contained in your provided
          input.
        </h2>
      </div>

      <VowelForm
        vowels={vowels}
        setVowelInput={setVowelInput}
        setShowResults={setShowResults}
        setVowelCount={setVowelCount}
      />

      {showResults && (
        <div className="flex flex-col justify-center items-center">
          <HighlightedVowels vowelInput={vowelInput} />
          <TotalVowels vowelCount={vowelCount}/>
          <Link href='/vowelCounter/function' className="text-sky-300 hover:text-sky-400 tracking-tight underline text-center font-mono text-sm mt-8 lg:hover:scale-[1.02] lg:duration-300">Click here to see how this was made</Link>
        </div>
      )}
    </div>


  );
}