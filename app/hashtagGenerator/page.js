"use client";
import { useState } from "react";
import "animate.css";
import HashtagForm from "../components/HashtagForm";
import HashtagText from "../components/HashtagText";
//========================================

export default function Home() {
     const [showResults, setShowResults] = useState(false)
     const [hashTagged, setHashTagged] = useState(null);

  return (
    <div className="flex flex-col items-center overflow-hidden p-4">
      <div className="max-w-md md:max-w-2xl">
        <h1 className="tracking-wide bg-gradient-to-r from-red-600 via-orange-500 to-yellow-100 bg-clip-text text-transparent md:text-7xl text-5xl text-center mt-4 md:mt-14 animate__animated animate__pulse">
          #hashtagGenerator
        </h1>
        <h2 className="text-white text-lg md:text-xl font-mono tracking-wide font-bold text-center my-8">
          Use this tool to generate hashtags out of your provided input.
        </h2>
      </div>

      <HashtagForm setHashTagged={setHashTagged} setShowResults={setShowResults}/>

      

      {showResults && (
        <div className="flex flex-col justify-center items-center">
          <HashtagText hashTagged={hashTagged} />
        </div>
      )}
    </div>


  );
}