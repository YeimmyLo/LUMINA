import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumina | Cuidado Facial Natural",
  description: "Landing en Next.js basada en los mockups HTML de Lumina."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
