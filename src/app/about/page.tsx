import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <section className="py-16 px-8 bg-white text-center">
      <h2 className="text-4xl text-secondary mb-4 animate-fadeInDown">About me</h2>
      <p className="text-xl text-textColor leading-relaxed max-w-2xl mx-auto animate-fadeIn">
        Welcome to my portfolio! I am a passionate developer with a keen eye for design and functionality. My work spans various projects that showcase my skills and dedication to creating exceptional digital experiences.
      </p>
      <img src="/profile.png" alt="Profile" className="w-48 h-48 rounded-full mt-8 animate-fadeInUp" />
    </section>
  );
};

export default AboutUs;
