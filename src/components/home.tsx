import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import AboutUs from "./sections/AboutUs";
import CaseStudy from "./sections/CaseStudy";

function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <CaseStudy />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
