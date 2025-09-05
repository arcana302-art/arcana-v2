import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Arcana",
  description: "Guía mística con especialistas verificados",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-[#0b1022] text-white antialiased">
        <main className="relative z-10">{children}</main>
      </body>
    </html>
  );
}
