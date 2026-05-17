import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-warmWhite flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-8xl mb-6">🎵</div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-darkBrown mb-4">
          404
        </h1>
        <p className="text-deepBrown/70 text-lg mb-8">
          Halaman yang kamu cari tidak ditemukan
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors"
        >
          <Home className="w-4 h-4" />
          Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}