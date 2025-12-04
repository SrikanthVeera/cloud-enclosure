// src/components/PastProjects.tsx
import  { useRef } from "react";
import p1 from "../assets/project/p1.jpg";
import p2 from "../assets/project/p2.jpg";
import p3 from "../assets/project/p3.jpg";
import p4 from "../assets/project/p4.jpg";


type Project = {
  id: string;
  title: string;
  location?: string;
  image: string;
};

const PROJECTS: Project[] = [
  { id: "proj1", title: "Vaibhav Mahajan", location: "📍Century Ethos, Bengaluru", image: p1 },
  { id: "proj2", title: "Vinston", location: "📍Alur Duddannhalli, Bengaluru", image: p2 },
  { id: "proj3", title: "Naidu", location: "📍Aparna Sarovar, Hyderabad", image: p3 },
  { id: "proj4", title: "Raheel Mazher Khan", location: "📍Kingstone Avenue, Hyderabad", image: p4 },
];

export default function PastProjects({ items = PROJECTS as Project[] }: { items?: Project[] }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const width = el.clientWidth;
    el.scrollBy({ left: dir === "left" ? -width * 0.8 : width * 0.8, behavior: "smooth" });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-heading font-bold text-gray-900">
            Past Projects
          </h2>
          <p className="text-sm text-gray-500 mt-2">
            Curated archive of previous works
          </p>
        </div>

        <div className="relative">
          
          {/* Left arrow (desktop) */}
          <button
            aria-label="previous"
            onClick={() => scrollBy("left")}
            className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-lg ring-1 ring-gray-200"
          >
            <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none">
              <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Right arrow (desktop) */}
          <button
            aria-label="next"
            onClick={() => scrollBy("right")}
            className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 bg-white rounded-full shadow-lg ring-1 ring-gray-200"
          >
            <svg className="w-5 h-5 text-gray-700" viewBox="0 0 24 24" fill="none">
              <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* horizontal scroller */}
          <div
            ref={scrollerRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-2 md:px-6"
            style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
          >
            {items.map((it) => (
              <article
                key={it.id}
                className="min-w-[260px] sm:min-w-[320px] md:min-w-[360px] lg:min-w-[420px] 
                           relative rounded-xl overflow-hidden flex-shrink-0 scroll-snap-align-start
                           bg-white shadow-md group cursor-pointer"
              >
                {/* Image */}
                <img
                  src={it.image}
                  alt={it.title}
                  className="w-full h-[360px] object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay - darker on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/85 group-hover:via-black/50 transition-all duration-300" />

                {/* Info - scales up on hover */}
                <div className="absolute left-6 bottom-6 right-6 text-white transform transition-all duration-300 group-hover:scale-110 group-hover:bottom-8">
                  <div className="text-xs uppercase tracking-wide text-white/80 mb-1 transition-all duration-300 group-hover:text-sm group-hover:text-teal-300">
                    Swing Shower Enclosure
                  </div>
                  <h3 className="text-lg font-semibold transition-all duration-300 group-hover:text-2xl group-hover:font-bold">{it.title}</h3>
                  {it.location && (
                    <p className="text-sm mt-1 text-white/80 transition-all duration-300 group-hover:text-base group-hover:text-white">{it.location}</p>
                  )}
                </div>

                {/* mobile arrows */}
                <button
                  onClick={() => scrollBy("left")}
                  className="md:hidden absolute left-3 top-1/2 -translate-y-1/2 
                             w-9 h-9 bg-white rounded-full flex items-center justify-center shadow"
                >
                  <svg className="w-4 h-4 text-gray-700" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                <button
                  onClick={() => scrollBy("right")}
                  className="md:hidden absolute right-3 top-1/2 -translate-y-1/2 
                             w-9 h-9 bg-white rounded-full flex items-center justify-center shadow"
                >
                  <svg className="w-4 h-4 text-gray-700" viewBox="0 0 24 24" fill="none">
                    <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
