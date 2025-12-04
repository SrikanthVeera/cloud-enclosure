// src/pages/Products.tsx
import { useState } from "react";
import img1 from "../assets/2.webp";
import img2 from "../assets/4.webp";
import img3 from "../assets/6.webp";
import img4 from "../assets/8.webp";
import banner1 from "../assets/banner3.jpg";
import banner2 from "../assets/banner2.jpg";

interface Product {
  id: number;
  name: string;
  tagline: string;
  description: string;
  image: string;
  price?: string;
  features?: string[];
}

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
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
    // Here you would typically send the form data to your backend or email service
    console.log("Form submitted:", { ...formData, product: selectedProduct?.name });
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setSelectedProduct(null);
      setFormData({ name: "", email: "", phone: "", address: "", message: "" });
    }, 3000);
  };

  const shapes: Product[] = [
    {
      id: 101,
      name: "The L-Shape Corner",
      tagline: "Maximizes Floor Space",
      description: "Creates a neat square cabin in the corner. Perfect for maximizing floor space.",
      image: img1,
      price: "₹45,000 - ₹65,000",
      features: ["Corner installation", "Space-efficient design", "Sliding or hinged door options", "Custom sizing available"],
    },
    {
      id: 102,
      name: "The Wall-to-Wall Slider",
      tagline: "Space-Saving Solution",
      description: "Smooth gliding doors for bathrooms where space is tight.",
      image: img2,
      price: "₹40,000 - ₹55,000",
      features: ["Smooth sliding mechanism", "No door swing space needed", "Easy maintenance", "Modern aesthetic"],
    },
    {
      id: 103,
      name: "The Partial Walk-In",
      tagline: "Open & Airy",
      description: "A fixed glass shield. Open, airy, and easiest to clean.",
      image: img3,
      price: "₹35,000 - ₹50,000",
      features: ["Frameless design", "Easy to clean", "Spacious feel", "Minimal hardware"],
    },
    {
      id: 104,
      name: "The Swing Door",
      tagline: "Classic Luxury",
      description: "A classic luxury entrance for larger shower areas.",
      image: img4,
      price: "₹50,000 - ₹70,000",
      features: ["Premium hinges", "Wide opening", "Elegant design", "Suitable for large spaces"],
    },
  ];

  const products: Product[] = [
    {
      id: 1,
      name: "Clear Shower Enclosure",
      tagline: "The Invisible Upgrade",
      description: "Open up your bathroom instantly, making even compact spaces feel spacious and airy. Clean, bright, and modern - perfect when you want a seamless look that never goes out of style.",
      image: img1,
      price: "₹38,000 - ₹58,000",
      features: ["Crystal clear glass", "Maximizes light", "Easy to maintain", "Timeless design"],
    },
    {
      id: 2,
      name: "Frosted Shower Enclosure",
      tagline: "The Soft Luxe Finish",
      description: "A beautifully diffused, matte surface that elevates the ambience of any bathroom. It softens the light, adds depth, and brings a calm, spa-like elegance to your everyday routine.",
      image: img2,
      price: "₹42,000 - ₹62,000",
      features: ["Privacy without darkness", "Soft light diffusion", "Elegant matte finish", "Spa-like ambiance"],
    },
    {
      id: 3,
      name: "Tinted Shower Enclosure",
      tagline: "The Elegant Mood Creator",
      description: "Available in refined grey or warm bronze tones, it adds depth and character to your bathroom. Ideal for those who want subtle sophistication without compromising clarity or quality.",
      image: img3,
      price: "₹45,000 - ₹68,000",
      features: ["Grey or bronze tones", "Sophisticated look", "UV protection", "Premium quality glass"],
    },
    {
      id: 4,
      name: "Fluted Shower Enclosure",
      tagline: "The Designer's Signature Choice",
      description: "Distinctive ribbed texture with a timeless, high-end aesthetic. It adds architectural character and a refined vintage-modern charm that instantly elevates your space.",
      image: img4,
      price: "₹52,000 - ₹75,000",
      features: ["Unique ribbed texture", "Designer aesthetic", "Vintage-modern charm", "Architectural character"],
    },
    {
      id: 5,
      name: "Premium L-Shape Enclosure",
      tagline: "Corner Perfection",
      description: "Maximizes corner space with elegant glass panels and smooth sliding doors. Perfect for modern bathrooms with limited space.",
      image: banner1,
      price: "₹48,000 - ₹70,000",
      features: ["Corner optimization", "Sliding doors", "Modern design", "Space-efficient"],
    },
    {
      id: 6,
      name: "Luxury Walk-In Enclosure",
      tagline: "Open Concept Elegance",
      description: "Frameless design with minimal hardware for a spa-like experience. Easy to clean and maintain with premium quality glass.",
      image: banner2,
      price: "₹55,000 - ₹85,000",
      features: ["Frameless design", "Minimal hardware", "Spa-like experience", "Premium glass quality"],
    },
  ];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.tagline.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-white">
      {/* Product Inquiry Modal - Form Only */}
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
                  <p className="text-teal-100 text-sm">{selectedProduct.tagline}</p>
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
                  <div className="grid md:grid-cols-2 gap-5">
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
                      placeholder="09"
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
      {/* Hero Section - White Background */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 leading-tight">
            Crafted for Your Space.
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you have a compact apartment bathroom or a master suite, we have a shape that fits.
          </p>
        </div>
      </section>

      {/* Enclosure Shapes Section - Gray Background */}
      <section className="py-16 bg-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 text-center mb-12">
            The Enclosure Shapes
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {shapes.map((shape, index) => (
              <div key={shape.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
                <div className="h-48 overflow-hidden">
                  <img src={shape.image} alt={shape.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-teal-100 rounded-full flex items-center justify-center">
                      <span className="text-lg font-bold text-teal-600">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{shape.name}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{shape.description}</p>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => setSelectedProduct(shape)}
                      className="flex-1 px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-black transition"
                    >
                      Learn More
                    </button>
                    <a
                      href="/contact"
                      className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-full text-sm font-semibold hover:bg-gray-50 transition text-center"
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      {/* Enclosure Selection Section - White Background */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 text-center mb-4">
            The Enclosure Selection
          </h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Your privacy and style matter. Choose the enclosure that fits your mood.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent shadow-sm"
              />
              <svg
                className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition">
                <div className="h-64 overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-sm font-medium text-teal-600 mb-3">{product.tagline}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {product.description}
                  </p>
                  <div className="flex gap-3">
                    <button 
                      onClick={() => setSelectedProduct(product)}
                      className="flex-1 px-4 py-2 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-black transition"
                    >
                      View Details
                    </button>
                    <a
                      href="/contact"
                      className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-full text-sm font-semibold hover:bg-gray-50 transition text-center"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found matching your search.</p>
            </div>
          )}
        </div>
      </section>
       


       {/* Fittings Section - Gray Background */}
      <section className="py-16 bg-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 text-center mb-4">
            The Jewelry of Your Bathroom
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Our rust-proof SS304 fittings don't just hold the glass; they define the style.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Chrome */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full mb-4 shadow-lg"></div>
              <h3 className="text-xl font-semibold mb-2">Chrome</h3>
              <p className="text-sm font-medium text-teal-300 mb-3">Timeless Shine</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                The classic mirror-finish that matches standard taps and showers. Clean and crisp.
              </p>
            </div>

            {/* Matte Black */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition">
              <div className="w-16 h-16 bg-gradient-to-br from-gray-800 to-black rounded-full mb-4 shadow-lg"></div>
              <h3 className="text-xl font-semibold mb-2">Matte Black</h3>
              <p className="text-sm font-medium text-teal-300 mb-3">Bold & Modern</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Industrial, sleek, and defines the edges of the glass. A favorite for contemporary homes.
              </p>
            </div>

            {/* Gold */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mb-4 shadow-lg"></div>
              <h3 className="text-xl font-semibold mb-2">Gold</h3>
              <p className="text-sm font-medium text-teal-300 mb-3">Pure Luxury</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                Adds a warm, rich glow to your bathroom. Perfect for adding a touch of royalty.
              </p>
            </div>

            {/* Rose Gold */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-300 to-orange-300 rounded-full mb-4 shadow-lg"></div>
              <h3 className="text-xl font-semibold mb-2">Rose Gold</h3>
              <p className="text-sm font-medium text-teal-300 mb-3">Soft Elegance</p>
              <p className="text-gray-300 text-sm leading-relaxed">
                A subtle, coppery-pink hue that looks stunning against white or grey tiles.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
            Ready to Transform Your Bathroom?
          </h2>
          <p className="text-gray-600 mb-8">
            Book a free consultation and let us help you choose the perfect enclosure for your space.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold shadow-lg hover:bg-black transition"
          >
            Book a Visit
          </a>
        </div>
      </section>
    </div>
  );
}
