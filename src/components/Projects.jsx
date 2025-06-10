import React, { useState } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import imdbCloneImage from "../assets/imdb-clone-image.png";
import siteSecuritySystemImage from "../assets/site-security-system.png";
import Section from "./common/Section";
import SectionTitle from "./common/SectionTitle";
import Card from "./common/Card";
import { FONT_SIZES, TEXT_COLORS } from "../constants/typography";

// Default project image with theme colors
const defaultProjectImage =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImdyYWQiIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIG9mZnNldD0iMCUiIHN0eWxlPSJzdG9wLWNvbG9yOiMxYTFhMjA7Ii8+PHN0b3Agb2Zmc2V0PSIxMDAlIiBzdHlsZT0ic3RvcC1jb2xvcjojMWEyYTMwOyIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSI4MDAiIGhlaWdodD0iNDAwIiBmaWxsPSJ1cmwoI2dyYWQpIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iI2U2ZTZlNiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPlByb2plY3QgUHJldmlldzwvdGV4dD48L3N2Zz4=";

const Projects = () => {
  const [typeFilter, setTypeFilter] = useState("All");
  const [tagFilter, setTagFilter] = useState("All");

  const projects = [
    {
      title: "Site Security Systems",
      description:
        "Built a responsive WordPress website for a security systems company, highlighting their CCTV and surveillance services with a clean layout and integrated contact form.",
      image: siteSecuritySystemImage,
      tags: ["Wordpress"],
      github: "#",
      live: "https://sitesecuritysystems.com",
      isProfessional: true,
    },
    {
      title: "PROEMS – Education Management System",
      description:
        "A Laravel-based platform for managing school operations, student records, and staff activity. Integrated roles & permissions with Spatie and real-time communication tools.",
      image: defaultProjectImage,
      tags: ["Laravel", "MySQL", "AJAX", "Bootstrap", "AngularJs"],
      github: "#",
      live: "#",
      isProfessional: true,
    },
    {
      title: "ProAdmin – Corporate Management System",
      description:
        "Multi-tenant SaaS product for managing internal teams, employee records, attendance, and task flows for enterprises.",
      image: defaultProjectImage,
      tags: ["Laravel", "MySQL", "AngularJS", "SaaS"],
      github: "#",
      live: "#",
      isProfessional: true,
    },
    {
      title: "ActiveWorld – Gym & Swim Management",
      description:
        "Custom CRM for gym and swimming class packages with Stripe & Razorpay integration, schedule automation, and user registration logic.",
      image: defaultProjectImage,
      tags: ["Laravel", "Stripe", "Razorpay", "Scheduler", "AngularJS"],
      github: "#",
      live: "#",
      isProfessional: true,
    },
    {
      title: "DCA – Dehradun Cricket Academy",
      description:
        "End-to-end solution for managing cricket training sessions, player profiles, coach assignments, and booking slots.",
      image: defaultProjectImage,
      tags: ["Laravel", "AJAX", "Bootstrap", "MySQL", "AngularJS"],
      github: "#",
      live: "#",
      isProfessional: true,
    },
    {
      title: "Scheduling & Management SaaS by Schedmad",
      description:
        "Core PHP-based scheduling and resource allocation system. Laravel is used for building robust APIs. Dockerized for deployment.",
      image: defaultProjectImage,
      tags: ["Core PHP", "Laravel API", "MySQL", "Docker", "CI/CD", "React"],
      github: "#",
      live: "#",
      isProfessional: true,
    },
    {
      title: "IMDB Clone",
      description:
        "A full-stack movie database application inspired by IMDB, featuring movie listings, search functionality, and user interactions.",
      image: imdbCloneImage,
      tags: ["React", "Vite", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/bmchauhan/IMDB_Clone",
      live: "#",
      isProfessional: false,
    },
  ];

  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();
  const filteredProjects = projects.filter((project) => {
    const typeMatch =
      typeFilter === "All" ||
      (typeFilter === "Professional" && project.isProfessional) ||
      (typeFilter === "Portfolio" && !project.isProfessional);

    const tagMatch = tagFilter === "All" || project.tags.includes(tagFilter);

    return typeMatch && tagMatch;
  });

  const getTagColor = (tag) => {
    const colors = {
      Laravel: "bg-red-500/10 text-red-400",
      PHP: "bg-purple-500/10 text-purple-400",
      MySQL: "bg-blue-500/10 text-blue-400",
      React: "bg-cyan-500/10 text-cyan-400",
      JavaScript: "bg-yellow-500/10 text-yellow-400",
      Docker: "bg-blue-500/10 text-blue-400",
      AngularJS: "bg-red-500/10 text-red-400",
      AJAX: "bg-blue-500/10 text-blue-400",
      "Tailwind CSS": "bg-cyan-500/10 text-cyan-400",
      Bootstrap: "bg-purple-500/10 text-purple-400",
      Wordpress: "bg-green-500/10 text-green-400",
    };
    return colors[tag] || "bg-gray-500/10 text-gray-400";
  };

  return (
    <Section
      id="projects"
      className="bg-gradient-to-br from-primary to-gray-900"
    >
      <SectionTitle
        title="Featured Projects"
        accent="Projects"
        subtitle="Here are some of my real-world projects that showcase my work."
        note={
          <>
            <strong className="text-purple-400">Note:</strong> Projects marked
            as
            <span className="text-purple-400 font-semibold">
              {" "}
              "Professional Work"
            </span>
            are developed during employment and are company intellectual
            property.
          </>
        }
      />

      {/* Filter Controls */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="px-4 py-2 bg-gray-800 text-white rounded-md"
        >
          <option value="All">All Types</option>
          <option value="Professional">Professional Work</option>
          <option value="Portfolio">Portfolio Project</option>
        </select>

        <select
          value={tagFilter}
          onChange={(e) => setTagFilter(e.target.value)}
          className="px-4 py-2 bg-gray-800 text-white rounded-md"
        >
          <option value="All">All Tags</option>
          {allTags.map((tag, idx) => (
            <option key={idx} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <Card
            key={index}
            className="overflow-hidden"
            delay={index * 0.1}
            content={
              <>
                <div className="relative h-48 overflow-hidden -mx-4 -mt-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
                  <div className="absolute top-4 right-4 z-10">
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-medium border border-white/30 ${
                        project.isProfessional
                          ? "bg-purple-600 text-white"
                          : "bg-[#111827] text-white"
                      }`}
                    >
                      {project.isProfessional
                        ? "Professional Work"
                        : "Portfolio Project"}
                    </span>
                  </div>
                </div>
                <div className="mt-4">
                  <h3
                    className={`${FONT_SIZES.subtitle.sm} ${FONT_SIZES.subtitle.md} ${TEXT_COLORS.primary} font-bold mb-2`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`${FONT_SIZES.body.sm} ${TEXT_COLORS.secondary} mb-4`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className={`px-3 py-1 rounded-full text-sm ${getTagColor(
                          tag
                        )}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        className={`${TEXT_COLORS.secondary} hover:text-white transition-colors`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        className={`${TEXT_COLORS.secondary} hover:text-white transition-colors`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </>
            }
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;
