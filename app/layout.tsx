import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

require('dotenv').config()

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

export const metadata: Metadata = {
  title: "Projeto Bitzen",
  description: "Projeto react - Bitzen Pet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" data-theme="mytheme" style={{backgroundColor: '#dedede'}}>
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
