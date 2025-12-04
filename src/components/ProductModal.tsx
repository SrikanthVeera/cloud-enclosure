// src/components/ProductModal.tsx
import React from "react";

type Item = { id: string; name: string; desc?: string; image?: string; tags?: string[] };

export default function ProductModal({ open, onClose, item }: { open: boolean; onClose: () => void; item?: Item }) {
  if (!open || !item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative w-full max-w-3xl bg-white rounded-xl shadow-2xl overflow-hidden">
        <button
          aria-label="Close"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 bg-white/70 p-2 rounded-full"
        >
          ✕
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="h-80 md:h-full">
            <img src={item.image ?? "/placeholder-product.png"} alt={item.name} className="w-full h-full object-cover" />
          </div>

          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-3">{item.name}</h3>
            <div className="flex gap-2 mb-4">
              {(item.tags ?? []).map(t => <span key={t} className="text-xs bg-gray-100 px-2 py-1 rounded">{t}</span>)}
            </div>
            <p className="text-gray-700 mb-6">{item.desc ?? "Detailed description coming soon."}</p>

            <div className="flex items-center gap-3">
              <a href="/contact" className="px-4 py-2 bg-teal-600 text-white rounded-md">Request Quote</a>
              <a href="/products" className="text-sm text-gray-600 hover:underline">View product page</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
