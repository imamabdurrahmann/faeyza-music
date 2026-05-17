"use client";

import { useState } from "react";

interface GalleryProps {
  images: string[];
  alt: string;
}

export default function Gallery({ images, alt }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (images.length === 0) return null;

  return (
    <>
      {/* Masonry Grid */}
      <div className="columns-2 sm:columns-3 gap-3 space-y-3">
        {images.map((img, i) => (
          <div
            key={i}
            className="break-inside-avoid"
          >
            <button
              onClick={() => setSelectedImage(img)}
              className="relative w-full rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 group"
            >
              <img
                src={img}
                alt={`${alt} ${i + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover hover:opacity-90 transition-opacity duration-300"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
            </button>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white text-2xl hover:text-gold transition-colors bg-white/10 rounded-full"
            onClick={() => setSelectedImage(null)}
            aria-label="Tutup"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white hover:text-gold transition-colors bg-white/10 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = images.indexOf(selectedImage);
              const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
              setSelectedImage(images[prevIndex]);
            }}
            aria-label="Sebelumnya"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center text-white hover:text-gold transition-colors bg-white/10 rounded-full"
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = images.indexOf(selectedImage);
              const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
              setSelectedImage(images[nextIndex]);
            }}
            aria-label="Selanjutnya"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <img
            src={selectedImage}
            alt={alt}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 px-4 py-2 rounded-full text-white text-sm">
            {images.indexOf(selectedImage) + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}