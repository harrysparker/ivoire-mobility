import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'IVOIRE MOBILITY',
  description: 'Pilot-ready mobility platform for Côte d’Ivoire.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
