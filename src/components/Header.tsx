// src/components/UniqueHeader.tsx
import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function UniqueHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState("");
  const searchRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchOpen) searchRef.current?.focus();
  }, [searchOpen]);

  function onSearch(e?: React.FormEvent) {
    e?.preventDefault();
    const query = q.trim();
    if (!query) return;
    navigate(`/search?q=${encodeURIComponent(query)}`);
    setSearchOpen(false);
    setMobileOpen(false);
  }

  return (
    <header className="relative">
      {/* thin top accent bar */}
      <div className="h-1 bg-gradient-to-r from-amber-500 via-rose-500 to-teal-500" />

      <div className="bg-[#0f1213] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Left: Logo */}
            <div className="flex items-center gap-3">
              <Link to="/" className="flex items-center gap-3">
                <img 
                  src="/logo.jpg" 
                  alt="Cloud Enclosure Logo" 
                  className="h-12 w-auto object-contain"
                />
                <div className="hidden sm:block">
                  <div className="text-lg font-bold tracking-wide">Cloud Enclosure</div>
                  <div className="text-xs text-amber-300 -mt-0.5">Shower Enclosures • Precision Fit</div>
                </div>
              </Link>
            </div>

            {/* Center: Nav */}
            <nav className="hidden lg:flex gap-8 items-center">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/products", label: "Products" },
                { to: "/projects", label: "Projects" },
                { to: "/contact", label: "Contact Us" },
              ].map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="relative px-1 py-1 text-sm font-medium text-gray-100 hover:text-white"
                >
                  <span>{item.label}</span>
                  {/* animated underline */}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Right: contact + search */}
            <div className="flex items-center gap-4">
              <div className="hidden md:flex flex-col text-right mr-2">
                <span className="text-xs text-gray-300">Call us:</span>
                <a href="tel:+918423456789" className="text-sm font-semibold text-amber-300 hover:text-amber-400">
                  084 234 56 789
                </a>
              </div>

              {/* Search - desktop */}
              <div className="hidden md:flex items-center gap-2">
                <form onSubmit={onSearch} className="flex items-center">
                  <input
                    ref={searchRef}
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    placeholder="Search..."
                    aria-label="Search"
                    className={`transition-all duration-200 bg-[#0f1213] border border-gray-700 text-sm placeholder-gray-400 rounded-full px-3 py-1 focus:outline-none focus:ring-2 focus:ring-amber-400 ${
                      searchOpen ? "w-48 opacity-100" : "w-0 px-0 opacity-0"
                    }`}
                    onBlur={() => { if (!q) setSearchOpen(false); }}
                  />
                  <button
                    type="button"
                    aria-label="Open search"
                    onClick={() => setSearchOpen((s) => !s)}
                    className="p-2 rounded-full hover:bg-white/5"
                  >
                    <svg className="w-5 h-5 text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                    </svg>
                  </button>
                </form>
              </div>

              {/* Mobile controls */}
              <div className="md:hidden flex items-center gap-2">
                <button
                  aria-label="Open search"
                  onClick={() => setSearchOpen((s) => !s)}
                  className="p-2 rounded-md hover:bg-white/5"
                >
                  <svg className="w-5 h-5 text-gray-200" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
                  </svg>
                </button>

                <button
                  aria-label="Open menu"
                  onClick={() => setMobileOpen((v) => !v)}
                  className="p-2 rounded-md border border-gray-700"
                >
                  <svg className="w-5 h-5 text-gray-200" viewBox="0 0 24 24" fill="none">
                    <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* mobile search input */}
        {searchOpen && (
          <div className="md:hidden px-4 pb-3">
            <form onSubmit={onSearch} className="flex gap-2">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                className="flex-1 rounded-md border border-gray-600 px-3 py-2 bg-black/40 placeholder-gray-400 text-white"
                placeholder="Search products, articles..."
                aria-label="Search"
              />
              <button type="submit" className="px-3 py-2 bg-amber-500 text-black rounded">Go</button>
            </form>
          </div>
        )}

        {/* mobile nav slide-down */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-800 bg-[#0f1213cc]">
            <div className="px-4 py-4 flex flex-col gap-3">
              <Link to="/" onClick={() => setMobileOpen(false)} className="py-2 text-white">Home</Link>
              <Link to="/about" onClick={() => setMobileOpen(false)} className="py-2 text-white">About Us</Link>
              <Link to="/products" onClick={() => setMobileOpen(false)} className="py-2 text-white">Products</Link>
              <Link to="/projects" onClick={() => setMobileOpen(false)} className="py-2 text-white">Projects</Link>
              <Link to="/contact" onClick={() => setMobileOpen(false)} className="py-2 text-white">Contact Us</Link>

              <div className="pt-2 border-t border-gray-800 mt-2">
                <a href="tel:+918423456789" className="block text-amber-300 font-semibold">084 234 56 789</a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
