// src/components/BannerSlider.tsx
import { useEffect, useRef, useState } from "react";

type Slide = {
  src: string;
  alt?: string;
  caption?: React.ReactNode;
};

type Props = {
  slides: Slide[];
  interval?: number;
  heightClass?: string;
};

export default function BannerSlider({
  slides,
  interval = 6000,
  heightClass = "h-[520px]",
}: Props) {
  const [index, setIndex] = useState(0);
  const [isPaused, setPaused] = useState(false);
  const slideCount = slides.length;
  const autoRef = useRef<number | null>(null);

  // autoplay
  useEffect(() => {
    if (isPaused || slideCount <= 1) return;
    autoRef.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % slideCount);
    }, interval);
    return () => {
      if (autoRef.current) window.clearInterval(autoRef.current);
    };
  }, [isPaused, slideCount, interval]);

  useEffect(() => {
    return () => {
      if (autoRef.current) window.clearInterval(autoRef.current);
    };
  }, []);

  // keyboard nav
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + slideCount) % slideCount);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % slideCount);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [slideCount]);

  // touch swipe
  const touchX = useRef<number | null>(null);
  function onTouchStart(e: React.TouchEvent) {
    touchX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (dx > 50) setIndex((i) => (i - 1 + slideCount) % slideCount);
    else if (dx < -50) setIndex((i) => (i + 1) % slideCount);
    touchX.current = null;
  }

  function prev() { setIndex((i) => (i - 1 + slideCount) % slideCount); }
  function next() { setIndex((i) => (i + 1) % slideCount); }
  function goTo(i: number) { setIndex(i % slideCount); }

  return (
    <section
      className={`relative overflow-hidden ${heightClass}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-roledescription="carousel"
    >
      {/* slides wrapper (animated translate) */}
      <div
        className="absolute inset-0 flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides.map((s, i) => (
          <div key={i} className="w-full flex-shrink-0 relative">
            <img src={s.src} alt={s.alt ?? `Slide ${i + 1}`} className="w-full h-full object-cover" draggable={false} />

            {/* dark overlay (keeps your previous overlay) */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* CAPTION area — left aligned, vertically centered-ish */}
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-3xl px-6 md:px-12 lg:px-20 py-8 z-10">
                {/* animate the caption slightly when this slide is active */}
                <div className={`slide-contents transition-all duration-600 ${i === index ? "slide-active" : "opacity-0 translate-y-6"}`}>
                  {s.caption}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* arrows */}
      {slideCount > 1 && (
        <>
          <button aria-label="Previous slide" onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/20 hover:bg-white/40 p-3 text-white shadow">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </button>

          <button aria-label="Next slide" onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 rounded-full bg-white/20 hover:bg-white/40 p-3 text-white shadow">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </button>
        </>
      )}

      {/* dots */}
      {slideCount > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => (
            <button key={i} onClick={() => goTo(i)} aria-label={`Go to slide ${i+1}`}
              className={`w-3 h-3 rounded-full ${i === index ? "bg-teal-500" : "bg-white/50"}`} />
          ))}
        </div>
      )}

      {/* screen-reader live */}
      <div className="sr-only" aria-live="polite">
        {`Slide ${index + 1} of ${slideCount}: ${slides[index]?.alt ?? ""}`}
      </div>
    </section>
  );
}
