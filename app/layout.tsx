import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'Hamdan & Zoya | Luxury Nikah Invitation',
  description: 'A cinematic royal Islamic wedding invitation for Hamdan and Zoya.',
  openGraph: { title: 'Hamdan & Zoya Nikah Invitation', description: 'Together with their families, Hamdan and Zoya request your duas and presence.', type: 'website' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body className={`${inter.variable} ${playfair.variable}`}>{children}</body></html>;
}
