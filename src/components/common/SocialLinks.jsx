import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const SocialLinks = ({ socialLinks, iconClassName = "" }) => {
  return (
    <div className="flex justify-center gap-4">
      <a
        href={socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        className={iconClassName}
        title="GitHub"
      >
        <FaGithub size={24} />
      </a>
      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className={iconClassName}
        title="LinkedIn"
      >
        <FaLinkedin size={24} />
      </a>
      <a
        href={socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className={iconClassName}
        title="Twitter"
      >
        <FaTwitter size={24} />
      </a>
    </div>
  );
};

export default SocialLinks; 