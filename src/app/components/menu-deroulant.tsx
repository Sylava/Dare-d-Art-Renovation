"use client";
import React, { useState, useEffect } from "react";
import Liens from "./liens";

type Props = {
  closeMenu?: () => void;
};

const MenuDeroulant: React.FC<Props> = ({ closeMenu }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkScreen = () => setIsMobile(window.innerWidth <= 1250);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    if (isMobile) {
      e.preventDefault();
      setIsOpen((prev) => !prev);
    }
  };

  const handleMouseEnter = () => {
    if (!isMobile) setIsOpen(true);
  };
  const handleMouseLeave = () => {
    if (!isMobile) setIsOpen(false);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
    closeMenu?.();
  };

  return (
    <li
      className="dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className="dropdown-title"
        aria-expanded={isOpen}
        onClick={handleClick}
        type="button"
      >
        PRESTATIONS
        {mounted && isMobile && (
          <span className="dropdown-chevron" aria-hidden="true">
            {isOpen ? " ▲" : " ▼"}
          </span>
        )}
      </button>

      {isOpen && (
        <ul className="dropdown-menu">
          <Liens lien="/plomberie" name="Plomberie" onClick={handleLinkClick} />
          <Liens lien="/peinture" name="Peinture" onClick={handleLinkClick} />
          <Liens lien="/electricite" name="Electricité" onClick={handleLinkClick} />
          <Liens lien="/revetement" name="Revêtement mural et sol" onClick={handleLinkClick} />
          <Liens lien="/ravalement" name="Ravalement" onClick={handleLinkClick} />
          <Liens lien="/maconnerie" name="Maçonnerie" onClick={handleLinkClick} />
        </ul>
      )}
    </li>
  );
};

export default MenuDeroulant;
