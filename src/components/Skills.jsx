import { FaReact, FaNodeJs, FaDatabase, FaTools, FaAws, FaAngular, FaWordpress, FaCss3Alt } from "react-icons/fa";
import { 
  SiMongodb, SiExpress, SiTailwindcss, SiFramer, 
  SiLaravel, SiPhp, SiMysql, SiReact, SiJavascript,
  SiDocker, SiGit, SiJira, SiTrello, SiJquery,
  SiRazorpay, SiStripe, SiWhatsapp, SiGoogle, 
  SiPaytm, SiHdfcbank, SiBrevo, SiPostman,
  SiBootstrap, SiTwilio
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { GrMysql } from "react-icons/gr";
import { GiBank } from "react-icons/gi";
import { BsCCircleFill } from "react-icons/bs";
import sendinBlueLogo from "../assets/sendin-blue.svg";
import Section from './common/Section';
import SectionTitle from './common/SectionTitle';
import Card from './common/Card';

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      icon: FaReact,
      iconColor: "text-blue-500",
      items: [
        { name: "React", icon: SiReact, color: "text-blue-500" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
        { name: "CSS", icon: FaCss3Alt, color: "text-blue-400" },
        { name: "jQuery", icon: SiJquery, color: "text-blue-400" },
        { name: "AngularJS", icon: FaAngular, color: "text-red-500" },
        { name: "WordPress", icon: FaWordpress, color: "text-blue-600" },
        { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-500" },
        { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500" },
        { name: "LiveWire", icon: SiLaravel, color: "text-red-400" },
      ],
    },
    {
      category: "Backend",
      icon: FaNodeJs,
      iconColor: "text-green-500",
      items: [
        { name: "Laravel", icon: SiLaravel, color: "text-red-500" },
        { name: "PHP", icon: SiPhp, color: "text-purple-500" },
        { name: "MySQL", icon: SiMysql, color: "text-blue-600" },
        { name: "Filament", icon: SiLaravel, color: "text-blue-400" },
      ],
    },
    {
      category: "Tools & Services",
      icon: FaTools,
      iconColor: "text-yellow-500",
      items: [
        { name: "Docker", icon: SiDocker, color: "text-blue-500" },
        { name: "AWS", icon: FaAws, color: "text-orange-500" },
        { name: "Git", icon: SiGit, color: "text-red-500" },
        { name: "VS Code", icon: VscVscode, color: "text-blue-500" },
        { name: "Workbench", icon: GrMysql, color: "text-blue-600" },
        { name: "Jira", icon: SiJira, color: "text-blue-400" },
        { name: "Trello", icon: SiTrello, color: "text-blue-600" },
        { name: "Postman", icon: SiPostman, color: "text-orange-500" },
        { name: "BurpSuite", icon: FaTools, color: "text-purple-500" },
      ],
    },
    {
      category: "Third Party Integration",
      icon: FaDatabase,
      iconColor: "text-purple-500",
      items: [
        { name: "HDFC", icon: SiHdfcbank, color: "text-red-500" },
        { name: "RazorPay", icon: SiRazorpay, color: "text-blue-400" },
        { name: "Stripe", icon: SiStripe, color: "text-purple-500" },
        { name: "Paytm", icon: SiPaytm, color: "text-blue-500" },
        { name: "Chargebee", icon: BsCCircleFill, color: "text-purple-500" },
        { name: "WhatsApp", icon: SiWhatsapp, color: "text-green-500" },
        { name: "SendInBlue", icon: null, color: "" },
        { name: "RWG", icon: SiGoogle, color: "text-red-500" },
        { name: "Twilio", icon: SiTwilio, color: "text-red-500" },
      ],
    },
  ];

  return (
    <Section id="skills" className="bg-primary">
      <SectionTitle
        title="Skills & Technologies"
        accent="Technologies"
        subtitle="Tools and technologies I work with"
      />

      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-6 md:gap-8">
        {/* Development Skills Card */}
        <Card
          icon={FaReact}
          iconClassName="text-blue-500 text-2xl md:text-3xl"
          title="Development Skills"
          titleClassName="text-base md:text-lg font-medium mb-4"
          content={
            <div className="space-y-6">
              {/* Frontend Section */}
              <div>
                <h4 className="text-sm md:text-base font-medium text-secondary/90 mb-3">Frontend</h4>
                <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
                  {skills[0].items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex flex-col items-center gap-1 md:gap-1.5 p-1.5 md:p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <div className="text-base md:text-lg lg:text-xl">
                        {skill.icon ? (
                          <skill.icon className={skill.color} />
                        ) : (
                          skill.name === "SendInBlue" && (
                            <img src={sendinBlueLogo} alt="SendInBlue" className="w-4 h-4 md:w-5 md:h-5" />
                          )
                        )}
                      </div>
                      <span className="text-[9px] md:text-xs text-center text-secondary/90">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend Section */}
              <div>
                <h4 className="text-sm md:text-base font-medium text-secondary/90 mb-3">Backend</h4>
                <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
                  {skills[1].items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex flex-col items-center gap-1 md:gap-1.5 p-1.5 md:p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <div className="text-base md:text-lg lg:text-xl">
                        <skill.icon className={skill.color} />
                      </div>
                      <span className="text-[9px] md:text-xs text-center text-secondary/90">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          }
          delay={0.1}
          className="h-full"
        />

        {/* Tools and Integration Column */}
        <div className="grid grid-rows-2 gap-8">
          {/* Tools & Services Card */}
          <Card
            icon={FaTools}
            iconClassName="text-yellow-500 text-2xl md:text-3xl"
            title="Tools & Services"
            titleClassName="text-base md:text-lg font-medium mb-4"
            content={
              <div className="grid grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3">
                {skills[2].items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center gap-1 md:gap-1.5 p-1.5 md:p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <div className="text-base md:text-lg lg:text-xl">
                      <skill.icon className={skill.color} />
                    </div>
                    <span className="text-[9px] md:text-xs text-center text-secondary/90">{skill.name}</span>
                  </div>
                ))}
              </div>
            }
            delay={0.2}
            className="h-full"
          />

          {/* Third Party Integration Card */}
          <Card
            icon={FaDatabase}
            iconClassName="text-purple-500 text-2xl md:text-3xl"
            title="Third Party Integration"
            titleClassName="text-base md:text-lg font-medium mb-4"
            content={
              <div className="grid grid-cols-3 lg:grid-cols-5 gap-2 md:gap-3">
                {skills[3].items.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex flex-col items-center gap-1 md:gap-1.5 p-1.5 md:p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <div className="text-base md:text-lg lg:text-xl">
                      {skill.icon ? (
                        <skill.icon className={skill.color} />
                      ) : (
                        skill.name === "SendInBlue" && (
                          <img src={sendinBlueLogo} alt="SendInBlue" className="w-4 h-4 md:w-5 md:h-5" />
                        )
                      )}
                    </div>
                    <span className="text-[9px] md:text-xs text-center text-secondary/90">{skill.name}</span>
                  </div>
                ))}
              </div>
            }
            delay={0.3}
            className="h-full"
          />
        </div>
      </div>
    </Section>
  );
};

export default Skills;
  