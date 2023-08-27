import Link from "next/link";

function MenuOverlay({ navbarOpen, setNavbarOpen }) {

  const links = [
    {
      url : '/vowelCounter',
      displayText : 'Vowel Counter',
      class : 'h-full w-full py-2 text-3xl lg:text-5xl bg-gradient-to-r from-purple-600 via-emerald-500 to-yellow-100 bg-clip-text text-transparent ' 
    },
    {url : '/hashtagGenerator', 
    displayText : '#hashtagGenerator',
    class : 'h-full w-full py-2 text-3xl lg:text-5xl bg-gradient-to-r from-red-600 via-orange-500 to-yellow-100 bg-clip-text text-transparent'
  }
  ]

    return (
      <nav
        className={`fixed w-full px-10 z-10 h-screen pt-24 bg-zinc-950 opacity-[0.98] transform delay-100 transition-all duration-500 ${
          navbarOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full"
        }`}
      >
        <ul className="w-full flex justify-center flex-col">
          {links.map((link, i) => (
             <li key={i} className="flex justify-center w-fit self-center leading-8 focus:outline-none  py-2 opacity-80 hover:opacity-100 transition-all duration-200 ease-in-out">
             <Link
               href={link.url}
               className={link.class}
               onClick={() => {
                 setNavbarOpen(false);
               }}
             >
               {link.displayText}
             </Link>
           </li>
          ))}
        </ul>
      </nav>
    );
  }
  
  export default MenuOverlay;
  