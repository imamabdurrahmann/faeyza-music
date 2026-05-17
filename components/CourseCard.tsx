import Link from "next/link";
import type { Course } from "@/lib/data";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/kursus/${course.slug}`} className="group block">
      <div className="bg-cream/80 rounded-xl p-5 hover:shadow-lg transition-shadow border border-gold/10 h-full">
        {/* Icon */}
        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${course.gradient} flex items-center justify-center mb-4 text-2xl`}>
          {course.icon}
        </div>

        {/* Content */}
        <h3 className="font-serif text-lg font-bold text-darkBrown mb-2 group-hover:text-gold transition-colors">
          {course.name}
        </h3>
        <p className="text-deepBrown/70 text-sm mb-3 line-clamp-2">{course.description}</p>
        <span className="text-gold font-semibold text-xs">{course.price}</span>
      </div>
    </Link>
  );
}