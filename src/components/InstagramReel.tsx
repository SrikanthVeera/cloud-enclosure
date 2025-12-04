// src/components/InstagramReel.tsx
import { useRef } from "react";
import p1 from "../assets/project/p1.jpg";
import p2 from "../assets/project/p2.jpg";
import p3 from "../assets/project/p3.jpg";
import p4 from "../assets/project/p4.jpg";
import p5 from "../assets/project/p5.jpg";
import p6 from "../assets/project/p6.jpg";
import p7 from "../assets/project/p7.jpg";

type ReelItem = {
  thumb: string;
  link: string; // full Instagram reel URL
};

const fallbackImages = [p1, p2, p3, p4, p5, p6, p7];

export default function InstagramReel({ items }: { items: ReelItem[] }) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const width = el.clientWidth;
    el.scrollBy({ left: dir === "left" ? -width * 0.8 : width * 0.8, behavior: "smooth" });
  };

  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-800">
          Stay Inspired with Us on Instagram
        </h2>

        <a
          href="https://www.instagram.com/cloud_enclosure?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold shadow-lg transition"
        >
          Follow Us →
        </a>
      </div>

      {/* Scrollable reel thumbnails */}
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Left Arrow */}
        <button
          onClick={() => scrollBy("left")}
          className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition"
          aria-label="Previous reel"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => scrollBy("right")}
          className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition"
          aria-label="Next reel"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        <div
          ref={scrollerRef}
          className="overflow-x-auto scrollbar-hide"
        >
          <div className="flex gap-4 px-2 md:px-12 pb-4">
          {items.map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[180px] md:min-w-[240px] rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition border border-gray-200 group"
            >
              <div className="relative">
                <img
                  src={fallbackImages[i % fallbackImages.length]}
                  className="w-full h-64 object-cover"
                  alt={`Instagram reel ${i + 1}`}
                  draggable={false}
                />
                {/* Instagram icon overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition flex items-end justify-center pb-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                    <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
