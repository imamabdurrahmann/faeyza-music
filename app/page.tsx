import HeroSplit from "@/components/HeroSplit";
import CourseCard from "@/components/CourseCard";
import TestimonialCard from "@/components/TestimonialCard";
import Link from "next/link";
import { courses, testimonials } from "@/lib/data";
import { ArrowRight, Music } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-warmWhite">
      <HeroSplit />

      <section className="py-12 sm:py-20 bg-cream/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 bg-warmWhite px-3 sm:px-4 py-2 rounded-full mb-4">
              <Music className="w-4 h-4 text-gold" />
              <span className="text-sm text-darkBrown font-medium">Kursus Kami</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-darkBrown mb-4 px-4">
              Pilihan Kursus Musik
            </h2>
            <p className="text-deepBrown/70 max-w-2xl mx-auto text-sm sm:text-base px-4">
              Temukan kursus yang sesuai dengan minat dan bakatmu. Semua kursus diajarkan oleh pengajar berpengalaman.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6 px-2 sm:px-0">
            {courses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-warmWhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-darkBrown mb-4 px-4">
              Apa Kata Siswa Kami
            </h2>
            <p className="text-deepBrown/70 text-sm sm:text-base">Testimoni dari siswa dan orang tua</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2 sm:px-0">
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-20 bg-gradient-to-br from-gold to-darkBrown">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Mulai Perjalanan Musikmu Hari Ini
          </h2>
          <p className="text-white/80 mb-6 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base">
            Bergabunglah dengan Faeyza Music dan mulai belajar musik bersama pengajar terbaik di Manna, Bengkulu.
          </p>
          <Link
            href="/kontak"
            className="inline-flex items-center gap-2 bg-white text-darkBrown px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-cream transition-colors text-sm sm:text-base"
          >
            Daftar Sekarang
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}