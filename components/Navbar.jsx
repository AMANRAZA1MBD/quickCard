"use client";
import React from "react";
import { assets, BagIcon, CartIcon } from "@/assets/assets";
import Link from "next/link";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import { useClerk, UserButton, useUser } from "@clerk/nextjs";

const Navbar = () => {
  const { isSeller, router } = useAppContext();
  const { openSignIn } = useClerk();
  const { isSignedIn } = useUser();

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/all-products" },
    { label: "About Us", href: "/" },
    { label: "Contact", href: "/" },
  ];

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700" aria-label="Main navigation">
      <Image
        className="cursor-pointer w-28 md:w-32"
        onClick={() => router.push('/')}
        src={assets.logo}
        alt="logo"
      />

      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        {navLinks.map((link) => (
          <Link key={link.label} href={link.href} className="hover:text-gray-900 transition">
            {link.label}
          </Link>
        ))}

        {isSeller && (
          <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">
            Seller Dashboard
          </button>
        )}
      </div>

      {/* Desktop Right Side */}
      <ul className="hidden md:flex items-center gap-4">
        <Image className="w-4 h-4" src={assets.search_icon} alt="search icon" />
        
        {isSignedIn && (
          <>
            <button onClick={() => router.push('/cart')}>
              <CartIcon className="w-5 h-5" />
            </button>
            <button onClick={() => router.push('/my-orders')}>
              <BagIcon className="w-5 h-5" />
            </button>
          </>
        )}

        {isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition">
            <Image src={assets.user_icon} alt="user icon" />
            Sign In
          </button>
        )}
      </ul>

      {/* Mobile Right Side */}
      <div className="flex items-center md:hidden gap-3">
        {isSeller && (
          <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">
            Seller Dashboard
          </button>
        )}

        {isSignedIn && (
          <>
            <button onClick={() => router.push('/cart')}>
              <CartIcon className="w-5 h-5" />
            </button>
            <button onClick={() => router.push('/my-orders')}>
              <BagIcon className="w-5 h-5" />
            </button>
          </>
        )}

        {isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <button onClick={openSignIn} className="flex items-center gap-2 hover:text-gray-900 transition">
            <Image src={assets.user_icon} alt="user icon" />
            Account
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
