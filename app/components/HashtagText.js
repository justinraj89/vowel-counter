"use client";
import { useState } from "react";
import copy from "clipboard-copy";

function HashtagText({ hashTagged }) {
  const [copiedText, setCopiedText] = useState(false);

  const handleCopyText = async () => {
    await copy(hashTagged);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000); 
  };

  return (
    <div>
      <p
        onClick={handleCopyText}
        className="text-center hover:cursor-pointer hover:opacity-10 font-mono font-bold tracking-wide bg-gradient-to-r from-yellow-100  to-red-600 bg-clip-text text-transparent md:text-5xl text-2xl mt-20 animate__animated animate__fadeInUp"
      >
        {hashTagged}
      </p>
      <p className="text-center text-white font-mono mt-4">
        Click to copy text!
      </p>
      {copiedText && (
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm text-black font-mono mt-4 border-2 border-white bg-gray-300 w-fit px-2 text-center animate__animated animate__fadeIn">
            Copied to Clipboard
          </p>
        </div>
      )}
    </div>
  );
}

export default HashtagText;
