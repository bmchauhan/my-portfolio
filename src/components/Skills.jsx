import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaTools, FaAws, FaAngular, FaWordpress } from "react-icons/fa";
import { 
  SiMongodb, SiExpress, SiTailwindcss, SiFramer, 
  SiLaravel, SiPhp, SiMysql, SiReact, SiJavascript,
  SiDocker, SiGit, SiJira, SiTrello, SiJquery,
  SiRazorpay, SiStripe, SiWhatsapp, SiGoogle, 
  SiPaytm, SiHdfcbank, SiBrevo, SiPostman,
  SiBootstrap
} from "react-icons/si";
import { GiBank } from "react-icons/gi";
import { BsCCircleFill } from "react-icons/bs";
import sendinBlueLogo from "../assets/sendin-blue.svg";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: <SiReact className="text-blue-500" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
        { name: "jQuery", icon: <SiJquery className="text-blue-400" /> },
        { name: "AngularJS", icon: <FaAngular className="text-red-500" /> },
        { name: "WordPress", icon: <FaWordpress className="text-blue-600" /> },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-500" /> },
        { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
        { name: "LiveWire", icon: <SiLaravel className="text-red-400" /> },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Laravel", icon: <SiLaravel className="text-red-500" /> },
        { name: "PHP", icon: <SiPhp className="text-purple-500" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
        { name: "Filament", icon: <SiLaravel className="text-blue-400" /> },
      ],
    },
    {
      category: "Tools & Services",
      items: [
        { name: "Docker", icon: <SiDocker className="text-blue-500" /> },
        { name: "AWS", icon: <FaAws className="text-orange-500" /> },
        { name: "Git", icon: <SiGit className="text-red-500" /> },
        { name: "Jira", icon: <SiJira className="text-blue-400" /> },
        { name: "Trello", icon: <SiTrello className="text-blue-600" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "BurpSuite", icon: <FaTools className="text-purple-500" /> },
      ],
    },
    {
      category: "Third Party Integration",
      items: [
        { name: "PNB", icon: <GiBank className="text-blue-500" /> },
        { name: "HDFC", icon: <SiHdfcbank className="text-red-500" /> },
        { name: "RazorPay", icon: <SiRazorpay className="text-blue-400" /> },
        { name: "Stripe", icon: <SiStripe className="text-purple-500" /> },
        { name: "WhatsApp", icon: <SiWhatsapp className="text-green-500" /> },
        { name: "SendInBlue", icon: <img src={sendinBlueLogo} alt="SendInBlue" className="w-6 h-6" /> },
        { name: "RWG", icon: <SiGoogle className="text-red-500" /> },
        { name: "Paytm", icon: <SiPaytm className="text-blue-500" /> },
        { name: "Chargebee", icon: <BsCCircleFill className="text-purple-500" /> },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">
            <span className="text-white">Skills & </span>
            <span className="text-secondary">Technologies</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-4"></div>
          <p className="text-gray-300">Tools and technologies I work with</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillCategory, index) => (
            <motion.div
              key={skillCategory.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-6"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                {skillCategory.category === "Frontend" && <FaReact className="text-blue-500" />}
                {skillCategory.category === "Backend" && <FaNodeJs className="text-green-500" />}
                {skillCategory.category === "Tools & Services" && <FaTools className="text-yellow-500" />}
                {skillCategory.category === "Third Party Integration" && <FaDatabase className="text-purple-500" />}
                {skillCategory.category}
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {skillCategory.items.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    whileHover={{ scale: 1.05 }}
                    className="flex flex-col items-center gap-2 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <div className="text-2xl">{skill.icon}</div>
                    <span className="text-sm text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
  