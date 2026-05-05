import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data";

function StarRating({ value }: { value: number }) {
  const stars = [0, 1, 2, 3, 4];
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-0.5" aria-label={`${value.toFixed(1)} out of 5`}>
        {stars.map((i) => {
          const fill = Math.min(1, Math.max(0, value - i));
          return (
            <div key={i} className="relative size-3.5 shrink-0">
              <Star
                size={14}
                className="absolute left-0 top-0 text-primary-700/45 fill-primary-900"
              />
              <div
                className="absolute left-0 top-0 h-3.5 overflow-hidden"
                style={{ width: `${fill * 100}%` }}
              >
                <Star size={14} className="text-accent fill-accent" />
              </div>
            </div>
          );
        })}
      </div>
      <span className="text-accent text-xs font-semibold tabular-nums">{value.toFixed(1)}</span>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section-padding bg-primary-950">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">Success Stories</span>
          <h2 className="section-title mt-2 text-white">What Our Students Say</h2>
          <p className="section-subtitle mx-auto text-blue-200">
            Real results from real students. We let their success speak for us.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-primary-900 rounded-2xl p-6 flex flex-col gap-4 border border-primary-800">
              <StarRating value={t.rating} />
              {/* Quote */}
              <p className="text-blue-100 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-primary-800">
                <Image
                  src={t.photo}
                  alt={t.name}
                  width={44}
                  height={44}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-blue-300 text-xs">{t.college} · {t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
