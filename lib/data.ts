export interface Course {
  slug: string;
  name: string;
  icon: string;
  description: string;
  price: string;
  gradient: string;
}

export const courses: Course[] = [
  {
    slug: "piano",
    name: "Piano",
    icon: "🎹",
    description: "Les piano klasik dan modern untuk semua tingkat",
    price: "Mulai dari Rp 750.000/12 pertemuan",
    gradient: "from-gold/20 to-cream",
  },
  {
    slug: "gitar",
    name: "Gitar",
    icon: "🎸",
    description: "Les gitar akustik dan elektrik untuk pemula hingga mahir",
    price: "Mulai dari Rp 750.000/12 pertemuan",
    gradient: "from-darkBrown/20 to-cream",
  },
  {
    slug: "biola",
    name: "Biola",
    icon: "🎻",
    description: "Les biola klasik untuk membangun fondasi musik yang kuat",
    price: "Mulai dari Rp 750.000/12 pertemuan",
    gradient: "from-gold/20 to-cream",
  },
  {
    slug: "vocal",
    name: "Vocal",
    icon: "🎤",
    description: "Les vokal untuk mengembangkan teknik dan ekspresi musik",
    price: "Mulai dari Rp 750.000/12 pertemuan",
    gradient: "from-darkBrown/20 to-cream",
  },
];

export interface Testimonial {
  name: string;
  course: string;
  text: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Anisa",
    course: "Siswa Piano",
    text: "Belajar piano di Faeyza Music sangat menyenangkan! Guru-gurunya sabar dan metode pengajarannya mudah dipahami.",
    rating: 5,
  },
  {
    name: "Budi",
    course: "Siswa Gitar",
    text: "Saya sudah bisa main gitar dasar setelah 2 bulan les di Faeyza Music. Tempatnya nyaman dan suasana belajar sangat mendukung.",
    rating: 5,
  },
  {
    name: "Ibu Ratna",
    course: "Orang Tua Siswa Biola",
    text: "Anak saya sangat suka les biola di sini. Faeyza Music recomended banget untuk parents yang ingin anak mereka belajar musik.",
    rating: 5,
  },
  {
    name: "Dewi",
    course: "Siswa Vocal",
    text: "Teknik vokal saya berkembang pesat sejak ikut les di Faeyza Music. Bisa有机会 untuk tampil di berbagai acara juga!",
    rating: 5,
  },
  {
    name: "Rizky",
    course: "Siswa Piano",
    text: "Tempat les yang strategis di Manna,教学质量 prima. Sangat puas dengan progress belajar piano saya.",
    rating: 4,
  },
];