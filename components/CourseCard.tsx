import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Course } from "@/lib/data";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/kursus/${course.slug}`} className="group">
      <div className="relative bg-cream/80 backdrop-blur-sm rounded-2xl p-5 sm:p-6 hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 hover:-translate-y-2 border border-gold/10 overflow-hidden h-full">
        {/* Background decoration */}
        <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

        {/* Icon container */}
        <div className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br ${course.gradient} flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
          <span className="text-2xl sm:text-3xl">{course.icon}</span>
          {/* Glow effect on hover */}
          <div className="absolute inset-0 rounded-2xl bg-gold/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Content */}
        <div className="relative">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-darkBrown mb-2 group-hover:text-gold transition-colors duration-300">
            {course.name}
          </h3>
          <p className="text-deepBrown/70 text-xs sm:text-sm mb-4 line-clamp-2">{course.description}</p>

          {/* Price and CTA */}
          <div className="flex items-center justify-between mt-auto">
            <span className="text-gold font-bold text-xs sm:text-sm">{course.price}</span>
            <div className="flex items-center gap-2 text-darkBrown/50 group-hover:text-gold transition-colors duration-300">
              <span className="text-xs font-medium">Lihat Detail</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </div>
          </div>
        </div>

        {/* Corner decoration */}
        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-gold/10 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </Link>
  );
}