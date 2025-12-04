// src/components/Brands.tsx
import saintGobain from "../assets/saint-gobain.webp";
import jindal from "../assets/jindal.webp";
import wacker from "../assets/wacker.webp";
import bosch from "../assets/bosch.webp";
import araldite from "../assets/araldite.avif";
import roff from "../assets/roff.webp";

const BRANDS = [
  { src: saintGobain, alt: "Saint-Gobain" },
  { src: jindal, alt: "Jindal Steel & Power" },
  { src: wacker, alt: "Wacker" },
  { src: bosch, alt: "Bosch" },
  { src: araldite, alt: "Araldite" },
  { src: roff, alt: "Roff" },
];

export default function Brands() {
  return (
    <section className="py-16 bg-gray">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-center text-3xl font-heading font-bold text-gray-900 mb-10">
          Brands We Trust
        </h2>

        {/* ONE ROW, SCROLLABLE ON MOBILE */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex items-center justify-center gap-16 min-w-max px-4">
            {BRANDS.map((b) => (
              <div key={b.alt} className="group flex items-center justify-center flex-shrink-0">
                <img
                  src={b.src}
                  alt={b.alt}
                  className="
                    h-12 w-auto object-contain 
                    opacity-80 
                    transition duration-300
                    group-hover:opacity-100 
                    group-hover:scale-[1.08]
                  "
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
