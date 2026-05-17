import Link from "next/link";
import { Music, ArrowRight } from "lucide-react";

export default function HeroSplit() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center bg-warmWhite py-8 lg:py-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-cream px-4 py-2 rounded-full mx-auto lg:mx-0">
              <Music className="w-4 h-4 text-gold" />
              <span className="text-sm text-darkBrown font-medium">
                Bimbel Musik di Manna, Bengkulu
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-darkBrown leading-tight px-4 lg:px-0">
              Faeyza Music <span className="text-gold">Manna</span>
            </h1>

            <p className="text-base sm:text-lg text-deepBrown/80 max-w-xl mx-auto lg:mx-0 px-4 lg:px-0 leading-relaxed">
              Menerima bimbel atau les musik <strong>Biola, Piano, Gitar, dan Vocal</strong>.
              Mulai perjalanan musikmu bersama pengajar berpengalaman di Manna, Bengkulu.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 px-4 lg:px-0">
              <Link
                href="/kursus"
                className="inline-flex items-center justify-center gap-2 bg-gold text-white px-5 sm:px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors text-sm sm:text-base"
              >
                Lihat Kursus
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center gap-2 bg-cream text-darkBrown px-5 sm:px-6 py-3 rounded-lg font-semibold hover:bg-cream/80 transition-colors border border-darkBrown/10 text-sm sm:text-base"
              >
                Daftar Sekarang
              </Link>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Background circles */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/30 via-cream to-darkBrown/20 rounded-full" />
              <div className="absolute inset-6 sm:inset-8 bg-gradient-to-br from-gold/40 to-darkBrown/30 rounded-full" />

              {/* Main logo */}
              <div className="absolute inset-12 sm:inset-16 lg:inset-20 flex items-center justify-center">
                <img src="/logo.png" alt="Faeyza Music" className="w-full h-full object-contain" />
              </div>

              {/* Floating animated icons */}
              <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 bg-warmWhite p-3 sm:p-4 rounded-xl shadow-lg animate-bounce">
                <span className="text-2xl sm:text-3xl">🎹</span>
              </div>
              <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 bg-warmWhite p-3 sm:p-4 rounded-xl shadow-lg animate-bounce" style={{ animationDelay: "0.2s" }}>
                <span className="text-2xl sm:text-3xl">🎸</span>
              </div>
              <div className="absolute top-1/2 -right-4 sm:-right-6 bg-warmWhite p-2 sm:p-3 rounded-xl shadow-lg animate-bounce" style={{ animationDelay: "0.4s" }}>
                <span className="text-xl sm:text-2xl">🎻</span>
              </div>
              <div className="absolute top-4 sm:top-8 -left-4 sm:-left-6 bg-warmWhite p-2 sm:p-3 rounded-xl shadow-lg animate-bounce" style={{ animationDelay: "0.6s" }}>
                <span className="text-xl sm:text-2xl">🎤</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}