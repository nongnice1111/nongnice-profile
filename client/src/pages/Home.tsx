import { useEffect, useState } from "react";

export default function Home() {
  const [displayText, setDisplayText] = useState("");
  const [navActive, setNavActive] = useState(false);
  const text = "luv nim mak2";

  useEffect(() => {
    let index = 0;
    let isCurrentlyDeleting = false;

    const typewriter = () => {
      if (!isCurrentlyDeleting && index < text.length) {
        setDisplayText(text.substring(0, index + 1));
        index++;
        setTimeout(typewriter, 100);
      } else if (isCurrentlyDeleting && index > 0) {
        setDisplayText(text.substring(0, index - 1));
        index--;
        setTimeout(typewriter, 50);
      } else if (index === text.length) {
        isCurrentlyDeleting = true;
        setTimeout(typewriter, 2000);
      } else if (index === 0 && isCurrentlyDeleting) {
        isCurrentlyDeleting = false;
        setTimeout(typewriter, 500);
      }
    };

    typewriter();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full px-9 py-5 flex justify-between items-center z-50 bg-black/80 backdrop-blur">
        <a href="#" className="text-4xl font-bold text-red-600 hover:scale-110 transition-transform duration-500">
          Nongnice
        </a>

        <nav className="hidden md:flex gap-8">
          <a href="#" className="text-lg font-medium text-white hover:text-red-600 border-b-4 border-transparent hover:border-red-600 transition-all duration-300 pb-1">
            Home
          </a>
          <a href="#" className="text-lg font-medium text-white hover:text-red-600 border-b-4 border-transparent hover:border-red-600 transition-all duration-300 pb-1">
            About
          </a>
          <a href="#" className="text-lg font-medium text-white hover:text-red-600 border-b-4 border-transparent hover:border-red-600 transition-all duration-300 pb-1">
            Contact
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setNavActive(!navActive)}
          className="md:hidden text-2xl text-white hover:text-red-600 transition-colors"
        >
          <i className="fas fa-bars" />
        </button>
      </header>

      {/* Mobile Navigation */}
      {navActive && (
        <nav className="fixed top-20 right-0 w-2/5 bg-gray-900 border-l-4 border-red-600 border-b-4 border-red-600 rounded-bl-3xl p-6 z-40 md:hidden">
          <a href="#" className="block text-xl font-medium text-white hover:text-red-600 my-6 transition-colors">
            Home
          </a>
          <a href="#" className="block text-xl font-medium text-white hover:text-red-600 my-6 transition-colors">
            About
          </a>
          <a href="#" className="block text-xl font-medium text-white hover:text-red-600 my-6 transition-colors">
            Contact
          </a>
        </nav>
      )}

      {/* Home Section */}
      <section className="min-h-screen flex justify-center items-center gap-32 px-9 pt-32 pb-20 md:pt-20">
        {/* Profile Image */}
        <div className="hidden lg:block flex-shrink-0">
          <img
            src="https://avatars.pfptown.com/123/dark-anime-pfp-5064.png"
            alt="Nongnice"
            className="w-80 h-80 rounded-full shadow-2xl shadow-red-600 cursor-pointer hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="flex-1 max-w-2xl">
          {/* Mobile Profile Image */}
          <div className="lg:hidden mb-8 flex justify-center">
            <img
              src="https://avatars.pfptown.com/123/dark-anime-pfp-5064.png"
              alt="Nongnice"
              className="w-64 h-64 rounded-full shadow-2xl shadow-red-600 cursor-pointer hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-7xl font-bold mb-4 leading-tight">
            Hi, It's <span className="text-red-600">Nongnice</span>
          </h1>

          {/* Typing Text */}
          <h3 className="text-4xl md:text-5xl font-bold mb-6 min-h-20">
            I'm a <span className="text-red-600 relative inline-block">
              {displayText}
              <span className="absolute -right-1 top-0 h-full border-l-4 border-red-600 animate-pulse" />
            </span>
          </h3>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
            Just some guy with internet access. Passionate about connecting with people and sharing moments that matter.
          </p>

          {/* Social Icons */}
          <div className="flex gap-6 mb-8 flex-wrap">
            <a
              href="https://www.instagram.com/_.nnxceqaz?igsh=ZmQ3OXNmNXNsZzAz&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center border-2 border-red-600 text-red-600 rounded-full text-2xl hover:bg-red-600 hover:text-black hover:scale-125 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-red-600/50"
            >
              <i className="fab fa-instagram" />
            </a>

            <a
              href="https://discord.com/users/877365725814206534"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 flex items-center justify-center border-2 border-red-600 text-red-600 rounded-full text-2xl hover:bg-red-600 hover:text-black hover:scale-125 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-red-600/50"
            >
              <i className="fab fa-discord" />
            </a>
          </div>

          {/* CTA Button */}
          <a
            href="https://www.instagram.com/_.nnxceqaz?igsh=ZmQ3OXNmNXNsZzAz&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-black border-2 border-red-600 text-red-600 text-lg font-bold rounded-full hover:bg-red-600 hover:text-black hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-600/50"
          >
            Follow Me
          </a>
        </div>
      </section>
    </div>
  );
}

