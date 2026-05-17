import Link from "next/link";
import { courses } from "@/lib/data";
import { Music } from "lucide-react";

const courseThumbnails: Record<string, string> = {
  piano: "/images/kursus/piano/piano.jpeg",
  gitar: "/images/kursus/gitar/gitar.jpeg",
  biola: "/images/kursus/biola/biola.jpeg",
  vocal: "/images/kursus/vocal/vocal.jpeg",
};

export default function KursusPage() {
  return (
    <div className="bg-warmWhite min-h-screen">
      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-darkBrown mb-3">
            Kursus Musik
          </h1>
          <p className="text-deepBrown/70 text-sm sm:text-base">
            Les private one-on-one di Faeyza Music Manna, Bengkulu
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {courses.map((course) => (
              <Link
                key={course.slug}
                href={`/kursus/${course.slug}`}
                className="group block"
              >
                <div className="bg-cream rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  {/* Thumbnail */}
                  <div className="aspect-video bg-gradient-to-br from-gold/20 to-cream overflow-hidden">
                    <img
                      src={courseThumbnails[course.slug]}
                      alt={course.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{course.icon}</span>
                      <h2 className="font-serif text-xl font-bold text-darkBrown">
                        Kursus {course.name}
                      </h2>
                    </div>
                    <p className="text-deepBrown/70 text-sm mb-3">{course.description}</p>
                    <p className="text-gold font-semibold text-sm">{course.price}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}