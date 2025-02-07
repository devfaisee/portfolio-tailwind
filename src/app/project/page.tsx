import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Weather App',
    description: 'A real-time weather app using Next.js, OpenWeather API, and Tailwind CSS.',
    image: '/weater.png',
    technologies: ['Next.js', 'TypeScript', 'Tailwind', 'API'],
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with product listings and payment integration.',
    image: '/ecom.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
  },
  {
    id: 3,
    title: 'AI Image Generator',
    description: 'A web app that generates AI-powered images using OpenAI\'s API.',
    image: '/aiimage.png',
    technologies: ['Next.js', 'OpenAI API', 'Tailwind', 'Vercel'],
  },
];

const Projects: React.FC = () => {
  return (
    <section className="py-16 px-8 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold mb-8 animate-fadeInDown text-secondary">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden animate-fadeIn">
            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-secondary mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
