import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Liens from "./components/liens";
import Link from 'next/link';
// import React from 'react';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Dare-d'Art Renovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      </head>
      <body
      // ${geistSans.variable} ${geistMono.variable}
        className={` antialiased`}
      >
        <header>
          <div className="logo-container">
            <Link href="/">
              <img src="./images/Logo.jpg" alt="Logo" />
            </Link>
          </div>
          <nav>
            <ul>
              <li><Link className="accueil-btn" href="/">ACCUEIL</Link></li>
              <Liens lien="/prestations" name="PRESTATIONS"/>
              <Liens lien="/galerie" name="GALERIE"/>
              <Liens lien="/contact" name="CONTACT"/>
              <Link href="/devis"><li className="devis-btn">DEMANDE DE DEVIS</li></Link>
            </ul>
          </nav>
        </header>
        {children}
      <footer></footer>
      </body>
    </html>
  );
}
