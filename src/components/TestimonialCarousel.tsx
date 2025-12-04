import { useRef } from "react";
import p1 from "../assets/project/p1.jpg";
import p2 from "../assets/project/p2.jpg";
import p3 from "../assets/project/p3.jpg";
import p4 from "../assets/project/p4.jpg";
import p5 from "../assets/project/p5.jpg";
import p6 from "../assets/project/p6.jpg";
import p7 from "../assets/project/p7.jpg";
import p8 from "../assets/project/p8.jpg";

const testimonials = [
  { 
    name: "Vaibhav Mahajan", 
    location: "Century Ethos, Bengaluru",
    quote: "I was hesitant about shower enclosures, but the team explained the safety features so well. Now the bathroom stays dry, and it looks like a hotel suite!",
    image: p1,
    rating: 5
  },
  { 
    name: "Vinston", 
    location: "Alur Duddannhalli, Bengaluru",
    quote: "They came, installed the enclosure, and left. No debris, no noise. The Matte Black finish looks stunning.",
    image: p2,
    rating: 5
  },
  { 
    name: "Naidu", 
    location: "Aparna Sarovar, Hyderabad",
    quote: "The L-shape design perfectly fits our corner bathroom. Quality glass and professional installation. Highly recommended!",
    image: p3,
    rating: 5
  },
  { 
    name: "Raheel Mazher Khan", 
    location: "Kingstone Avenue, Hyderabad",
    quote: "Best decision for our bathroom renovation. The walk-in enclosure is elegant and easy to maintain. Worth every penny!",
    image: p4,
    rating: 5
  },
  { 
    name: "Sharma Family", 
    location: "Whitefield, Bengaluru",
    quote: "The gold fittings add a luxurious touch to our bathroom. The installation was quick and the team was very professional.",
    image: p5,
    rating: 5
  },
  { 
    name: "Patel Residence", 
    location: "Gachibowli, Hyderabad",
    quote: "Rose gold hardware looks amazing! The enclosure is leak-proof and the quality is top-notch. Very satisfied with the service.",
    image: p6,
    rating: 5
  },
  { 
    name: "Kumar Family", 
    location: "Indiranagar, Bengaluru",
    quote: "Perfect solution for our small bathroom. The sliding doors save space and the clear glass makes it look bigger. Excellent work!",
    image: p7,
    rating: 5
  },
  { 
    name: "Reddy Residence", 
    location: "Jubilee Hills, Hyderabad",
    quote: "The tinted glass provides privacy while maintaining elegance. Installation was seamless and the warranty gives us peace of mind.",
    image: p8,
    rating: 5
  },
];

export default function TestimonialCarousel() {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const width = el.clientWidth;
    el.scrollBy({ left: dir === "left" ? -width * 0.8 : width * 0.8, behavior: "smooth" });
  };

  return (
    <div className="max-w-7xl mx-auto px-6 relative">
      {/* Left Arrow - Visible on all screens */}
      <button
        onClick={() => scrollBy("left")}
        className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition"
        aria-label="Previous testimonial"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Arrow - Visible on all screens */}
      <button
        onClick={() => scrollBy("right")}
        className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition"
        aria-label="Next testimonial"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Horizontal Scroll Container */}
      <div
        ref={scrollerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide px-2 md:px-12"
        style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
      >
        {testimonials.map((testimonial, idx) => (
          <article
            key={idx}
            className="min-w-[280px] sm:min-w-[320px] md:min-w-[360px] lg:min-w-[400px] 
                       relative rounded-xl overflow-hidden flex-shrink-0 scroll-snap-align-start
                       bg-white shadow-md group cursor-pointer"
          >
            {/* Image */}
            <img 
              src={testimonial.image} 
              alt={`Project by ${testimonial.name}`}
              className="w-full h-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay - darker on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/85 group-hover:via-black/50 transition-all duration-300" />

            {/* Content - overlaid on image */}
            <div className="absolute left-6 bottom-6 right-6 text-white transform transition-all duration-300 group-hover:scale-105 group-hover:bottom-8">
              {/* Quote Icon */}
              <svg className="w-8 h-8 text-white/70 mb-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Quote */}
              <blockquote className="text-white text-sm leading-relaxed mb-3 line-clamp-2 transition-all duration-300 group-hover:text-base">
                "{testimonial.quote}"
              </blockquote>

              {/* Rating */}
              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Customer Info */}
              <h3 className="text-lg font-semibold transition-all duration-300 group-hover:text-xl group-hover:font-bold">{testimonial.name}</h3>
              <p className="text-sm text-white/90 transition-all duration-300 group-hover:text-base group-hover:text-white">📍 {testimonial.location}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
