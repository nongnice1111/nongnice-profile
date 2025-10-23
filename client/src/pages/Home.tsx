import { useEffect, useState } from "react";

export default function Home() {
  const [displayText, setDisplayText] = useState("");
  const text = "luv nim mak2";

  useEffect(() => {
    let index = 0;
    let isCurrentlyDeleting = false;

    const typewriter = () => {
      if (!isCurrentlyDeleting && index < text.length) {
        // Typing
        setDisplayText(text.substring(0, index + 1));
        index++;
        setTimeout(typewriter, 100); // Speed of typing
      } else if (isCurrentlyDeleting && index > 0) {
        // Deleting
        setDisplayText(text.substring(0, index - 1));
        index--;
        setTimeout(typewriter, 50); // Speed of deleting
      } else if (index === text.length) {
        // Pause before deleting
        isCurrentlyDeleting = true;
        setTimeout(typewriter, 2000); // Pause duration
      } else if (index === 0 && isCurrentlyDeleting) {
        // Pause before typing again
        isCurrentlyDeleting = false;
        setTimeout(typewriter, 500); // Pause before restarting
      }
    };

    typewriter();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Profile Card */}
        <div className="bg-card border border-border rounded-3xl p-10 sm:p-12 backdrop-blur-md shadow-2xl transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/15">
          {/* Profile Image */}
          <div className="relative w-40 h-40 mx-auto mb-8 cursor-pointer group perspective">
            <img
              src="https://api.dicebear.com/6.x/personas/svg?seed=NiceGuy"
              alt="Nongnice Profile"
              className="w-full h-full rounded-full border-4 border-accent object-cover transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg group-hover:shadow-accent/50"
            />
            {/* Glow effect on hover */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-gradient-to-r from-accent/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300 pointer-events-none" />
          </div>

          {/* Name */}
          <h1 className="text-4xl sm:text-5xl font-bold text-center mb-3 bg-gradient-to-r from-accent via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Nongnice
          </h1>

          {/* Typewriter Text */}
          <div className="text-center mb-8 min-h-8">
            <div className="font-mono text-lg sm:text-xl text-accent font-medium tracking-widest">
              {displayText}
              <span className="ml-1 animate-blink">|</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-5 justify-center mb-8 flex-wrap">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/_.nnxceqaz?igsh=ZmQ3OXNmNXNsZzAz&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border-2 border-border rounded-xl text-foreground transition-all duration-300 bg-card/40 hover:border-accent hover:text-accent hover:bg-accent/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/20"
              title="Instagram"
            >
              <i className="fab fa-instagram text-xl" />
            </a>

            {/* Discord */}
            <a
              href="https://discord.com/users/877365725814206534"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border-2 border-border rounded-xl text-foreground transition-all duration-300 bg-card/40 hover:border-[#5865f2] hover:text-[#5865f2] hover:bg-[#5865f2]/10 hover:-translate-y-1 hover:shadow-lg hover:shadow-[#5865f2]/20"
              title="Discord"
            >
              <i className="fab fa-discord text-xl" />
            </a>
          </div>

          {/* Spotify Section */}
          <div className="mt-8 pt-8 border-t border-border">
            <span className="block text-xs text-muted-foreground uppercase tracking-widest mb-4 text-center">
              Now Playing
            </span>
            <div className="rounded-2xl overflow-hidden shadow-lg bg-black/40">
              <iframe
                src="https://open.spotify.com/embed/track/7qiZfU4dY1lsylvNFutFtA?utm_source=generator"
                width="100%"
                height="352"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

