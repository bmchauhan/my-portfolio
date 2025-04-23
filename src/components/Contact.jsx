// src/components/Contact.jsx
import React, { useState, useRef, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import SocialLinks from './common/SocialLinks';
import Section from './common/Section';
import SectionTitle from './common/SectionTitle';
import Button from './common/Button';
import Card from './common/Card';
import { FONT_SIZES, TEXT_COLORS, FONT_WEIGHTS } from '../constants/typography';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    title: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Auto-dismiss success message after 5 seconds
  useEffect(() => {
    let timer;
    if (submitStatus === 'success') {
      timer = setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [submitStatus]);

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Title validation
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      if (result.status === 200) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          title: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const contactInfo = {
    location: 'Vadodara, Gujarat, India',
    phone1: '+918347803810',
    phone2: '+917984674857',
    email: 'bhaveshchauhan581998@gmail.com'
  };

  const socialLinks = {
    github: 'https://github.com/bmchauhan',
    linkedin: 'https://linkedin.com/in/chauhan-bhavesh-36a954119',
    twitter: 'https://twitter.com/yourusername'
  };

  const labelClasses = `block ${FONT_SIZES.small.sm} ${FONT_SIZES.small.md} ${FONT_SIZES.small.lg} ${FONT_WEIGHTS.medium} ${TEXT_COLORS.secondary} mb-1 md:mb-2 text-left`;
  const inputClasses = `w-full px-3 py-2 md:px-4 md:py-3 rounded-lg bg-primary/30 text-white border border-secondary/20 focus:border-secondary focus:ring-2 focus:ring-secondary/50 transition-all ${FONT_SIZES.small.sm} ${FONT_SIZES.small.md} ${FONT_SIZES.small.lg}`;
  const errorClasses = `mt-1 ${FONT_SIZES.small.sm} text-red-500 text-left`;

  return (
    <Section id="contact" className="bg-gradient-to-br from-primary to-gray-900">
      <SectionTitle
        title="Get In Touch"
        accent="Touch"
        subtitle="Feel free to reach out to me for any opportunities or collaborations. I'm always open to discussing new projects and ideas."
      />

      <div className="grid grid-cols-1 lg:grid-cols-[58%_38%] gap-6 lg:gap-[4%]">
        {/* Contact Form - Left Side */}
        <Card 
          hover={false} 
          className="lg:p-6 xl:p-8"
          center={false}
          content={
            <form ref={form} onSubmit={handleSubmit} className="w-full space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className={labelClasses}>
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`${inputClasses} ${errors.name ? 'border-red-500' : ''}`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className={errorClasses}>{errors.name}</p>
                )}
              </div>

              <div>
                <label htmlFor="email" className={labelClasses}>
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`${inputClasses} ${errors.email ? 'border-red-500' : ''}`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className={errorClasses}>{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="title" className={labelClasses}>
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`${inputClasses} ${errors.title ? 'border-red-500' : ''}`}
                  placeholder="Project Inquiry"
                />
                {errors.title && (
                  <p className={errorClasses}>{errors.title}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className={labelClasses}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`${inputClasses} ${errors.message ? 'border-red-500' : ''}`}
                  placeholder="Your message here..."
                ></textarea>
                {errors.message && (
                  <p className={errorClasses}>{errors.message}</p>
                )}
              </div>

              {/* Status Messages */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <div className="p-3 md:p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-xs sm:text-sm">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="p-3 md:p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-xs sm:text-sm">
                    Oops! Something went wrong. Please try again later.
                  </div>
                )}
              </AnimatePresence>

              <Button
                type="submit"
                disabled={isSubmitting}
                isLoading={isSubmitting}
                icon={FaPaperPlane}
                fullWidth
              >
                Send Message
              </Button>
            </form>
          } 
        />

        {/* Contact Info Cards - Right Side */}
        <div className="grid grid-rows-[auto_auto_1fr] gap-4 md:gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <Card
              icon={FaMapMarkerAlt}
              title="Location"
              content={contactInfo.location}
              delay={0.2}
            />
            <Card
              icon={FaPhone}
              title="Phone"
              content={
                <div className="flex flex-col items-end gap-1">
                  <a href={`tel:${contactInfo.phone1}`} className={`${TEXT_COLORS.secondary} hover:text-secondary transition-colors`}>
                    {contactInfo.phone1}
                  </a>
                  <a href={`tel:${contactInfo.phone2}`} className={`${TEXT_COLORS.secondary} hover:text-secondary transition-colors`}>
                    {contactInfo.phone2}
                  </a>
                </div>
              }
              delay={0.3}
              center={false}
              className="text-right"
            />
          </div>

          <Card
            icon={FaEnvelope}
            title="Email"
            content={
              <a 
                href={`mailto:${contactInfo.email}?subject=Portfolio%20Inquiry`}
                className={`${TEXT_COLORS.secondary} hover:text-secondary transition-colors break-all text-right block`}
              >
                {contactInfo.email}
              </a>
            }
            delay={0.4}
            center={false}
            className="text-right"
          />

          <Card
            title="Connect With Me"
            content={
              <div className="flex justify-end">
                <SocialLinks 
                  socialLinks={socialLinks}
                  iconClassName={`${TEXT_COLORS.secondary} hover:text-secondary transition-colors`}
                />
              </div>
            }
            delay={0.5}
            center={false}
            className="text-right"
          />
        </div>
      </div>
    </Section>
  );
};

export default Contact;
  