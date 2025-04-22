import React from 'react';
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      company: 'WebAppLogic LLP',
      role: 'Senior Software Developer',
      period: 'Oct 2024 – Present',
      location: 'Remote',
      highlights: [
        'Working on advanced Laravel-based backend systems and API architecture',
        'Managing full project lifecycles and ensuring quality deliverables'
      ]
    },
    {
      company: 'SCHEDMAD Pvt Ltd',
      role: 'Senior Software Developer',
      period: 'Feb 2024 – Sep 2024',
      location: 'Vadodara, Gujarat',
      highlights: [
        'Led the Laravel development team, focusing on third-party integrations',
        'Successfully integrated Reserve with Google for real-time booking',
        'Mentored junior developers and optimized project workflows'
      ]
    },
    {
      company: 'Bharti Soft Tech Pvt. Ltd.',
      role: 'Software Engineer',
      period: 'Jul 2023 – Feb 2024',
      location: 'Vadodara, Gujarat',
      highlights: [
        'Built scalable B2B solutions for loan and credit management platforms',
        'Improved system security using tools like Burp Suite',
        'Collaborated cross-functionally to enhance performance and delivery'
      ]
    },
    {
      company: 'Transcloud Solutions',
      role: 'Software Developer',
      period: 'Aug 2019 – Mar 2023',
      location: 'Vadodara, Gujarat',
      highlights: [
        'Contributed to multiple product-based SaaS projects using Laravel',
        'Developed platforms like PROEMS, ProAdmin, ActiveWorld, and DCA',
        'Provided training and onboarding for new interns'
      ]
    }
  ];

  return (
    <section id="experience" className="py-12 bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="text-white">Professional </span>
            <span className="text-secondary">Journey</span>
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-secondary/20"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-secondary rounded-full"></div>

                {/* Content container */}
                <div className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Date */}
                  <div className="md:w-1/2 md:px-8 mb-4 md:mb-0">
                    <div className={`text-lg font-semibold ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      {exp.period}
                    </div>
                  </div>

                  {/* Experience card */}
                  <div className="md:w-1/2 md:px-8">
                    <div className="bg-secondary/10 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-secondary/20 transition-all duration-300">
                      <h3 className="text-xl font-bold text-secondary mb-2">{exp.role}</h3>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-lg font-semibold">{exp.company}</span>
                        <span className="text-gray-400">•</span>
                        <span className="text-gray-400">{exp.location}</span>
                      </div>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-secondary mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 