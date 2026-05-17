import Link from "next/link";
import Image from "next/image";

export default function HeroSplit() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] flex items-center overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 staff-pattern opacity-50" />
      <div className="absolute top-20 left-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cream/50 rounded-full blur-3xl" />

      {/* Floating music notes decoration */}
      <div className="absolute top-1/4 left-8 text-4xl opacity-10 animate-float">♪</div>
      <div className="absolute top-1/3 right-16 text-3xl opacity-10 animate-float" style={{ animationDelay: "0.5s" }}>♫</div>
      <div className="absolute bottom-1/4 left-1/4 text-2xl opacity-10 animate-float" style={{ animationDelay: "1s" }}>♩</div>
      <div className="absolute bottom-1/3 right-1/4 text-4xl opacity-10 animate-float" style={{ animationDelay: "1.5s" }}>♪</div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-cream/80 backdrop-blur-sm px-5 py-2.5 rounded-full border border-gold/20 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
              </span>
              <span className="text-sm font-medium text-darkBrown">
                Bimbel Musik Profesional di Manna
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4 animate-slide-up stagger-1">
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-darkBrown">Faeyza</span>
                <br />
                <span className="gradient-text">Music</span>
                <span className="text-darkBrown"> Manna</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-deepBrown/80 max-w-lg mx-auto lg:mx-0 leading-relaxed animate-slide-up stagger-2">
              Wujudkan mimpi musikmu bersama kami. Les piano, gitar, biola, dan vokal dengan pengajar berpengalaman di Bengkulu.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 lg:gap-12 py-4 animate-slide-up stagger-3">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-gold">4+</p>
                <p className="text-xs sm:text-sm text-deepBrown/60">Kursus</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-gold">100+</p>
                <p className="text-xs sm:text-sm text-deepBrown/60">Siswa</p>
              </div>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-gold">5+</p>
                <p className="text-xs sm:text-sm text-deepBrown/60">Tahun</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up stagger-4">
              <Link
                href="/kursus"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gold to-gold/90 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg hover:shadow-gold/30 transition-all duration-300 hover:-translate-y-0.5"
              >
                <span>Lihat Kursus</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/kontak"
                className="group inline-flex items-center justify-center gap-3 bg-warmWhite text-darkBrown px-8 py-4 rounded-xl font-semibold border-2 border-cream hover:border-gold hover:shadow-lg transition-all duration-300"
              >
                <span>Daftar Sekarang</span>
                <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Right Content - Logo & Instruments */}
          <div className="relative flex justify-center items-center order-1 lg:order-2 animate-scale-in">
            {/* Glow effect behind logo */}
            <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-transparent to-darkBrown/20 rounded-full blur-2xl scale-75" />

            {/* Main container */}
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px]">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-gold/30 animate-pulse-glow" />

              {/* Middle ring */}
              <div className="absolute inset-4 rounded-full border border-cream/50" />

              {/* Inner circles with gradient */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-gold/20 to-cream/30" />
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-cream/40 to-warmWhite/50" />

              {/* Logo */}
              <div className="absolute inset-16 sm:inset-20 lg:inset-24 flex items-center justify-center animate-float">
                <img
                  src="/logo.png"
                  alt="Faeyza Music Logo"
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </div>

              {/* Floating instrument icons */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-warmWhite p-4 sm:p-5 rounded-2xl shadow-xl animate-float border border-cream/50">
                <span className="text-3xl sm:text-4xl">🎹</span>
              </div>
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-warmWhite p-4 sm:p-5 rounded-2xl shadow-xl animate-float border border-cream/50" style={{ animationDelay: "0.3s" }}>
                <span className="text-3xl sm:text-4xl">🎸</span>
              </div>
              <div className="absolute top-1/2 -right-6 sm:-right-8 bg-warmWhite p-3 sm:p-4 rounded-xl shadow-lg animate-float border border-cream/50" style={{ animationDelay: "0.6s" }}>
                <span className="text-2xl sm:text-3xl">🎻</span>
              </div>
              <div className="absolute top-8 -left-6 sm:top-12 sm:-left-10 bg-warmWhite p-3 sm:p-4 rounded-xl shadow-lg animate-float border border-cream/50" style={{ animationDelay: "0.9s" }}>
                <span className="text-2xl sm:text-3xl">🎤</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cream/30 to-transparent" />
    </section>
  );
}