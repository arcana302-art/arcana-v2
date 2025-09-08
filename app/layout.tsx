import "./globals.css";
import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Arcana",
  description: "Claridad aquí y ahora con guías auténticas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-[#17031F] text-white antialiased">
        <SiteHeader />
        {children}
        {/* Footer único en toda la app */}
        <SiteFooter />
      </body>
    </html>
  );
}
