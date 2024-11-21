"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "@/public/Logo.png";
import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="sticky top-0 z-50 w-full flex items-center lg:justify-around lg:p-0 justify-between p-4 pr-8 shadow-sm bg-white">
      <div className="lg:py-4">
        <Image
          src={Logo}
          width={320}
          height={36}
          alt="Logo"
          className="h-auto w-[240px] lg:w-[320px]"
        />
      </div>

      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          aria-label="Toggle menu"
          className="text-black hover:text-primary"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Navigation Menu (Mobile) */}
      <nav
        className={`fixed top-0 left-0 z-50 h-full w-full bg-white flex items-center justify-center transition-transform ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        } lg:hidden`}
      >
        <button
          onClick={toggleMenu}
          aria-label="Close menu"
          className="absolute top-4 right-4 text-black hover:text-primary"
        >
          <X size={28} />
        </button>
        <ul className="flex flex-col items-center gap-6">
          <li>
            <a
              href="#inicio"
              className="text-xl hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Início
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-xl hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </a>
          </li>
          <li>
            <a
              href="#story"
              className="text-xl hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              História
            </a>
          </li>
          <li className="flex flex-col gap-4 mt-6">
            <Button
              variant="link"
              className="text-black text-lg hover:font-bold"
              onClick={() => setIsMenuOpen(false)}
            >
              Área do Cliente
            </Button>
            <Button className="flex gap-2 bg-primary">
              Entrar em contato <ArrowRight />
            </Button>
          </li>
        </ul>
      </nav>

      {/* Navigation Menu and Buttons (Desktop Only) */}
      <div className="hidden lg:flex lg:items-center">
        <ul className="lg:flex lg:gap-6">
          <li>
            <a href="#inicio" className="text-md hover:text-primary">
              Início
            </a>
          </li>
          <li>
            <a href="#services" className="text-md hover:text-primary">
              Serviços
            </a>
          </li>
          <li>
            <a href="#story" className="text-md hover:text-primary">
              História
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden lg:flex lg:items-center">
        <Button variant="link" className="text-black hover:font-bold">
          Área do Cliente
        </Button>
        <Button className="flex gap-2 bg-primary">
          Entrar em contato <ArrowRight />
        </Button>
      </div>
    </header>
  );
};

export default Header;
