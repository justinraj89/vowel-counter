import React from "react";

function HighlightedVowels({ vowelInput }) {
  return (
    <div className="mt-12 max-w-4xl">
      <p className="type-text animate__animated animate__fadeIn text-3xl lg:text-4xl tracking-widest text-center">
        {vowelInput.map((letter, i) => (
          <span key={i} style={{ color: letter.isVowel ? "#9333ea" : "white" }}>
            {letter.character}
          </span>
        ))}
      </p>
    </div>
  );
}

export default HighlightedVowels;
