// src/components/Layout.tsx

import Header from "./Header";

type LayoutProps = {
  children?: React.ReactNode;   // optional children
  onOpenBooking?: () => void;   // optional callback
};

export default function Layout({ children, onOpenBooking }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" className="sr-only">Skip to content</a>

      {/* Pass callback safely */}
      <Header onOpenBooking={onOpenBooking ?? (() => {})} />

      <main id="main" className="flex-1">
        {children}
      </main>

      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <p>© {new Date().getFullYear()} Cloud Enclosure — Crafted for your space.</p>
        </div>
      </footer>
    </div>
  );
}
