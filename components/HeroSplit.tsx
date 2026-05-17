import Link from "next/link";

export default function HeroSplit() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 staff-pattern" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-cream/80 px-4 py-2 rounded-full border border-gold/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-50"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
              </span>
              <span className="text-sm font-medium text-darkBrown">
                Les Private One-on-One
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-darkBrown">Faeyza</span>
              <br />
              <span className="gradient-text">Music</span>
              <span className="text-darkBrown"> Manna</span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-deepBrown/80 max-w-lg mx-auto lg:mx-0">
              Les piano, gitar, biola, dan vokal private one-on-one dengan pengajar berpengalaman di Manna, Bengkulu.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Link
                href="/kursus"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold to-gold/90 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
              >
                Lihat Kursus
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/kontak"
                className="inline-flex items-center justify-center gap-2 bg-cream text-darkBrown px-6 py-3 rounded-lg font-semibold border border-gold/20 hover:border-gold/40 transition-colors"
              >
                Daftar Sekarang
              </Link>
            </div>
          </div>

          {/* Right Content - Logo */}
          <div className="relative flex justify-center items-center order-1 lg:order-2">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-cream/30 rounded-full blur-2xl" />

            {/* Logo container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <img
                src="/logo.png"
                alt="Faeyza Music Logo"
                className="w-full h-full object-contain drop-shadow-xl"
              />

              {/* Floating icons - simplified */}
              <div className="absolute -top-2 -right-2 bg-warmWhite p-3 rounded-xl shadow-lg">
                <span className="text-2xl">🎹</span>
              </div>
              <div className="absolute -bottom-2 -left-2 bg-warmWhite p-3 rounded-xl shadow-lg">
                <span className="text-2xl">🎸</span>
              </div>
              <div className="absolute top-1/2 -right-4 bg-warmWhite p-2 rounded-lg shadow-lg">
                <span className="text-xl">🎻</span>
              </div>
              <div className="absolute top-4 -left-4 bg-warmWhite p-2 rounded-lg shadow-lg">
                <span className="text-xl">🎤</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}