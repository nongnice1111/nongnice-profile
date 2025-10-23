import { useEffect, useState, useRef } from "react";

export default function Home() {
  const [displayText, setDisplayText] = useState("");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const bgRef = useRef<HTMLDivElement>(null);

  // Typewriter Effect
  useEffect(() => {
    let index = 0;
    let isCurrentlyDeleting = false;
    const text = "lluk nim";

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

  // Mouse Move Effect for Background
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (bgRef.current) {
      const rect = bgRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Calculate distance from center
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const distX = (x - centerX) * 0.05;
      const distY = (y - centerY) * 0.05;
      
      setMousePos({ x: distX, y: distY });
    }
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div
      ref={bgRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen w-full bg-black text-white overflow-hidden flex items-center justify-center"
    >
      {/* Animated Background Gradient */}
      <div
        className="absolute inset-0 transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-black to-black" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 text-center">
        {/* Profile Image */}
        <div className="mb-12 md:mb-16">
          <img
            src="https://avatars.pfptown.com/123/dark-anime-pfp-5064.png"
            alt="Nongnice"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-2xl shadow-red-600 object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Name and Typewriter Text */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-red-600">Nongnice</span>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold">
            <span className="text-red-600 relative inline-block">
              {displayText}
              <span className="absolute -right-1 top-0 h-full border-l-4 border-red-600 animate-pulse" />
            </span>
          </h2>
        </div>

        {/* Social Icons */}
        <div className="flex gap-8 md:gap-10">
          <a
            href="https://www.instagram.com/_.nnxceqaz?igsh=ZmQ3OXNmNXNsZzAz&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border-2 border-red-600 text-red-600 rounded-full text-2xl md:text-3xl hover:bg-red-600 hover:text-black hover:scale-125 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-red-600/50"
          >
            <i className="fab fa-instagram" />
          </a>

          <a
            href="https://discord.com/users/877365725814206534"
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center border-2 border-red-600 text-red-600 rounded-full text-2xl md:text-3xl hover:bg-red-600 hover:text-black hover:scale-125 hover:-translate-y-2 transition-all duration-300 shadow-lg hover:shadow-red-600/50"
          >
            <i className="fab fa-discord" />
          </a>
        </div>
      </div>
    </div>
  );
}

