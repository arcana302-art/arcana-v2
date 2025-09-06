import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arcana',
  description: 'Lecturas en vivo con guías auténticas',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-[#17031F] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
