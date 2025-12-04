// src/components/Layout.tsx
import React from "react";
import Header from "./Header";

type LayoutProps = {
  children?: React.ReactNode; // made optional to avoid missing-children errors
  onOpenBooking?: () => void;
};

export default function Layout({ children, onOpenBooking }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main" className="sr-only">Skip to content</a>
      <Header onOpenBooking={onOpenBooking ?? (() => {})} />
      <main id="main" className="flex-1">{children}</main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-6">
          <p>© {new Date().getFullYear()} Cloud Enclosure — Crafted for your space.</p>
        </div>
      </footer>
    </div>
  );
}
