import { useState } from "react";
import p1 from "../assets/project/p1.jpg";
import p2 from "../assets/project/p2.jpg";
import p3 from "../assets/project/p3.jpg";
import p4 from "../assets/project/p4.jpg";
import p5 from "../assets/project/p5.jpg";
import p6 from "../assets/project/p6.jpg";
import p7 from "../assets/project/p7.jpg";
import p8 from "../assets/project/p8.jpg";

type Project = {
  id: string;
  title: string;
  location: string;
  type: string;
  image: string;
  description: string;
  year: string;
};

const ALL_PROJECTS: Project[] = [
  { 
    id: "proj1", 
    title: "Rashmi satishi", 
    location: "📍Nagarabav", 
    type: "Swing Shower Enclosure",
    image: p1,
    description: "Premium clear glass enclosure with chrome fittings for a modern master bathroom.",
    year: "2024"
  },
  { 
    id: "proj2", 
    title: "Javidh ", 
    location: "📍Koramangala", 
    type: "L-Shape Corner Enclosure",
    image: p2,
    description: "Space-efficient L-shape design with frosted glass for enhanced privacy.",
    year: "2024"
  },
  { 
    id: "proj3", 
    title: "Priyanka ", 
    location: "📍mantri espana", 
    type: "Wall-to-Wall Slider",
    image: p3,
    description: "Sleek sliding door system with tinted glass and matte black hardware.",
    year: "2023"
  },
  { 
    id: "proj4", 
    title: "Villesh ", 
    location: "📍Sadashivanagar", 
    type: "Partial Walk-In",
    image: p4,
    description: "Minimalist walk-in design with frameless glass panel for an open feel.",
    year: "2023"
  },
  { 
    id: "proj5", 
    title: "Patil ", 
    location: "📍Bharathnagar", 
    type: "Swing Shower Enclosure",
    image: p5,
    description: "Luxury fluted glass enclosure with gold fittings for a premium bathroom.",
    year: "2024"
  },
  { 
    id: "proj6", 
    title: "Bhasker reddy", 
    location: " 📍sarjapura", 
    type: "L-Shape Corner Enclosure",
    image: p6,
    description: "Contemporary design with clear glass and rose gold hardware accents.",
    year: "2024"
  },
    { 
      id: "proj7", 
      title: "Akhilesh", 
      location: "📍Whitefield", 
      type: "Wall-to-Wall Slider",
      image: p7,
      description: "Compact sliding enclosure perfect for small bathroom spaces.",
      year: "2023"
    },
  { 
    id: "proj8", 
    title: "Reethu", 
    location: "📍Leela palace", 
    type: "Partial Walk-In",
    image: p8,
    description: "Elegant frameless walk-in with premium tinted glass and minimal hardware.",
    year: "2024"
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filterType, setFilterType] = useState<string>("All");

  const types = ["All", "Swing Shower Enclosure", "L-Shape Corner Enclosure", "Wall-to-Wall Slider", "Partial Walk-In"];

  const filteredProjects = filterType === "All" 
    ? ALL_PROJECTS 
    : ALL_PROJECTS.filter(p => p.type === filterType);

  return (
    <div className="bg-white">
      {/* Hero Section - White Background */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 leading-tight">
            Our Past Projects
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our curated archive of completed shower enclosure installations across India.
          </p>
        </div>
      </section>

      {/* Filter Section - Gray Background */}
      <section className="py-8 bg-gray-200 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-6 py-2 rounded-full font-semibold transition ${
                  filterType === type
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid - White Background */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-900">
                    {project.year}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs uppercase tracking-wide text-teal-600 font-semibold mb-2">
                    {project.type}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{project.location}</p>
                  <p className="text-sm text-gray-500 line-clamp-2">{project.description}</p>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No projects found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedProject(null)}>
          <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition z-10"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="h-96 overflow-hidden rounded-t-3xl">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="text-sm uppercase tracking-wide text-teal-600 font-semibold">
                  {selectedProject.type}
                </div>
                <div className="text-sm text-gray-500">{selectedProject.year}</div>
              </div>
              <h2 className="text-3xl font-heading font-bold text-gray-900 mb-2">{selectedProject.title}</h2>
              <p className="text-lg text-gray-600 mb-6">{selectedProject.location}</p>
              <p className="text-gray-700 leading-relaxed mb-8">{selectedProject.description}</p>
              
              <div className="bg-gray-50 rounded-2xl p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Highlights</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Saint-Gobain toughened glass</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">SS304 rust-proof hardware</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Precision laser measurements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Professional installation</span>
                  </li>
                </ul>
              </div>

              <div className="flex gap-4">
                <a
                  href="/contact"
                  className="flex-1 px-6 py-3 bg-gray-900 text-white rounded-full font-semibold text-center hover:bg-black transition"
                >
                  Start Your Project
                </a>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section - Gray Background */}
      <section className="py-16 bg-gray-200">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-heading font-bold text-gray-900 mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-gray-600 mb-8">
            Let us transform your bathroom with a premium shower enclosure installation.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-semibold shadow-lg hover:bg-black transition"
          >
            Book a Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
