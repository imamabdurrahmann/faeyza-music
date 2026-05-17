import HeroSplit from "@/components/HeroSplit";
import CourseCard from "@/components/CourseCard";
import TestimonialCard from "@/components/TestimonialCard";
import Link from "next/link";
import { courses, testimonials } from "@/lib/data";

export default function HomePage() {
  return (
    <div className="bg-warmWhite">
      <HeroSplit />

      {/* Courses Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-cream/30 via-cream/50 to-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full mb-4">
              <span className="text-gold text-sm font-medium">Kursus Kami</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-darkBrown mb-4">
              Pilihan Kursus Musik
            </h2>
            <p className="text-deepBrown/70 max-w-2xl mx-auto text-sm sm:text-base px-4">
              Temukan kursus yang sesuai dengan minat dan bakatmu. Semua kursus diajarkan oleh pengajar berpengalaman.
            </p>
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {courses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 sm:py-24 bg-warmWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full mb-4">
              <span className="text-gold text-sm font-medium">Kenapa Kami?</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-darkBrown mb-4">
              Tempat Terbaik untuk
              <span className="text-gold"> Belajar Musik</span>
            </h2>
            <p className="text-deepBrown/70 max-w-2xl mx-auto text-sm sm:text-base px-4">
              Faeyza Music hadir untuk membantu kamu mencapai mimpi musikmu. Les private one-on-one dengan pengajar berpengalaman.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: "🎵",
                title: "Les Private",
                desc: "One-on-one dengan pengajar, fokus penuh untuk perkembanganmu"
              },
              {
                icon: "👨‍🏫",
                title: "Pengajar Berpengalaman",
                desc: "Tim pengajar yang berpengalaman dan passionate dalam mengajar"
              },
              {
                icon: "🏠",
                title: "Fasilitas Nyaman",
                desc: "Ruang belajar yang nyaman dan dilengkapi instrumen berkualitas"
              },
              {
                icon: "📅",
                title: "Jadwal Fleksibel",
                desc: "Atur jadwal sesuai dengan kesibukanmu"
              },
              {
                icon: "⏰",
                title: "1 Jam/ Pertemuan",
                desc: "Setiap pertemuan selama 1 jam dengan materi yang terstruktur"
              },
              {
                icon: "🎯",
                title: "Semua Tingkat",
                desc: "Dari pemula hingga tingkat lanjutan, semua welcome"
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-cream/50 rounded-2xl p-6 sm:p-8 text-center hover:shadow-lg hover:bg-cream transition-all duration-300 border border-gold/10"
              >
                <span className="text-4xl sm:text-5xl mb-4 block">{item.icon}</span>
                <h3 className="font-serif text-lg sm:text-xl font-bold text-darkBrown mb-2">{item.title}</h3>
                <p className="text-deepBrown/70 text-sm sm:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-cream/30 to-cream/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full mb-4">
              <span className="text-gold text-sm font-medium">Testimoni</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-darkBrown mb-4">
              Apa Kata <span className="text-gold">Siswa Kami</span>
            </h2>
            <p className="text-deepBrown/70 max-w-2xl mx-auto text-sm sm:text-base">
              Testimoni dari siswa dan orang tua yang telah belajar di Faeyza Music
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-darkBrown via-darkBrown to-gold/80" />
        <div className="absolute inset-0 staff-pattern opacity-10" />

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gold/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            Mulai Perjalanan Musikmu
            <span className="text-gold"> Hari Ini</span>
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
            Bergabunglah dengan Faeyza Music dan wujudkan mimpi musikmu bersama pengajar terbaik di Manna, Bengkulu.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontak"
              className="group inline-flex items-center justify-center gap-3 bg-white text-darkBrown px-8 py-4 rounded-xl font-bold hover:bg-cream transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <span>Daftar Sekarang</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/kursus"
              className="group inline-flex items-center justify-center gap-3 bg-transparent text-white px-8 py-4 rounded-xl font-semibold border-2 border-white/30 hover:border-white/60 transition-all duration-300"
            >
              <span>Lihat Semua Kursus</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}