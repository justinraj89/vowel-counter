import React from "react";

function HighlightedVowels({vowelInput}) {
  return (
    <p className="type-text animate__animated animate__fadeIn mt-12 text-5xl tracking-wider">
      {vowelInput.map((letter, i) => (
        <span key={i} style={{ color: letter.isVowel ? "#1f8f5f" : "white" }}>
          {letter.character}
        </span>
      ))}
    </p>
  );
}

export default HighlightedVowels;
