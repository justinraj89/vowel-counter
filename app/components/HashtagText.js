"use client";
import { useState } from "react";
import copy from "clipboard-copy";

function HashtagText({ hashTagged }) {
  const [copiedText, setCopiedText] = useState(false);

  const handleCopyText = async () => {
    await copy(hashTagged);
    setCopiedText(true);
    setTimeout(() => setCopiedText(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <div onClick={handleCopyText} className="">
      <p className="text-center hover:cursor-pointer font-mono font-bold tracking-wide text-white md:text-5xl text-2xl mt-20 animate__animated animate__fadeInUp">
        {hashTagged}
      </p>

      {copiedText && (
        <div className="flex flex-col justify-center items-center">
          <p className="text-sm text-black font-mono mt-4 border-2 border-white bg-gray-300 w-fit px-2 text-center">
            Copied to Clipboard
          </p>
        </div>
      )}
    </div>
  );
}

export default HashtagText;
