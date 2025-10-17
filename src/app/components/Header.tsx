"use client";

import { useState } from "react";
import Link from "next/link";
import Liens from "./liens";
import MenuDeroulant from "./menu-deroulant";


export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <div className="logo-container">
        <Link href="/" onClick={closeMenu}>
          <img src="./images/Logo.jpg" alt="Logo" />
        </Link>
      </div>

      <div
        className={menuOpen ? "hidden" : "menu-burger cursor-pointer"}
        onClick={toggleMenu}
      >
        <img src="./images/menu-burger.svg" alt="menu" />
      </div>

      <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
        {menuOpen && (
          <img
            className="cursor-pointer"
            onClick={toggleMenu}
            src="./images/close.svg"
            alt="Fermer le menu"
          />
        )}

        <ul className="menu">
          <li>
            <Link className="accueil-btn" href="/" onClick={closeMenu}>
              ACCUEIL
            </Link>
          </li>

          <MenuDeroulant closeMenu={closeMenu}/>

          <Liens lien="/galerie" name="GALERIE" onClick={closeMenu} />
          <Liens lien="/contact" name="CONTACT" onClick={closeMenu} />

          <Link href="/contact" onClick={closeMenu}>
            <li className="devis-btn">DEMANDE DE DEVIS</li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
