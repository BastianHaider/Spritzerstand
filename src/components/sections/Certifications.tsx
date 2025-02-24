import { SlideIn } from "@/components/ui/slide-in";

export default function Certifications() {
  return (
    <section className="py-20 sm:py-32 bg-gray-50">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <SlideIn direction="right">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight font-scandia mb-4">
              Zertifizierungen
            </h2>
          </SlideIn>
          <p className="text-gray-600 text-lg">
            Unsere Expertise wird durch offizielle Zertifizierungen bestätigt
          </p>
        </div>

        <div className="flex justify-center items-center gap-8 flex-wrap">
          <div className="w-32 h-32 md:w-40 md:h-40 relative">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60"
              alt="Google Ads Search Certification"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-32 h-32 md:w-40 md:h-40 relative bg-white p-2 rounded-lg shadow-sm">
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://whitepeak.at"
              alt="WhitePeak Website QR Code"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
