// src/App.tsx
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import BookingModal from "./components/BookingModal";

export default function App() {
  const [isBookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <Layout onOpenBooking={() => setBookingOpen(true)}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>

      <BookingModal open={isBookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}
