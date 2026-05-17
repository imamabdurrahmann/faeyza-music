"use client";

import { Music, Send } from "lucide-react";
import { useState } from "react";

export default function KontakPage() {
  const [form, setForm] = useState({ name: "", phone: "", course: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const waMessage = `Halo, saya ${form.name} ingin mendaftar kursus ${form.course}. No HP: ${form.phone}. Pesan: ${form.message}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(waMessage)}`, "_blank");
  };

  return (
    <div className="bg-warmWhite min-h-screen">
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-warmWhite px-4 py-2 rounded-full mb-4">
              <Music className="w-4 h-4 text-gold" />
              <span className="text-sm text-darkBrown font-medium">Kontak</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-darkBrown mb-4">
              Hubungi Kami
            </h1>
            <p className="text-deepBrown/70 max-w-2xl mx-auto">
              Tertarik dengan kursus di Faeyza Music? Hubungi kami melalui salah satu channel di bawah ini.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer"
              className="bg-green-500 text-white rounded-2xl p-8 text-center hover:bg-green-600 transition-colors">
              <svg className="w-12 h-12 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-white/80">Chat langsung dengan kami</p>
            </a>

            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl p-8 text-center hover:opacity-90 transition-opacity">
              <svg className="w-12 h-12 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <h3 className="text-xl font-bold mb-2">Instagram</h3>
              <p className="text-white/80">DM atau lihat update terbaru</p>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"
              className="bg-blue-600 text-white rounded-2xl p-8 text-center hover:bg-blue-700 transition-colors">
              <svg className="w-12 h-12 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <h3 className="text-xl font-bold mb-2">Facebook</h3>
              <p className="text-white/80">Kunjungi fan page kami</p>
            </a>

            <div className="bg-cream rounded-2xl p-8">
              <h3 className="font-serif text-xl font-bold text-darkBrown mb-4">Lokasi</h3>
              <p className="text-deepBrown/80 mb-2"><strong>Faeyza Music Manna</strong></p>
              <p className="text-deepBrown/80">Manna, Bengkulu</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-cream/50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-warmWhite rounded-2xl p-8 shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-darkBrown mb-6 text-center">
              Kirim Pesan
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-deepBrown mb-1">Nama</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-cream bg-warmWhite text-deepBrown focus:outline-none focus:border-gold"
                  placeholder="Nama lengkap"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-deepBrown mb-1">Nomor HP</label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-cream bg-warmWhite text-deepBrown focus:outline-none focus:border-gold"
                  placeholder="08xxxxxxxxxx"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-deepBrown mb-1">Pilih Kursus</label>
                <select
                  required
                  value={form.course}
                  onChange={(e) => setForm({ ...form, course: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-cream bg-warmWhite text-deepBrown focus:outline-none focus:border-gold"
                >
                  <option value="">Pilih kursus...</option>
                  <option value="Piano">Piano</option>
                  <option value="Gitar">Gitar</option>
                  <option value="Biola">Biola</option>
                  <option value="Vocal">Vocal</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-deepBrown mb-1">Pesan</label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-cream bg-warmWhite text-deepBrown focus:outline-none focus:border-gold"
                  placeholder="Pesan tambahan (opsional)"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gold text-white px-6 py-3 rounded-lg font-semibold hover:bg-gold/90 transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                Kirim via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}