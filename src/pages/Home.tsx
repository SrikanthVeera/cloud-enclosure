// src/pages/Home.tsx
import { useState } from "react";
import BannerSlider from "../components/BannerSlider";
// import TrustStrip from "../components/TrustStrip";
import TestimonialCarousel from "../components/TestimonialCarousel";
import InstagramReel from "../components/InstagramReel";
import Brands from "../components/Brands";
import AboutUs from "../components/AboutUs";
import PastProjects from "../components/PastProjects";
import Footer from "../components/Footer";
// import { SITE } from "../data/siteContent";

// slider images
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";

// product images (your .webp files)
import p1 from "../assets/2.webp";
import p2 from "../assets/4.webp";
import p3 from "../assets/6.webp";
import p4 from "../assets/8.webp";

type Product = {
  id: string;
  name: string;
  image?: string;
  desc?: string;
  tags?: string[];
};

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, product: selectedProduct?.name });
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setSelectedProduct(null);
      setFormData({ name: "", email: "", phone: "", address: "", message: "" });
    }, 3000);
  };

  // banner slides
  const slides = [
    {
      src: banner1,
      alt: "Experience Luxury and Durability",
      caption: (
        <div className="text-left">
          <div className="inline-block transform -rotate-6 bg-amber-500 text-black font-semibold px-3 py-1 mb-4 shadow-lg">
            Uncompromised Quality
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-tight mt-2">
            Experience Luxury<br />and Durability Combined!
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-xl">
            Choose from our premium selection of shower enclosures that offer beauty and resilience.
          </p>
          <div className="mt-8">
            <a href="/products" className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-200">
              Shop Now
            </a>
          </div>
        </div>
      )
    },
    {
      src: banner2,
      alt: "A Bathroom You'll Love",
      caption: (
        <div className="text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-tight">
            A Bathroom You’ll Finally<br />Love Walking Into.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-xl">
            Enjoy a safe, clean, beautifully designed bathing space every day.
          </p>
          <div className="mt-8">
            <a href="/products" className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-200">
              Explore Our Collection
            </a>
          </div>
        </div>
      )
    },
    {
      src: banner3,
      alt: "Built for Safety",
      caption: (
        <div className="text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white leading-tight">
            Designed for Indian Homes,<br />Built for Safety.
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90 max-w-xl">
            Saint-Gobain toughened glass + precision installation for long-term durability.
          </p>
          <div className="mt-8">
            <a href="/contact" className="inline-block bg-white text-black font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-gray-200">
              Book a Visit
            </a>
          </div>
        </div>
      )
    }
  ];

  // products list (image only)
  const products: Product[] = [
    { id: "sliding", name: "Sliding Shower Enclosure", image: p1 },
    { id: "lshape", name: "L-Shape Shower Enclosure", image: p2 },
    { id: "swing", name: "Swing Shower Enclosure", image: p3 },
    { id: "partial", name: "Partial Shower Enclosure", image: p4 }
  ];

  // Instagram auto-thumbnail - Add your 7 Instagram reel URLs here
  const reelLinks = [
    "https://www.instagram.com/reel/DRbpx8ckoql/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/reel/DRmRUazDlA1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/reel/DRWlFMyEi1b/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/reel/DRULM6wEoyJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/reel/DQ9VIT7EvM7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/reel/DQn9BDXkjgT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
    "https://www.instagram.com/reel/DQG72X8jhyX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  ];
  const reels = reelLinks.map((link) => {
    const id = link.split("/reel/")[1]?.split("/")[0] || "";
    return { thumb: `https://www.instagram.com/reel/${id}/media/?size=l`, link };
  });

  return (
    <>
      {/* Banner */}
      <BannerSlider slides={slides} heightClass="h-[560px]" />

     <AboutUs />


     {/* PRODUCTS SECTION — IMAGE + BUTTON ONLY */}
<section className="py-16 bg-gray-200">
  <div className="max-w-7xl mx-auto px-6">
    
    <h2 className="text-4xl font-heading font-bold text-gray-900 text-center">
      Our Shower Enclosures Collection
    </h2>

    <p className="text-center text-gray-600 mt-2 mb-12">
      The most popular products from the collection
    </p>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
      {products.map((p) => (
        <div
          key={p.id}
          className="bg-white rounded-2xl shadow-sm overflow-hidden pb-6 hover:shadow-md transition"
        >
          {/* IMAGE ONLY */}
          <div>
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-80 object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* BUTTON ONLY */}
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setSelectedProduct(p)}
              className="flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-black transition"
            >
              View Collections
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

      {/* WHY CHOOSE US SECTION */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-6 text-center">
    
    <h2 className="text-4xl font-heading font-bold text-gray-900">
      Why Choose Cloud Enclosure?
    </h2>

    <p className="text-gray-600 mt-3 mb-14 max-w-2xl mx-auto">
      Trusted by hundreds of homeowners for our quality, engineering, and 
      unmatched precision in shower enclosure installations.
    </p>

    {/* FEATURES GRID */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

      {/* CARD 1 */}
      <div className="p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
        <div className="text-teal-600 text-4xl mb-4">🛡️</div>
        <h3 className="text-lg font-semibold mb-2">Saint-Gobain Toughened Glass</h3>
        <p className="text-gray-600">
          Premium 8mm / 10mm toughened safety glass used for long-lasting strength.
        </p>
      </div>

      {/* CARD 2 */}
      <div className="p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
        <div className="text-teal-600 text-4xl mb-4">⚙️</div>
        <h3 className="text-lg font-semibold mb-2">SS304 Rust-Proof Hardware</h3>
        <p className="text-gray-600">
          High-grade stainless steel fittings ensure durability and corrosion resistance.
        </p>
      </div>

      {/* CARD 3 */}
      <div className="p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
        <div className="text-teal-600 text-4xl mb-4">📐</div>
        <h3 className="text-lg font-semibold mb-2">Laser-Precision Measurements</h3>
        <p className="text-gray-600">
          Accurate measurements for a perfect, leak-proof fit every single time.
        </p>
      </div>

      {/* CARD 4 */}
      <div className="p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
        <div className="text-teal-600 text-4xl mb-4">🔧</div>
        <h3 className="text-lg font-semibold mb-2">Expert Installation Team</h3>
        <p className="text-gray-600">
          Experienced technicians trained specifically in enclosure installation.
        </p>
      </div>

      {/* CARD 5 */}
      <div className="p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
        <div className="text-teal-600 text-4xl mb-4">💧</div>
        <h3 className="text-lg font-semibold mb-2">Zero-Leak Guarantee</h3>
        <p className="text-gray-600">
          Leak-proof design with high-grade sealing materials for a clean bathroom.
        </p>
      </div>

      {/* CARD 6 */}
      <div className="p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
        <div className="text-teal-600 text-4xl mb-4">🛠️</div>
        <h3 className="text-lg font-semibold mb-2">7-Year Hardware Warranty</h3>
        <p className="text-gray-600">
          Long-term warranty ensuring peace of mind and product reliability.
        </p>
      </div>

    </div>
  </div>
</section>

{/* BRANDS WE TRUST - Gray Background */}
<div className="bg-gray-200">
  <Brands />
</div>

{/* Past Projects - White Background */}
<div className="bg-white">
  <PastProjects />
</div>

{/* Testimonials - Darker Gray Background */}
<section className="py-16 bg-gray-200">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-center text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-12">Families Who Trust Us</h2>
    <TestimonialCarousel />
  </div>
</section>

{/* Instagram - White Background */}
<div className="bg-white">
  <InstagramReel items={reels} />
</div>

      {/* Product Inquiry Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedProduct(null)}>
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[95vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative bg-gradient-to-br from-teal-600 to-teal-700 rounded-t-3xl p-8 text-white">
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-heading font-bold">{selectedProduct.name}</h2>
                  <p className="text-teal-100 text-sm">Premium Shower Enclosure</p>
                </div>
              </div>
              
              <p className="text-white/90 text-sm">Fill in your details below and we'll send you pricing, availability, and product information directly to your email.</p>
            </div>

            <div className="p-8">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-4">We've received your inquiry for <span className="font-semibold">{selectedProduct.name}</span></p>
                  <p className="text-sm text-gray-500">Our team will contact you shortly with detailed information.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-teal-500 transition"
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Contact Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-teal-500 transition"
                        placeholder="+91 98765 43210"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-teal-500 transition"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Floor no <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-teal-500 transition"
                      placeholder="City, State"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Requirements (Optional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-teal-500 transition resize-none"
                      placeholder="Tell us about your bathroom dimensions, preferred finish, or any specific requirements..."
                    />
                  </div>

                  <div className="flex gap-4">
                    <button
                      type="submit"
                      className="flex-1 px-6 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white rounded-xl font-semibold hover:from-teal-700 hover:to-teal-800 transition shadow-lg hover:shadow-xl"
                    >
                      Submit 
                    </button>
                    <button
                      type="button"
                      onClick={() => setFormData({ name: "", email: "", phone: "", address: "", message: "" })}
                      className="px-6 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition"
                    >
                      Reset
                    </button>
                  </div>

                  <p className="text-xs text-center text-gray-500">
                    By submitting, you agree to receive product information and quotes via email.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
      <Footer/>
    </>
  );
}
