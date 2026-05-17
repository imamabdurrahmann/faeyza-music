import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Course } from "@/lib/data";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/kursus/${course.slug}`} className="group">
      <div className="bg-cream rounded-2xl p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-darkBrown/5">
        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${course.gradient} flex items-center justify-center mb-4 text-3xl`}>
          {course.icon}
        </div>
        <h3 className="font-serif text-xl font-bold text-darkBrown mb-2">
          Kursus {course.name}
        </h3>
        <p className="text-deepBrown/70 text-sm mb-4">{course.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-gold font-semibold text-sm">{course.price}</span>
          <ArrowRight className="w-4 h-4 text-darkBrown group-hover:translate-x-1 group-hover:text-gold transition-all" />
        </div>
      </div>
    </Link>
  );
}