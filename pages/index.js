import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Gallery from "../components/Gallery";
import Order from "../components/Order";
import Footer from "../components/Footer";

export default function Home() {
  useEffect(() => {
    document.title = "Killz Bites Hamburger Restaurant";
    window.onscroll = function () {
      scrollFunction();
    };
  }, []);

  function scrollFunction() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 20
    ) {
      document.getElementById("navshadow").classList.add("navShadow");
    } else {
      document.getElementById("navshadow").classList.remove("navShadow");
    }
  }
  return (
    <div>
      <Navigation />
      <Hero />
      <About />
      <Gallery />
      <Order />
      <Footer />
    </div>
  );
}
