"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "@mui/icons-material";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <nav className="fixed top-0 z-50 w-full h-20 bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-white">
          <span className="text-yellow-400">Shop</span>Hub
        </Link>

        <ul className="hidden md:flex gap-8 text-lg font-medium">
          <li>
            <Link href="/" className="hover:text-yellow-400">
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" className="hover:text-yellow-400">
              Shop
            </Link>
          </li>

          <li>
            <Link href="/contact" className="hover:text-yellow-400">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/sign-up" className="hover:text-yellow-400">
              Sign up
            </Link>
          </li>
        </ul>

        <div className="md:hidden">
          {isOpen ? (
            <X className="cursor-pointer" onClick={() => setIsOpen(false)} />
          ) : (
            <Menu className="cursor-pointer" onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {isOpen && (
        <ul className="md:hidden bg-gray-800 px-6 py-4 space-y-4 text-lg">
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" onClick={() => setIsOpen(false)}>
              Shop
            </Link>
          </li>
          <li>
            <Link href="/sign-up" onClick={() => setIsOpen(false)}>
              Sign up
            </Link>
          </li>
          <li>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
