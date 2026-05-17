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
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setSelectedImage(img)}
            className="relative aspect-square rounded-lg overflow-hidden focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2"
          >
            <img
              src={img}
              alt={`${alt} ${i + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white text-3xl hover:text-gold transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Tutup"
          >
            &times;
          </button>
          <img
            src={selectedImage}
            alt={alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}