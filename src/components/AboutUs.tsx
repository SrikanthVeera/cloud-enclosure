// src/components/AboutUs.tsx
import aboutImg from "../assets/banner2.jpg"; // replace if desired

export default function AboutUs() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={aboutImg}
              alt="About Cloud Enclosure"
              className="w-full h-full max-h-[520px] object-cover rounded-2xl"
            />
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center gap-6">
            <div>
              <p className="text-sm text-teal-600 font-semibold">Our Story</p>
              <h2 className="mt-2 text-3xl md:text-4xl font-heading font-bold text-gray-900 leading-tight">
                We are a team of designers, architects and homeowners who were tired of the same old problem: The Wet Bathroom.
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed max-w-xl">
              We realized that while Indian homes are becoming more modern, the shower area is often ignored. We didn't want to be a general contractor doing everything. We wanted to be the best at one thing.
            </p>

            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">What We Do Best</h3>
              <p className="text-gray-600 leading-relaxed max-w-xl">
                We specialize exclusively in Shower Enclosures. By focusing on this niche, we ensure that every hinge, every seal, and every pane of glass is installed with absolute precision. We don't do plumbing. We don't do tiling. We do the invisible wall that transforms your space from "messy" to "masterpiece."
              </p>
            </div>

            {/* Quick bullets (2-column) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  {/* check icon */}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-teal-500">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Precision Measurements</h4>
                  <p className="text-sm text-gray-600">Laser measurement for a perfect fit every time.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-teal-500">
                    <path d="M14 2v4M10 2v4M4 6v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Certified Installation</h4>
                  <p className="text-sm text-gray-600">Trained teams with tidy, on-time installs.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-teal-500">
                    <path d="M12 2v6M5 8h14M4 15h16M7 22h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Reliable Warranty</h4>
                  <p className="text-sm text-gray-600">7-year warranty on hardware — peace of mind included.</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-teal-500">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Zero-Leak Guarantee</h4>
                  <p className="text-sm text-gray-600">Quality seals and precision fit prevent water escape.</p>
                </div>
              </div>
            </div>

            {/* Stats + CTAs */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 mt-2">
              <div className="flex gap-8 items-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">+2k</div>
                  <div className="text-sm text-gray-500">Installations</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">7 yr</div>
                  <div className="text-sm text-gray-500">Hardware warranty</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-500">Satisfaction</div>
                </div>
              </div>

              <div className="flex gap-3 items-center justify-start sm:justify-end">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-full font-semibold shadow-sm hover:bg-black transition"
                >
                  Book a Visit
                </a>

                <a
                  href="/products"
                  className="inline-flex items-center gap-2 px-5 py-3 border border-gray-200 rounded-full text-gray-700 hover:bg-gray-50 transition"
                >
                  View Products
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
