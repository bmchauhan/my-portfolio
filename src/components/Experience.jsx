import React from 'react';
import Section from './common/Section';
import SectionTitle from './common/SectionTitle';
import Card from './common/Card';
import { FONT_SIZES, TEXT_COLORS, FONT_WEIGHTS } from '../constants/typography';

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
    <Section id="experience" className="bg-primary">
      <SectionTitle
        title="Professional Journey"
        accent="Journey"
        subtitle="My career path and professional growth in software development"
      />

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
                  <div className={`${FONT_SIZES.subtitle.sm} ${FONT_SIZES.subtitle.md} ${FONT_WEIGHTS.semibold} ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    {exp.period}
                  </div>
                </div>

                {/* Experience card */}
                <div className="md:w-1/2 md:px-8">
                  <Card
                    title={exp.role}
                    delay={index * 0.1}
                    center={false}
                    content={
                      <>
                        <div className="flex items-center gap-2 mb-3">
                          <span className={`${FONT_SIZES.body.sm} ${FONT_SIZES.body.md} ${FONT_WEIGHTS.semibold}`}>
                            {exp.company}
                          </span>
                          <span className={TEXT_COLORS.secondary}>•</span>
                          <span className={TEXT_COLORS.secondary}>{exp.location}</span>
                        </div>
                        <ul className="space-y-2">
                          {exp.highlights.map((highlight, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-secondary mt-1">•</span>
                              <span className={TEXT_COLORS.secondary}>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    }
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Experience; 