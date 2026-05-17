import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/data";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="relative bg-warmWhite/80 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-lg border border-cream/50 hover:shadow-xl hover:border-gold/20 transition-all duration-300 overflow-hidden">
      {/* Quote decoration */}
      <div className="absolute top-4 right-4 text-4xl text-gold/10 font-serif">"</div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < testimonial.rating ? "text-gold fill-gold" : "text-cream"}`}
          />
        ))}
      </div>

      {/* Quote text */}
      <p className="text-deepBrown/80 text-sm sm:text-base mb-5 leading-relaxed italic relative z-10">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-cream/30">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-darkBrown flex items-center justify-center text-white font-bold text-sm shadow-md">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-darkBrown text-sm">{testimonial.name}</p>
          <p className="text-deepBrown/60 text-xs">{testimonial.course}</p>
        </div>
      </div>

      {/* Bottom gradient decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-cream/30 to-transparent" />
    </div>
  );
}