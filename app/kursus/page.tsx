import CourseCard from "@/components/CourseCard";
import { courses } from "@/lib/data";
import { Music } from "lucide-react";

export default function KursusPage() {
  return (
    <div className="bg-warmWhite min-h-screen">
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-warmWhite px-4 py-2 rounded-full mb-4">
              <Music className="w-4 h-4 text-gold" />
              <span className="text-sm text-darkBrown font-medium">Kursus</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-darkBrown mb-4">
              Kursus Musik
            </h1>
            <p className="text-deepBrown/70 max-w-2xl mx-auto">
              Pilih kursus yang sesuai dengan minat dan bakatmu. Semua kursus tersedia di Faeyza Music Manna, Bengkulu.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}