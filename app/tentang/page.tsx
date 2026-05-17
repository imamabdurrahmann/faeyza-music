import { Music } from "lucide-react";

export default function TentangPage() {
  return (
    <div className="bg-warmWhite min-h-screen">
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-warmWhite px-4 py-2 rounded-full mb-4">
              <Music className="w-4 h-4 text-gold" />
              <span className="text-sm text-darkBrown font-medium">Tentang Kami</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-darkBrown mb-4">
              Faeyza Music Manna
            </h1>
            <p className="text-deepBrown/70 max-w-2xl mx-auto">
              Tempat terbaik untuk belajar musik di Manna, Bengkulu
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-cream rounded-2xl p-8 mb-8">
            <h2 className="font-serif text-2xl font-bold text-darkBrown mb-4">Cerita Kami</h2>
            <p className="text-deepBrown/80 leading-relaxed mb-4">
              Faeyza Music didirikan dengan misi untuk membawa pendidikan musik berkualitas ke Manna, Bengkulu. Kami percaya bahwa setiap orang memiliki potensi musik yang bisa dikembangkan dengan bimbingan yang tepat.
            </p>
            <p className="text-deepBrown/80 leading-relaxed mb-4">
              Dengan pengajar berpengalaman dan suasana belajar yang nyaman, Faeyza Music telah membantu banyak siswa dari berbagai usia untuk mencapaigoals musik mereka.
            </p>
            <p className="text-deepBrown/80 leading-relaxed">
              Kami menerima pendaftaran untuk les musik Biola, Piano, Gitar, dan Vocal. Apapun level kamu, kami siap membantu perjalanan musikmu.
            </p>
          </div>

          <div className="bg-gradient-to-br from-gold/20 to-cream rounded-2xl p-8 mb-8">
            <h2 className="font-serif text-2xl font-bold text-darkBrown mb-4">Lokasi</h2>
            <p className="text-deepBrown/80 mb-2">
              <strong>Faeyza Music</strong>
            </p>
            <p className="text-deepBrown/80">Manna, Bengkulu</p>
            <p className="text-deepBrown/80 mt-4">
              Tempat yang strategis dan mudah diakses untuk siswa dari berbagai daerah di Bengkulu.
            </p>
          </div>

          <div className="bg-cream rounded-2xl p-8">
            <h2 className="font-serif text-2xl font-bold text-darkBrown mb-4">Tagline</h2>
            <p className="text-gold font-semibold text-lg italic">
              &quot;Menerima Bimbel atau Les Musik Biola, Piano, Gitar dan Vocal&quot;
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}