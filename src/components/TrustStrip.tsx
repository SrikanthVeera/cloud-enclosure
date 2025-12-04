export default function TrustStrip() {
  return (
    <div className="bg-gray-50 py-4">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-4 text-sm">
          <span className="font-semibold">Saint-Gobain Toughened Glass</span>
          <span className="text-gray-500">•</span>
          <span className="font-semibold">SS304 Rust-proof fittings</span>
        </div>
        <div className="text-sm text-gray-700">
          Zero-mess installation. 7-year warranty on hardware.
        </div>
      </div>
    </div>
  );
}
