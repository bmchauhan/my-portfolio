import heroToy from '../assets/toy.png'; // Replace with your image
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import SocialLinks from './common/SocialLinks';
import Section from './common/Section';
import Button from './common/Button';
import { FONT_SIZES, TEXT_COLORS, FONT_WEIGHTS } from '../constants/typography';

const Hero = () => {

  // Replace these with your actual profile links
  const socialLinks = {
    github: 'https://github.com/bmchauhan',
    linkedin: 'https://linkedin.com/in/chauhan-bhavesh-36a954119',
    twitter: 'https://twitter.com/yourusername'
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
    <Section 
      id="hero" 
      className="bg-primary min-h-[90vh] flex items-center justify-center"
      withContainer={true}
    >
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
          <h1 className="text-[28px] md:text-[38px] lg:text-[48px] font-bold font-primary leading-tight">
            Hey 👋🏻 I'm Bhavesh,
            <br />
            <span className={TEXT_COLORS.accent}>Software Engineer</span>
            <br />
            <span className="text-[20px] md:text-[24px] lg:text-[28px] text-gray-300">
              with 5+ Years of Experience
            </span>
          </h1>
          <p className={`mt-6 ${FONT_SIZES.body.sm} ${FONT_SIZES.body.md} ${FONT_SIZES.body.lg} ${TEXT_COLORS.secondary} font-secondary max-w-xl mx-auto lg:mx-0`}>
            I specialize in building scalable Laravel backends, integrating APIs, payment gateways, and handling deployment. Currently exploring Docker and CI/CD.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button
              onClick={handleScrollToProjects}
              variant="primary"
              size="lg"
            >
              See My Work
            </Button>
            <Button
              onClick={handleScrollToContact}
              variant="outline"
              size="lg"
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex justify-center lg:justify-start">
            <SocialLinks 
              socialLinks={socialLinks}
              iconClassName="p-3 rounded-full bg-secondary/10 text-secondary hover:bg-secondary/20 transition-colors"
            />
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
    </Section>
  );
};

export default Hero;
