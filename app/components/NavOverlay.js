import Link from "next/link";

function MenuOverlay({ navbarOpen, setNavbarOpen }) {
    return (
      <nav
        className={`fixed w-full px-10 z-10 h-screen pt-24 bg-zinc-950 opacity-[0.98] transform delay-100 transition-all duration-500 ${
          navbarOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
      >
        <ul className="w-full flex justify-center flex-col">
          <li className="flex justify-center w-fit self-center leading-8 focus:outline-none  py-2 opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out">
            <Link
              href="/vowelCounter"
              className="h-full w-full py-2 text-3xl text-white"
              onClick={() => {
                setNavbarOpen(false);
              }}
            >
              Vowel Counter
            </Link>
          </li>
          <li className="flex justify-center w-fit self-center leading-8 focus:outline-none  py-2 opacity-50 hover:opacity-100 transition-all duration-200 ease-in-out">
            <a
              href="/hashtagGenerator"
              className="h-full w-full py-2 text-3xl text-white"
              onClick={() => {
                setNavbarOpen(false);
              }}
            >
              #hashtagGenerator
            </a>
          </li>
        </ul>
      </nav>
    );
  }
  
  export default MenuOverlay;
  