"use client";
import Link from "next/link";
import { Facebook, Instagram, Twitter, YouTube } from "@mui/icons-material";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 py-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* ShopHub */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">ShopHub</h2>
          <p className="text-sm">
            Your one-stop online destination for quality and affordability.
            Explore a wide range of products with seamless shopping experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/shop">Shop</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/blogs">Blogs</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/faq">FAQs</Link></li>
            <li><Link href="/returns">Returns</Link></li>
            <li><Link href="/shipping">Shipping</Link></li>
            <li><Link href="/support">Support</Link></li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <Link href="#"><Facebook /></Link>
            <Link href="#"><Instagram /></Link>
            <Link href="#"><Twitter /></Link>
            <Link href="#"><YouTube /></Link>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} ShopHub. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
