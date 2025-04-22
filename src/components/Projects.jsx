import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

// Default project image
const defaultProjectImage = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iIzFhMWIxZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM2YzcyN2UiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5Qcm9qZWN0IFByZXZpZXc8L3RleHQ+PC9zdmc+';

const Projects = () => {
  const projects = [
    {
      title: "PROEMS – Education Management System",
      description: "A Laravel-based platform for managing school operations, student records, and staff activity. Integrated roles & permissions with Spatie and real-time communication tools.",
      image: defaultProjectImage,
      tags: ["Laravel", "MySQL", "AJAX", "Bootstrap", "AngularJs"],
      github: "#",
      live: "#",
      isProfessional: true
    },
    {
      title: "ProAdmin – Corporate Management System",
      description: "Multi-tenant SaaS product for managing internal teams, employee records, attendance, and task flows for enterprises.",
      image: defaultProjectImage,
      tags: ["Laravel", "MySQL", "AngularJS", "SaaS"],
      github: "#",
      live: "#",
      isProfessional: true
    },
    {
      title: "ActiveWorld – Gym & Swim Management",
      description: "Custom CRM for gym and swimming class packages with Stripe & Razorpay integration, schedule automation, and user registration logic.",
      image: defaultProjectImage,
      tags: ["Laravel", "Stripe", "Razorpay", "Scheduler", "AngularJS"],
      github: "#",
      live: "#",
      isProfessional: true
    },
    {
      title: "DCA – Dehradun Cricket Academy",
      description: "End-to-end solution for managing cricket training sessions, player profiles, coach assignments, and booking slots.",
      image: defaultProjectImage,
      tags: ["Laravel", "AJAX", "Bootstrap", "MySQL", "AngularJS"],
      github: "#",
      live: "#",
      isProfessional: true
    },
    {
      title: "Scheduling & Management SaaS by Schedmad",
      description: "Core PHP-based scheduling and resource allocation system. Laravel is used for building robust APIs. Dockerized for deployment.",
      image: defaultProjectImage,
      tags: ["Core PHP", "Laravel API", "MySQL", "Docker", "CI/CD", "React"],
      github: "#",
      live: "#",
      isProfessional: true
    },
    {
      title: "IMDB Clone",
      description: "A simple IMDB Clone project built with react and external API",
      image: defaultProjectImage,
      tags: ["React", "External API", "Tailwind CSS"],
      github: "#",
      live: "#",
      isProfessional: false
    }
  ];

  const getTagColor = (tag) => {
    const colors = {
      'Laravel': 'bg-red-500/10 text-red-400',
      'PHP': 'bg-purple-500/10 text-purple-400',
      'MySQL': 'bg-blue-500/10 text-blue-400',
      'React': 'bg-cyan-500/10 text-cyan-400',
      'JavaScript': 'bg-yellow-500/10 text-yellow-400',
      'Docker': 'bg-blue-500/10 text-blue-400',
      'Git': 'bg-orange-500/10 text-orange-400',
      'AWS': 'bg-yellow-500/10 text-yellow-400',
      'API Integration': 'bg-green-500/10 text-green-400',
      'Google Calendar': 'bg-blue-500/10 text-blue-400',
      'Security': 'bg-red-500/10 text-red-400',
      'SaaS': 'bg-purple-500/10 text-purple-400',
      'Multi-tenant': 'bg-indigo-500/10 text-indigo-400',
      'Analytics': 'bg-teal-500/10 text-teal-400',
      'AngularJS': 'bg-red-500/10 text-red-400',
      'Bootstrap': 'bg-purple-500/10 text-purple-400',
      'AJAX': 'bg-blue-500/10 text-blue-400',
      'Stripe': 'bg-indigo-500/10 text-indigo-400',
      'Razorpay': 'bg-blue-500/10 text-blue-400',
      'Scheduler': 'bg-green-500/10 text-green-400',
      'CI/CD': 'bg-yellow-500/10 text-yellow-400',
      'Core PHP': 'bg-purple-500/10 text-purple-400',
      'External API': 'bg-green-500/10 text-green-400',
      'Tailwind CSS': 'bg-cyan-500/10 text-cyan-400'
    };
    return colors[tag] || 'bg-gray-500/10 text-gray-400';
  };

  return (
    <section id="projects" className="bg-gradient-to-br from-primary to-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Featured <span className="text-secondary">Projects</span>
        </h2>
        <p className="text-gray-300 text-center mb-4 max-w-2xl mx-auto">
          Here are some of my real-world projects that showcase my backend and API expertise using Laravel and PHP.
        </p>
        <p className="text-gray-400 text-center text-sm italic mb-12 max-w-2xl mx-auto">
          Note: Projects marked as "Professional Work" were developed during my professional tenure with various companies. 
          Due to confidentiality and intellectual property rights, I cannot provide direct links or access to these projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-primary/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2 border border-secondary/20 hover:border-secondary/40"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${
                    project.isProfessional 
                      ? 'bg-green-500/10 text-green-400 border-green-500/20' 
                      : 'bg-purple-500/10 text-purple-400 border-purple-500/20'
                  }`}>
                    {project.isProfessional ? 'Professional Work' : 'Portfolio Project'}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className={`px-3 py-1 rounded-full text-sm ${getTagColor(tag)}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4">
                  <a 
                    href={project.github} 
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaGithub size={20} />
                  </a>
                  <a 
                    href={project.live} 
                    className="text-gray-400 hover:text-white transition-colors"
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
