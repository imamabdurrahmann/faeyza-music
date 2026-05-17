import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/data";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-warmWhite rounded-2xl p-6 shadow-sm border border-cream">
      <div className="flex gap-1 mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < testimonial.rating ? "text-gold fill-gold" : "text-cream"}`}
          />
        ))}
      </div>
      <p className="text-deepBrown/80 text-sm mb-4 leading-relaxed italic">
        &quot;{testimonial.text}&quot;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-darkBrown flex items-center justify-center text-white font-semibold">
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