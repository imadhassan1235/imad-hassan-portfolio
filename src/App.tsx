import { lazy, Suspense, useEffect } from "react";
import { Route, Routes, useRoutePath } from "./lib/router";
import { initLenis } from "./lib/lenis";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Speaking = lazy(() => import("./pages/Speaking"));
const Courses = lazy(() => import("./pages/Courses"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));

export default function App() {
  const path = useRoutePath();

  useEffect(() => {
    const lenis = initLenis();
    return () => lenis.destroy();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [path]);

  return (
    <>
      <Nav />
      <main>
        <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" aria-label="Loading page" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/speaking" element={<Speaking />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
