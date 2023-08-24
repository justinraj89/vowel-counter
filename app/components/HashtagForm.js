import { useRef } from "react";
//=================================

function HashtagForm({setHashTagged, setShowResults}) {
  const hashtagInput = useRef();

  function generateHashtag(e) {
    e.preventDefault();
    const splitUpInput = hashtagInput.current.value.split(" ");
    let formatted = splitUpInput
      .map((word, i) => {
        if (i === 0) {
          return word.charAt(0).toLowerCase() + word.slice(1).toLowerCase();
        } else {
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }
      })
      .join("");
    setHashTagged("#" + formatted);
    setShowResults(true)
    hashtagInput.current.value = ''
  }

  return (
    <div className="mt-4 w-full lg:w-2/4">
      <form
        className="w-full flex flex-col md:flex-row justify-center items-center gap-4"
        onSubmit={generateHashtag}
      >
        <input
          type="text"
          className="w-[90%] text-gray-100 lg:w-2/3 py-1 font-mono bg-transparent border-b-2 border-gray-200 focus:outline-none lg:focus:border-orange-300"
          ref={hashtagInput}
          placeholder="Enter text here"
        />
        <button
          type="submit"
          className="text-white bg-orange-600 hover:bg-orange-700 px-4 py-1 font-mono rounded-md w-[90%] lg:w-auto "
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default HashtagForm;
