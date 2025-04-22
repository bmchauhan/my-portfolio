import { 
  SiLaravel, SiPhp, SiMysql, SiReact, SiJavascript, 
  SiDocker, SiGit, SiJira, SiTrello,
  SiJquery, SiRazorpay, SiStripe, 
  SiWhatsapp, SiGoogle, SiPaytm, SiHdfcbank,
  SiBrevo
} from 'react-icons/si';
import { FaAws, FaAngular } from 'react-icons/fa';
import { GiBank } from 'react-icons/gi';
import { BsCCircleFill } from "react-icons/bs";
import sendInBlue from '../assets/sendin-blue.svg';

const Skills = () => {
  const skills = [
    // Backend
    { name: 'Laravel', icon: SiLaravel },
    { name: 'PHP', icon: SiPhp },
    { name: 'MySQL', icon: SiMysql },
    
    // Frontend
    { name: 'React', icon: SiReact },
    { name: 'JavaScript', icon: SiJavascript },
    
    // Tools
    { name: 'Docker', icon: SiDocker },
    { name: 'Git', icon: SiGit },
    { name: 'Jira', icon: SiJira },
    { name: 'Trello', icon: SiTrello },

    // Cloud
    { name: 'AWS', icon: FaAws },

    // Extras
    { name: 'AJAX', icon: SiJquery },
    { name: 'Angular JS', icon: FaAngular },
  ];

  const integrations = [
    { name: 'PNB', icon: GiBank },
    { name: 'HDFC Bank', icon: SiHdfcbank },
    { name: 'RazorPay', icon: SiRazorpay },
    { name: 'Stripe', icon: SiStripe },
    { name: 'WhatsApp API', icon: SiWhatsapp },
    { name: 'SendInBlue', image: sendInBlue },
    { name: 'RWG', icon: SiGoogle },
    { name: 'Paytm', icon: SiPaytm },
    { name: 'Chargebee', icon: BsCCircleFill },
  ];

  return (
    <section id="skills" className="bg-primary py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              My <span className="text-secondary">Skills</span>
            </h2>
            <p className="text-gray-300 text-center mb-8 max-w-xl mx-auto">
              Technologies and tools I work with
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/50 p-4 rounded-lg shadow-lg hover:shadow-secondary/20 transition-all transform hover:scale-105 group"
                >
                  <div className="flex flex-col items-center">
                    <skill.icon className="w-8 h-8 mb-2 text-white group-hover:text-secondary transition-colors duration-300" />
                    <span className="text-white text-sm font-secondary group-hover:text-secondary transition-colors duration-300">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Integrations Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
              Third-Party <span className="text-secondary">Integrations</span>
            </h2>
            <p className="text-gray-300 text-center mb-8 max-w-xl mx-auto">
              Payment gateways and services I've integrated
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {integrations.map((integration, index) => (
                <div 
                  key={index}
                  className="bg-gray-800/50 p-4 rounded-lg shadow-lg hover:shadow-secondary/20 transition-all transform hover:scale-105 group"
                >
                  <div className="flex flex-col items-center">
                    {integration.image ? (
                      <img 
                        src={integration.image} 
                        alt={integration.name}
                        className="w-8 h-8 mb-2 object-contain filter brightness-0 invert group-hover:brightness-100 group-hover:invert-0 transition-all duration-300"
                      />
                    ) : (
                      <integration.icon 
                        className="w-8 h-8 mb-2 text-white group-hover:text-secondary transition-colors duration-300" 
                      />
                    )}
                    <span className="text-white text-sm font-secondary group-hover:text-secondary transition-colors duration-300">{integration.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
  