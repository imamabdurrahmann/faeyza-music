import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function VocalPage() {
  return (
    <div className="bg-warmWhite min-h-screen">
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/kursus" className="inline-flex items-center gap-2 text-deepBrown/70 hover:text-gold transition-colors mb-6">
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Kursus
          </Link>
          <div className="text-center">
            <span className="text-6xl mb-4 block">🎤</span>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-darkBrown mb-4">
              Kursus Vocal
            </h1>
            <p className="text-gold font-semibold text-lg">
              Mulai dari Rp 750.000 / 12 pertemuan
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cream rounded-2xl p-8 mb-8">
            <h2 className="font-serif text-2xl font-bold text-darkBrown mb-4">Tentang Kursus</h2>
            <p className="text-deepBrown/80 leading-relaxed mb-6">
              Les vokal untuk mengembangkan teknik dan ekspresi musik. Apakah kamu ingin menjadi penyanyi yang lebih baik atau sekadar ingin bisa bernyanyi dengan baik, Faeyza Music punya program yang tepat untukmu.
            </p>
            <h3 className="font-serif text-xl font-bold text-darkBrown mb-3">Yang Akan Kamu Pelajari:</h3>
            <ul className="space-y-2 text-deepBrown/80">
              <li className="flex items-center gap-2">• Teknik pernapasan yang benar</li>
              <li className="flex items-center gap-2">• Latihan vokal dan range</li>
              <li className="flex items-center gap-2">• Artikulasi dan ekspresi</li>
              <li className="flex items-center gap-2">• Interpretasi lagu</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-gold/20 to-cream rounded-2xl p-8 mb-8">
            <h2 className="font-serif text-2xl font-bold text-darkBrown mb-4">Info Pendaftaran</h2>
            <div className="space-y-3 text-deepBrown/80">
              <p><strong>Harga:</strong> Mulai dari Rp 750.000 / 12 pertemuan</p>
              <p><strong>Lokasi:</strong> Faeyza Music, Manna, Bengkulu</p>
              <p><strong>Jadwal:</strong> Hubungi kami untuk info jadwal terbaru</p>
            </div>
          </div>

          <div className="text-center">
            <h3 className="font-serif text-xl font-bold text-darkBrown mb-4">Tertarik dengan Kursus Vocal?</h3>
            <p className="text-deepBrown/70 mb-6">Hubungi kami melalui:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

      <section className="py-12 bg-cream/50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="font-serif text-xl font-bold text-darkBrown mb-6">Kursus Lainnya</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/kursus/piano" className="bg-cream px-6 py-3 rounded-lg text-darkBrown hover:bg-gold/20 transition-colors">
              🎹 Kursus Piano
            </Link>
            <Link href="/kursus/gitar" className="bg-cream px-6 py-3 rounded-lg text-darkBrown hover:bg-gold/20 transition-colors">
              🎸 Kursus Gitar
            </Link>
            <Link href="/kursus/biola" className="bg-cream px-6 py-3 rounded-lg text-darkBrown hover:bg-gold/20 transition-colors">
              🎻 Kursus Biola
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}