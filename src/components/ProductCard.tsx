// src/components/ProductCard.tsx
type Props = {
  id: string;
  name: string;
  image?: string;
  desc?: string;
  tags?: string[];
  onView?: (item: {
    id: string;
    name: string;
    image?: string;
    desc?: string;
    tags?: string[];
  }) => void;
};

export default function ProductCard({ id, name, image, tags = [], onView }: Props) {
  const placeholder = "/placeholder-product.png";

  return (
    <div className="group bg-white rounded-2xl shadow-sm overflow-hidden hover:shadow-xl transition">
      
      {/* IMAGE ONLY */}
      <div className="bg-gray-200 aspect-[4/5] overflow-hidden relative">
        <img
          src={image ?? placeholder}
          alt={name}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      {/* BUTTON ONLY */}
      <div className="p-6 flex justify-center">
        <button
          onClick={() => onView?.({ id, name, image, desc: "", tags })}
          className="flex items-center gap-3 px-7 py-3 bg-gray-900 text-white rounded-full font-semibold hover:bg-black transition"
        >
          View Collections
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
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
  );
}
