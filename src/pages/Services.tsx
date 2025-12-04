import { SITE } from "../data/siteContent";
import ProductGrid from "../components/ProductGrid";

export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Services & Enclosure Types</h1>
      <p className="text-gray-700 mb-8">
        Choose the shape and finish that suits your bathroom.
      </p>

      <h2 className="text-xl font-semibold mb-4">Enclosure Types</h2>
      <ProductGrid
        items={SITE.services.enclosureTypes.map((e) => ({
          id: e.id,
          name: e.name,
          desc: e.desc,
        }))}
      />

      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4">Hardware Finishes</h2>
        <div className="flex flex-wrap gap-3">
          {SITE.services.finishes.map((f) => (
            <div key={f} className="px-4 py-2 border rounded">
              {f}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
