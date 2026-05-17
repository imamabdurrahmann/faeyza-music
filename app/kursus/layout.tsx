import type { Metadata } from "next";
import { courses } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kursus Musik - Faeyza Music Manna",
  description: "Pilih kursus musik private one-on-one. Tersedia Piano, Gitar, Biola, dan Vocal di Manna, Bengkulu.",
};

export default function KursusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}