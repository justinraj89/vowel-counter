import React from "react";

function VowelForm({ vowels, vowelInput, setVowelInput }) {

  function countVowels() {}

  return (
    <div className="mt-4 w-full lg:w-2/4">
      <form className="w-full flex flex-col md:flex-row justify-center items-center gap-4" onSubmit={countVowels}>
        <input type="text" className="px-4 w-[90%] lg:w-2/3 py-1 rounded-md font-mono" ref={vowelInput} />
        <button type="submit" className="text-white bg-indigo-700 px-4 py-1 font-mono rounded-md w-[90%] lg:w-auto">
          Submit
        </button>
      </form>
    </div>
  );
}

export default VowelForm;
