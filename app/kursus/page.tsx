"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { courses } from "@/lib/data";

export default function KursusPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="bg-warmWhite min-h-screen animate-pulse">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <div className="h-10 w-64 bg-cream rounded mx-auto mb-4" />
          <div className="h-6 w-96 bg-cream rounded mx-auto" />
        </div>
      </div>
    );
  }

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
          <div className="columns-1 sm:columns-2 gap-6 space-y-6">
            {courses.map((course) => (
              <Link
                key={course.slug}
                href={`/kursus/${course.slug}`}
                className="block break-inside-avoid"
              >
                <div className="bg-cream rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <img
                    src={`/images/kursus/${course.slug}/${course.slug}.jpeg`}
                    alt={course.name}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
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