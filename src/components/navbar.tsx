import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-primary">
      <Link href="/">
        <Image src="/profile.png" alt="Logo" className="h-10" width={40} height={40} />
      </Link>
      <div className="flex gap-4 lg:gap-8">
        <Link href="/" className="text-white text-lg transition-colors duration-300 hover:text-accent">Home</Link>
        <Link href="/about" className="text-white text-lg transition-colors duration-300 hover:text-accent">About</Link>
        <Link href="/project" className="text-white text-lg transition-colors duration-300 hover:text-accent">Projects</Link>
        <Link href="/contact" className="text-white text-lg transition-colors duration-300 hover:text-accent">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
