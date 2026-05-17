import Link from "next/link";
import Image from "next/image";
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
              <img src="/logo.png" alt="Faeyza Music Logo" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}