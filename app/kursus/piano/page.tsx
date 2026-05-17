import type { Metadata } from "next";
import Gallery from "@/components/Gallery";

export const metadata: Metadata = {
  title: "Kursus Piano - Faeyza Music Manna",
  description: "Les piano private one-on-one di Faeyza Music Manna. Belajar piano klasik dan modern dengan pengajar berpengalaman.",
};

const pianoImages = [
  "/images/kursus/piano/piano.jpeg",
  "/images/kursus/piano/piano1.jpeg",
  "/images/kursus/piano/piano2.jpeg",
  "/images/kursus/piano/piano3.jpeg",
  "/images/kursus/piano/piano4.jpeg",
  "/images/kursus/piano/piano5.jpeg",
  "/images/kursus/piano/piano6.jpeg",
  "/images/kursus/piano/piano7.jpeg",
  "/images/kursus/piano/piano8.jpeg",
  "/images/kursus/piano/piano9.jpeg",
  "/images/kursus/piano/piano10.jpeg",
  "/images/kursus/piano/piano11.jpeg",
];

export default function PianoPage() {
  return (
    <div className="bg-warmWhite min-h-screen">
      <section className="py-12 sm:py-16 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <a href="/kursus" className="inline-flex items-center gap-2 text-deepBrown/70 hover:text-gold transition-colors mb-6">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Kembali ke Kursus
          </a>
          <div className="text-center">
            <span className="text-5xl sm:text-6xl mb-4 block">🎹</span>
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-darkBrown mb-3">
              Kursus Piano
            </h1>
            <p className="text-gold font-bold text-lg">
              Rp 750.000 / 12 pertemuan
            </p>
            <p className="text-deepBrown/60 text-sm mt-1">
              Private one-on-one, 1 jam/pertemuan
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cream rounded-xl p-6 sm:p-8 mb-8">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-darkBrown mb-4">Tentang Kursus</h2>
            <p className="text-deepBrown/80 leading-relaxed mb-4">
              Les piano klasik dan modern untuk semua tingkat. Apakah kamu ingin belajar piano dari dasar atau meningkatkan skill yang sudah ada, Faeyza Music siap membantu perjalanan musikmu.
            </p>
            <h3 className="font-serif text-lg font-bold text-darkBrown mb-3">Yang Akan Kamu Pelajari:</h3>
            <ul className="space-y-2 text-deepBrown/80">
              <li className="flex items-center gap-2">• Teknik dasar piano dan postur tangan</li>
              <li className="flex items-center gap-2">• Membaca notasi musik</li>
              <li className="flex items-center gap-2">• Teori musik dasar</li>
              <li className="flex items-center gap-2">• Latihan lagu sesuai tingkat</li>
            </ul>
          </div>

          <div className="mb-8">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-darkBrown mb-6 text-center">
              Galeri Siswa Piano
            </h2>
            <Gallery images={pianoImages} alt="Siswa Piano" />
          </div>

          <div className="bg-gradient-to-br from-gold/20 to-cream rounded-xl p-6 sm:p-8 mb-8">
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-darkBrown mb-4">Info Pendaftaran</h2>
            <div className="space-y-2 text-deepBrown/80 text-sm sm:text-base">
              <p><strong>Harga:</strong> Rp 750.000 / 12 pertemuan</p>
              <p><strong>Format:</strong> Private one-on-one</p>
              <p><strong>Durasi:</strong> 1 jam per pertemuan</p>
              <p><strong>Lokasi:</strong> Faeyza Music, Manna, Bengkulu</p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="font-serif text-lg sm:text-xl font-bold text-darkBrown mb-4">Tertarik dengan Kursus Piano?</h3>
            <p className="text-deepBrown/70 mb-6 text-sm">Hubungi kami melalui:</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://wa.me/6281368107686" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                WhatsApp
              </a>
              <a href="https://www.facebook.com/zulhan.tendy" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-cream/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="font-serif text-lg sm:text-xl font-bold text-darkBrown mb-6">Kursus Lainnya</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="/kursus/gitar" className="bg-cream px-5 py-2.5 rounded-lg text-darkBrown hover:bg-gold/20 transition-colors text-sm">
              🎸 Gitar
            </a>
            <a href="/kursus/biola" className="bg-cream px-5 py-2.5 rounded-lg text-darkBrown hover:bg-gold/20 transition-colors text-sm">
              🎻 Biola
            </a>
            <a href="/kursus/vocal" className="bg-cream px-5 py-2.5 rounded-lg text-darkBrown hover:bg-gold/20 transition-colors text-sm">
              🎤 Vocal
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}