"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import Liens from './liens';

const MenuDeroulant = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    setIsOpen(true);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <li
      className="dropdown"
      onMouseEnter={openMenu}
      onMouseLeave={closeMenu}
    >
      <Link href="#">PRESTATIONS</Link>
      {isOpen && (
        <ul className="dropdown-menu">
          <Liens lien="/plomberie" name="Plomberie"/>
          <Liens lien="/peinture" name="Peinture"/>
          <Liens lien="/electricite" name="Electricité"/>
          <Liens lien="/revetement" name="Revêtement mural et sol"/>
          <Liens lien="/ravalement" name="Ravalement"/>
          <Liens lien="/maconnerie" name="Maçonnerie"/>
        </ul>
      )}
    </li>
  );
};

export default MenuDeroulant;

