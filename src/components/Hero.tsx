import { Link } from "react-router-dom";
import { SITE } from "../data/siteContent";

export default function Hero({ onOpenBooking }: { onOpenBooking: () => void }) {
  return (
    <section className="relative">
      <div className="h-[420px] md:h-[560px] bg-center bg-cover" style={{ backgroundImage: "url('/assets/hero.jpg')" }} role="img" aria-label={SITE.hero.title} />
      <div className="max-w-6xl mx-auto px-6 -mt-40 relative">
        <div className="bg-white/90 backdrop-blur-md rounded-2xl p-6 md:p-10 shadow-xl max-w-3xl">
          <h1 className="text-2xl md:text-4xl font-extrabold leading-tight">{SITE.hero.title}</h1>
          <p className="mt-3 text-gray-700">{SITE.hero.subtitle}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/products" className="px-6 py-3 bg-teal-600 text-white rounded-md shadow">Explore Our Collection</Link>
            <button onClick={onOpenBooking} className="px-6 py-3 border rounded-md">Book a Measurement Visit</button>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 items-center text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M12 2l3 6 6 .5-4.5 3.5L18 20l-6-3.5L6 20l1.5-7.5L3 8.5 9 8 12 2z" stroke="currentColor" strokeWidth="0.9" /></svg>
              <span>Saint-Gobain toughened glass</span>
            </div>
            <div className="h-4 border-l" />
            <div>SS304 rust-proof fittings</div>
            <div className="h-4 border-l" />
            <div>7-year hardware warranty</div>
          </div>
        </div>
      </div>
    </section>
  );
}
