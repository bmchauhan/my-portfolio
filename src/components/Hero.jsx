import heroToy from '../assets/toy.png'; // Replace with your image
import { FaAws, FaGithub, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Hero = () => {

  // Replace these with your actual profile links
  const socialLinks = {
    github: 'https://github.com/bmchauhan',
    linkedin: 'https://linkedin.com/in/chauhan-bhavesh-36a954119',
    instagram: 'https://instagram.com/yourusername',
    facebook: 'https://facebook.com/yourusername'
  };

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="bg-primary text-white min-h-[90vh] flex items-center justify-center px-4 md:px-8 lg:px-20 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left: Image */}
          <div className="lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative">
              <img 
                src={heroToy} 
                alt="Bhavesh Toy Style" 
                className="w-[320px] md:w-[400px] rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-300" 
              />
              <div className="absolute -inset-6 bg-gradient-secondary opacity-30 rounded-xl blur-2xl -z-10"></div>
              <div className="absolute -inset-4 bg-gradient-secondary opacity-20 rounded-xl blur-xl -z-10"></div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-primary leading-tight">
              Hey 👋🏻 I'm Bhavesh,
              <br />
              <span className="text-secondary">Software Engineer</span>
              <br />
              <span className="text-lg md:text-xl text-gray-300">with 5+ Years of Experience</span>
            </h1>
            <p className="mt-6 text-gray-300 font-secondary text-base md:text-lg max-w-xl mx-auto lg:mx-0">
              I specialize in building scalable Laravel backends, integrating APIs, payment gateways, and handling deployment. Currently exploring Docker and CI/CD.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="#projects" 
                onClick={handleScrollToProjects}
                className="px-8 py-3 bg-secondary text-black font-semibold rounded-full shadow-lg hover:bg-purple-300 transition-all transform hover:scale-105"
              >
                See My Work
              </a>
              <a 
                href="#contact" 
                onClick={handleScrollToContact}
                className="px-8 py-3 border-2 border-secondary text-white font-semibold rounded-full hover:bg-secondary hover:text-black transition-all transform hover:scale-105"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex justify-center lg:justify-start gap-4">
              <motion.a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors"
                title="GitHub"
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors"
                title="LinkedIn"
              >
                <FaLinkedin size={24} />
              </motion.a>
              <motion.a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors"
                title="Instagram"
              >
                <FaInstagram size={24} />
              </motion.a>
              <motion.a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors"
                title="Facebook"
              >
                <FaFacebook size={24} />
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-12 h-12">
          <div className="w-full h-full bg-secondary rounded-full blur-sm animate-[pulse_4s_ease-in-out_infinite]"></div>
        </div>
        <div className="absolute top-1/2 right-20 w-14 h-14">
          <div className="w-full h-full bg-secondary rounded-full blur-sm animate-[pulse_4s_ease-in-out_infinite_1s]"></div>
        </div>
        <div className="absolute bottom-16 left-1/3 w-10 h-10">
          <div className="w-full h-full bg-secondary rounded-full blur-sm animate-[pulse_4s_ease-in-out_infinite_2s]"></div>
        </div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16">
          <div className="w-full h-full bg-secondary rounded-full blur-sm animate-[pulse_4s_ease-in-out_infinite_3s]"></div>
        </div>
        <div className="absolute bottom-1/3 left-1/4 w-8 h-8">
          <div className="w-full h-full bg-secondary rounded-full blur-sm animate-[pulse_4s_ease-in-out_infinite_4s]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
