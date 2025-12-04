// src/components/ProductGrid.tsx
import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import ProductModal from "./ProductModal";

type Item = {
  id: string;
  name: string;
  desc?: string;
  image?: string;
  tags?: string[];
  category?: string;
};

export default function ProductGrid({ items }: { items: Item[] }) {
  const [q, setQ] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [selected, setSelected] = useState<Item | undefined>(undefined);

  const categories = useMemo(() => {
    const s = new Set<string>();
    items.forEach((i) => i.category && s.add(i.category));
    return Array.from(s);
  }, [items]);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return items.filter((i) => {
      if (activeCategory && i.category !== activeCategory) return false;
      if (!query) return true;
      return (
        (i.name + " " + (i.desc ?? "") + " " + (i.tags ?? []).join(" "))
          .toLowerCase()
          .includes(query)
      );
    });
  }, [items, q, activeCategory]);

  return (
    <section>
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-lg font-semibold">Our Enclosures</h3>
          <p className="text-sm text-gray-600">Choose a style and finish that fits your bathroom.</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-3 py-1 rounded ${activeCategory === null ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-700"}`}
            >
              All
            </button>

            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1 rounded ${activeCategory === cat ? "bg-teal-600 text-white" : "bg-gray-100 text-gray-700"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search enclosures..."
              className="border rounded-full px-4 py-2 w-56 focus:outline-none focus:ring"
            />
            {q && (
              <button onClick={() => setQ("")} aria-label="clear search" className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500">
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filtered.length === 0 ? (
          <div className="col-span-full text-center text-gray-500 py-12">No results found.</div>
        ) : (
          filtered.map((i) => (
            <ProductCard
              key={i.id}
              id={i.id}
              name={i.name}
              desc={i.desc}
              image={i.image}
              tags={i.tags}
              onView={(it) => setSelected(it as Item)}
            />
          ))
        )}
      </div>

      <ProductModal open={!!selected} item={selected} onClose={() => setSelected(undefined)} />
    </section>
  );
}
