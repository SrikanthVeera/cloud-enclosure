// src/pages/About.tsx
import AboutUs from "../components/AboutUs";
import PastProjects from "../components/PastProjects";
import p1 from "../assets/2.webp";
import p2 from "../assets/4.webp";
import p3 from "../assets/6.webp";
import p4 from "../assets/8.webp";
import proj1 from "../assets/project/p1.jpg";
import proj2 from "../assets/project/p2.jpg";
import proj3 from "../assets/project/p3.jpg";
import proj4 from "../assets/project/p4.jpg";

export default function About() {
  // Products showcase
  const products = [
    { id: "1", name: "Clear Shower Enclosure", image: p1 },
    { id: "2", name: "Frosted Shower Enclosure", image: p2 },
    { id: "3", name: "Tinted Shower Enclosure", image: p3 },
    { id: "4", name: "Fluted Shower Enclosure", image: p4 },
  ];

  return (
    <div>
      {/* About Us Section - White Background */}
      <div className="bg-white">
        <AboutUs />
      </div>

      {/* Products Section - Gray Background */}
      <section className="py-16 bg-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              Our Products
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Premium shower enclosures crafted with precision and designed for modern Indian homes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition group"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{product.name}</h3>
                  <a
                    href="/products"
                    className="inline-flex items-center gap-2 px-6 py-2 bg-gray-900 text-white rounded-full text-sm font-semibold hover:bg-black transition"
                  >
                    View Details
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3 border-2 border-gray-900 text-gray-900 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition"
            >
              View All Products
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Video Section - White Background */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900">
              See Our Work in Action
            </h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Watch how we transform bathrooms with precision installation and premium quality materials.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Video 1 */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group">
              <div className="relative aspect-video bg-gray-900">
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster={proj1}
                >
                  <source src="/video/CE.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Installation Process</h3>
                <p className="text-gray-600 text-sm">
                  Watch our expert team install a premium shower enclosure with precision and care.
                </p>
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group">
              <div className="relative aspect-video bg-gray-900">
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster={proj2}
                >
                  <source src="/video/CE1.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Product Showcase</h3>
                <p className="text-gray-600 text-sm">
                  Explore our range of shower enclosures and see the quality craftsmanship up close.
                </p>
              </div>
            </div>

            {/* Video 3 */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group">
              <div className="relative aspect-video bg-gray-900">
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster={proj3}
                >
                  <source src="/video/CE2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Stories</h3>
                <p className="text-gray-600 text-sm">
                  Hear from our satisfied customers about their experience with Cloud Enclosure.
                </p>
              </div>
            </div>

            {/* Video 4 */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition group">
              <div className="relative aspect-video bg-gray-900">
                <video
                  className="w-full h-full object-cover"
                  controls
                  poster={proj4}
                >
                  <source src="/video/CE3.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Maintenance Tips</h3>
                <p className="text-gray-600 text-sm">
                  Learn how to keep your shower enclosure looking pristine for years to come.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Past Projects Section - Darker Gray Background */}
      

      {/* CTA Section - Gray Background */}
      <section className="py-16 bg-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-700 text-lg mb-8">
            Let us transform your bathroom with a premium shower enclosure installation.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold shadow-lg hover:bg-black transition"
          >
            Book a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
