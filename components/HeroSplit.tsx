import Link from "next/link";
import { Music, ArrowRight } from "lucide-react";

export default function HeroSplit() {
  return (
    <section className="min-h-[85vh] flex items-center bg-warmWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
          <div className="lg:col-span-3 space-y-6">
            <div className="inline-flex items-center gap-2 bg-cream px-4 py-2 rounded-full">
              <Music className="w-4 h-4 text-gold" />
              <span className="text-sm text-darkBrown font-medium">
                Bimbel Musik di Manna, Bengkulu
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-darkBrown leading-tight">
              Faeyza Music <span className="text-gold">Manna</span>
            </h1>

            <p className="text-lg text-deepBrown/80 max-w-xl leading-relaxed">
              Menerima bimbel atau les musik <strong>Biola, Piano, Gitar, dan Vocal</strong>.
              Mulai perjalanan musikmu bersama pengajar berpengalaman di Manna, Bengkulu.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/kursus"
                className="inline-flex items-center justify-center gap-2 bg-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors"
              >
                Lihat Kursus
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center gap-2 bg-cream text-darkBrown px-6 py-3 rounded-lg font-semibold hover:bg-cream/80 transition-colors border border-darkBrown/10"
              >
                Daftar Sekarang
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/30 via-cream to-darkBrown/20 rounded-full" />
              <div className="absolute inset-8 bg-gradient-to-br from-gold/40 to-darkBrown/30 rounded-full" />
              <div className="absolute inset-16 bg-gradient-to-br from-gold to-darkBrown rounded-full flex items-center justify-center">
                <span className="text-6xl">🎵</span>
              </div>
              <div className="absolute -top-4 -right-4 bg-warmWhite p-4 rounded-xl shadow-lg animate-bounce">
                <span className="text-3xl">🎹</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-warmWhite p-4 rounded-xl shadow-lg animate-bounce" style={{ animationDelay: "0.2s" }}>
                <span className="text-3xl">🎸</span>
              </div>
              <div className="absolute top-1/2 -right-8 bg-warmWhite p-3 rounded-xl shadow-lg animate-bounce" style={{ animationDelay: "0.4s" }}>
                <span className="text-2xl">🎻</span>
              </div>
              <div className="absolute top-1/4 -left-6 bg-warmWhite p-3 rounded-xl shadow-lg animate-bounce" style={{ animationDelay: "0.6s" }}>
                <span className="text-2xl">🎤</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}