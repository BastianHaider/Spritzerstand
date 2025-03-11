import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Hero from "./sections/Hero";
import ClientLogos from "./sections/ClientLogos";
import Services from "./sections/Services";
import AboutUs from "./sections/AboutUs";
import CaseStudy from "./sections/CaseStudy";
import Certifications from "./sections/Certifications";
import Testimonials from "./sections/Testimonials";
import FAQ from "./sections/FAQ";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Helmet>
        <title>
          Marketing Agentur Linz | WhitePeak Digital Marketing Oberösterreich
        </title>
        <meta
          name="description"
          content="Ihre Marketing Agentur in Linz ✓ SEO ✓ Content Marketing ✓ Performance Marketing. Nr. 1 Digital Marketing Agentur in Oberösterreich mit nachweisbaren Erfolgen."
        />
        <meta
          name="keywords"
          content="Marketing Agentur Linz, Marketing Linz, Werbeagentur Linz, Digital Marketing Oberösterreich, SEO Agentur Linz, Online Marketing Linz, Content Marketing Linz, Social Media Marketing Oberösterreich"
        />
        <link rel="canonical" href="https://whitepeak.at" />
      </Helmet>
      <Header />
      <main className="flex-grow">
        <Hero />
        <ClientLogos />
        <Services />
        <CaseStudy />
        <AboutUs />
        <Testimonials />
        <Certifications />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
