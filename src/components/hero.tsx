import React from 'react';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex justify-center items-center bg-cover bg-center text-white text-center" style={{ backgroundImage: "url('/hero.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <h1 className="text-5xl font-bold uppercase mb-4 animate-slideInDown">Welcome to My Portfolio</h1>
        <p className="text-2xl mb-6 animate-fadeIn">Showcasing My Work and Projects</p>
        <button className="mt-8 px-8 py-4 bg-accent text-white font-bold uppercase transition duration-300 animate-slideInUp hover:bg-primary">
          <Link href="/projects">Explore More</Link>
        </button>
      </div>
    </section>
  );
};

export default Hero;
