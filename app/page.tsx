import HeroSplit from "@/components/HeroSplit";
import TestimonialCard from "@/components/TestimonialCard";
import Link from "next/link";
import { testimonials } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="bg-warmWhite">
      <HeroSplit />

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 bg-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-darkBrown mb-2">
              Kenapa Pilih Kami?
            </h2>
            <p className="text-deepBrown/70 text-sm sm:text-base">
              Les private one-on-one dengan pengajar berpengalaman
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { icon: "🎵", title: "Private" },
              { icon: "👨‍🏫", title: "Berpengalaman" },
              { icon: "🏠", title: "Nyaman" },
              { icon: "📅", title: "Fleksibel" },
              { icon: "⏰", title: "1 Jam" },
              { icon: "🎯", title: "Semua Tingkat" },
            ].map((item, i) => (
              <div key={i} className="bg-warmWhite rounded-xl p-4 text-center shadow-sm">
                <span className="text-3xl mb-2 block">{item.icon}</span>
                <p className="text-sm font-medium text-darkBrown">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 bg-warmWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-darkBrown mb-2">
              Testimoni Siswa
            </h2>
            <p className="text-deepBrown/70 text-sm sm:text-base">
              Kata mereka yang sudah belajar di Faeyza Music
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-darkBrown">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-3">
            Siap Mulai Belajar Musik?
          </h2>
          <p className="text-white/80 mb-6 text-sm sm:text-base">
            Hubungi kami untuk informasi kursus dan pendaftaran
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/kursus"
              className="inline-flex items-center justify-center gap-2 bg-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors"
            >
              Lihat Kursus
            </Link>
            <Link
              href="/kontak"
              className="inline-flex items-center justify-center gap-2 bg-white text-darkBrown px-6 py-3 rounded-lg font-semibold hover:bg-cream transition-colors"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}