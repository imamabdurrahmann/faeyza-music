import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/lib/data";
import { Star } from "lucide-react";

export default function TestimonialPage() {
  return (
    <div className="bg-warmWhite min-h-screen">
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-warmWhite px-4 py-2 rounded-full mb-4">
              <Star className="w-4 h-4 text-gold" />
              <span className="text-sm text-darkBrown font-medium">Testimonial</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-darkBrown mb-4">
              Apa Kata Siswa Kami
            </h1>
            <p className="text-deepBrown/70 max-w-2xl mx-auto">
              Testimoni dari siswa dan orang tua yang telah belajar di Faeyza Music
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}