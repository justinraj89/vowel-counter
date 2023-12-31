"use client";
import { useRef } from "react";
//=================================

function VowelForm({ vowels, setVowelInput, setShowResults, setVowelCount }) {

  const vowelInput = useRef();


  function countVowels(e) {
    e.preventDefault();
    let count = 0;
    let inputSplit = vowelInput.current.value.split("");

    for (let char of inputSplit) {
      if (vowels.includes(char)) {
        count++;
      }
    }

    const highlightVowels = inputSplit.map((char) => {
      return {
        character: char,
        isVowel: vowels.includes(char),
      };
    });
    setVowelCount(count);
    setVowelInput(highlightVowels);
    setShowResults(true);
    vowelInput.current.value = "";
  }

  return (
    <div className="mt-4 w-full lg:w-2/4">
      <form
        className="w-full flex flex-col md:flex-row justify-center items-center gap-4"
        onSubmit={countVowels}
      >
        <input
          type="text"
          className="w-[90%] text-gray-100 lg:w-2/3 py-1 font-mono bg-transparent border-b-2 border-gray-200 focus:outline-none lg:focus:border-purple-300"
          ref={vowelInput}
          placeholder="Enter text here"
        />
        <button
          type="submit"
          className="text-white bg-indigo-700 hover:bg-indigo-800 px-4 py-1 font-mono rounded-md w-[90%] lg:w-auto "
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default VowelForm;
