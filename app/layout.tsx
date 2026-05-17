import type { Metadata } from "next";
import "./globals.css";
import "./animations.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  metadataBase: new URL("https://faeyza-music.vercel.app"),
  title: "Faeyza Music Manna — Bimbel Musik Biola, Piano, Gitar & Vocal",
  description: "Les musik private one-on-one di Manna, Bengkulu. Tersedia kursus Piano, Gitar, Biola, dan Vocal dengan pengajar berpengalaman.",
  keywords: ["bimbel musik", "les musik", "piano", "gitar", "biola", "vocal", "Manna", "Bengkulu"],
  authors: [{ name: "Faeyza Music" }],
  openGraph: {
    title: "Faeyza Music Manna — Bimbel Musik",
    description: "Les musik private one-on-one di Manna, Bengkulu. Piano, Gitar, Biola, Vocal.",
    url: "https://faeyza-music.vercel.app",
    siteName: "Faeyza Music",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Faeyza Music Manna",
    description: "Les musik private one-on-one di Manna, Bengkulu",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Faeyza Music",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#D4AF37" />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-BKHRQLL74W"></script>
        <script dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BKHRQLL74W');
          `
        }} />
      </body>
    </html>
  );
}