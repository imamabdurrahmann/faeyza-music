# Faeyza Music — Website Design Spec

**Tanggal:** 2026-05-17
**Status:** Draft

---

## 1. Overview

Website landing page untuk bimbel musik **Faeyza Music** yang berlokasi di **Manna, Bengkulu**. Website berfungsi sebagai media promosi dan channel pendaftaran untuk kursus Biola, Piano, Gitar, dan Vocal.

**Tech Stack:**
- Next.js 15 + React 19 + TypeScript
- Tailwind CSS
- Struktur folder baru: `D:/faeyza-music/`

---

## 2. Visual Style

### Aesthetic: Elegant & Warm

Warna dominan yang mencerminkan music school kelas atas dengan nuansa hangat:

| Elemen | Warna |
|--------|-------|
| Primary | #D4AF37 (Gold) |
| Secondary | #F5E6C8 (Cream) |
| Dark Accent | #3E2723 (Dark Brown) |
| Background | #FFF8F0 (Warm White) |
| Text | #2D1B0E (Deep Brown) |

**Typografi:**
- Heading: Serif font (playfair display atau similar)
- Body: Sans-serif clean (inter atau similar)
- Fallback: Georgia, system-ui

### Layout: Split Layout (Homepage)

Hero section dengan layar terbagi:
- **Kiri (60%):** Teks/tagline + CTA button
- **Kanan (40%):** Visual (gambar instrumen musik atau ilustrasi)

Navigation: Sticky navbar di atas

---

## 3. Pages & Structure

### Navigation
- Logo (Faeyza Music)
- Menu: Beranda, Kursus, Tentang Kami, Testimonial, Kontak
- CTA Button: "Daftar Sekarang"

### Halaman

#### `/` — Beranda (Homepage)
- Hero section (split layout)
- Intro singkat Faeyza Music
- Highlight 4 kursus (Biola, Piano, Gitar, Vocal) dengan icon/card
- Testimonial carousel (3-5 testimoni)
- CTA section: "Mulai perjalanan musikmu"
- Footer dengan info kontak

#### `/kursus` — Halaman Listing Kursus
- Grid 4 kartu kursus (Biola, Piano, Gitar, Vocal)
- Setiap kartu: gambar, nama, harga "Mulai dari Rp 750.000/12 pertemuan"
- Klik → ke halaman detail kursus

#### `/kursus/piano` — Detail Piano
- Hero image/nama kursus
- Deskripsi kursus
- Harga: Rp 750.000 / 12 pertemuan
- Jadwal & info pendaftaran
- CTA: WhatsApp, Instagram, Facebook
- Link ke kursus lain

#### `/kursus/gitar` — Detail Gitar
*(sama struktur dengan piano)*

#### `/kursus/biola` — Detail Biola
*(sama struktur dengan piano)*

#### `/kursus/vocal` — Detail Vocal
*(sama struktur dengan piano)*

#### `/tentang` — Tentang Kami
- Cerita Faeyza Music
- Lokasi: Manna, Bengkulu
- Tagline: "Menerima Bimbel atau Les Musik Biola, Piano, Gitar dan Vocal"
- Foto/struktur tim (tanpa detail personal per orang)

#### `/testimonial` — Testimonial
- Daftar testimoni dari siswa/orang tua
- Foto (jika ada), nama, kursus yang diambil
- Rating bintang

#### `/kontak` — Kontak
- WhatsApp, Instagram, Facebook (icon + link)
- Lokasi: Manna, Bengkulu
- Form kontak opsional (nama, email, pesan)

### Fitur Global
- WhatsApp floating button (fixed bottom-right)
- Responsive mobile-first
- Smooth scroll navigation

---

## 4. Registration Flow

### Primary: Direct Contact
Tombol "Daftar Sekarang" di setiap halaman kursus membuka:
1. **WhatsApp** — wa.me/link (priority)
2. **Instagram** — DM link
3. **Facebook** — page/message link

### Secondary: Contact Form (Opsional)
Form di `/kontak` bisa diisi untuk yang lebih suka这种方式:
- Fields: Nama, Nomor HP, Pilihan Kursus, Pesan
- Submit → kirim ke email owner atau WhatsApp notification

---

## 5. Content

### Tagline
> "Faeyza Music Manna — Menerima Bimbel atau Les Musik Biola, Piano, Gitar dan Vocal"

### Harga
- Display: "Mulai dari Rp 750.000 / 12 pertemuan"
- Tidak menampilkan detail harga per kursus (generic pricing)

### Testimonial (Sample Content)
- 3-5 testimoni dengan nama anonim (opsional) dan kursus
- Example: "Belajar piano di Faeyza Music sangat menyenangkan!" — Anisa, Siswa Piano

---

## 6. Technical Notes

### Component Strategy
- Navbar, Footer (reusable)
- CourseCard, TestimonialCard, CTAButton
- WhatsAppFloat (fixed button)
- Responsive grid system

### Image Strategy
- Placeholder/gradient untuk development
- Real images bisa ditambahkan nanti (foto инструмен musik, ruang kursus)

### Color Token (Tailwind Extend)
```js
colors: {
  gold: '#D4AF37',
  cream: '#F5E6C8',
  darkBrown: '#3E2723',
  warmWhite: '#FFF8F0',
  deepBrown: '#2D1B0E',
}
```

---

## 7. Excluded Features

- Tidak ada halaman detail per pengajar
- Tidak ada blog/article
- Tidak ada sistem booking jadwal online
- Tidak ada payment gateway

---

## 8. Implementation Priority

1. Setup project structure
2. Landing page homepage
3. Kursus listing + detail pages (4 pages)
4. Tentang Kami & Testimonial
5. Kontak page
6. WhatsApp float button
7. Mobile responsive polish

---

**Next Step:** Invoke writing-plans skill untuk detailed implementation plan.