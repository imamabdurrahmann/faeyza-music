import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/data";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-warmWhite rounded-xl p-5 shadow-sm border border-cream/50">
      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < testimonial.rating ? "text-gold fill-gold" : "text-cream"}`}
          />
        ))}
      </div>

      {/* Quote */}
      <p className="text-deepBrown/80 text-sm leading-relaxed italic mb-4">
        &quot;{testimonial.text}&quot;
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-3 border-t border-cream/30">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold to-darkBrown flex items-center justify-center text-white font-bold text-xs">
          {testimonial.name.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-darkBrown text-sm">{testimonial.name}</p>
          <p className="text-deepBrown/60 text-xs">{testimonial.course}</p>
        </div>
      </div>
    </div>
  );
}