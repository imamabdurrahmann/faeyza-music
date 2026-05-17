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
    description: "Les piano klasik dan modern, private one-on-one",
    price: "Rp 750.000 / 12 pertemuan (1 jam/pertemuan)",
    gradient: "from-gold/20 to-cream",
  },
  {
    slug: "gitar",
    name: "Gitar",
    icon: "🎸",
    description: "Les gitar akustik dan elektrik, private one-on-one",
    price: "Rp 750.000 / 12 pertemuan (1 jam/pertemuan)",
    gradient: "from-darkBrown/20 to-cream",
  },
  {
    slug: "biola",
    name: "Biola",
    icon: "🎻",
    description: "Les biola klasik, private one-on-one",
    price: "Rp 750.000 / 12 pertemuan (1 jam/pertemuan)",
    gradient: "from-gold/20 to-cream",
  },
  {
    slug: "vocal",
    name: "Vocal",
    icon: "🎤",
    description: "Les vokal untuk semua tingkat, private one-on-one",
    price: "Rp 750.000 / 12 pertemuan (1 jam/pertemuan)",
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
    name: "Imam",
    course: "Siswa Piano",
    text: "Belajar piano di Faeyza Music sangat menyenangkan! Guru-gurunya sabar dan metode pengajarannya mudah dipahami.",
    rating: 5,
  },
  {
    name: "Aldo",
    course: "Siswa Gitar",
    text: "Saya sudah bisa main gitar dasar setelah 2 bulan les di Faeyza Music. Tempatnya nyaman dan suasana belajar sangat mendukung.",
    rating: 5,
  },
  {
    name: "Jayandre",
    course: "Siswa Biola",
    text: "Les biola di Faeyza Music sangat berkualitas. Pengajarnya profesional dan sabar banget ngajarin.",
    rating: 5,
  },
  {
    name: "Noval",
    course: "Siswa Piano",
    text: "Faeyza Music tempat les yang recommended! Ruangannya bersih dan fasilitas lengkap. Anak saya suka banget belajarnya di sini.",
    rating: 5,
  },
  {
    name: "Dipa",
    course: "Siswa Vocal",
    text: "Teknik vokal saya berkembang pesat sejak ikut les di Faeyza Music. Dapat kesempatan untuk tampil di berbagai acara juga!",
    rating: 5,
  },
  {
    name: "Musa",
    course: "Siswa Gitar",
    text: "Tempat les yang strategis di Manna. Fasilitas lengkap dan pengajarnya ramah. Sangat puas dengan progress belajar gitar saya.",
    rating: 5,
  },
  {
    name: "Ryo",
    course: "Siswa Piano",
    text: "Les piano di Faeyza Music worth it banget! Harganya terjangkau dan kualitasnya premium.",
    rating: 5,
  },
  {
    name: "Abid",
    course: "Siswa Biola",
    text: "Bimbel biola di Faeyza Music terbaik di Manna. Saya recommend ke semua teman!",
    rating: 5,
  },
  {
    name: "Anisa",
    course: "Siswa Piano",
    text: "Metode belajar di Faeyza Music sangat efektif. Anak saya bisa baca notasi musik dalam waktu singkat.",
    rating: 5,
  },
  {
    name: "Budi",
    course: "Siswa Gitar",
    text: "Pengajar gitar di Faeyza Music sangat kompeten. Saya bisa main lagu favorit saya dalam 3 bulan!",
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
    text: "Saya suka banget les vokal di Faeyza Music. Nadiin dan konsistensi belajarnya terjamin.",
    rating: 5,
  },
  {
    name: "Rizky",
    course: "Siswa Piano",
    text: "Tempat les yang strategis di Manna. Sangat puas dengan progress belajar piano saya.",
    rating: 4,
  },
  {
    name: "Sari",
    course: "Siswa Piano",
    text: "Faeyza Music membantu saya mencapai mimpi jadi pianis. Terima kasih untuk pengajar yang sabar membimbing!",
    rating: 5,
  },
  {
    name: "Fajar",
    course: "Siswa Gitar",
    text: "Les gitar di Faeyza Music bikin saya makin percaya diri. Ayo belajar musik di Faeyza Music!",
    rating: 5,
  },
  {
    name: "Ibu Siti",
    course: "Orang Tua Siswa Vocal",
    text: "Putri saya受益匪浅 dari les vokal di Faeyza Music. Bisa nyanyi dengan lebih percaya diri sekarang.",
    rating: 5,
  },
  {
    name: "Dimas",
    course: "Siswa Biola",
    text: "Les biola di Faeyza Music sangat berbeda dengan tempat lain. Pendekatan personal bikin saya cepat berkembang.",
    rating: 5,
  },
  {
    name: "Putri",
    course: "Siswa Piano",
    text: "Faeyza Music memberikan pengalaman belajar yang luar biasa. Piano lesson yang fun dan engaging!",
    rating: 5,
  },
  {
    name: "Andi",
    course: "Siswa Gitar",
    text: "Dari nol sampai bisa main lagu-lagu populer. Semua berkat Faeyza Music yang mengajarkan dengan sabar.",
    rating: 5,
  },
  {
    name: "Nisa",
    course: "Siswa Vocal",
    text: "Saya belajar vokal di Faeyza Music dan hasilnya超出预期! Sangat senang dengan metode pengajarannya.",
    rating: 5,
  },
];