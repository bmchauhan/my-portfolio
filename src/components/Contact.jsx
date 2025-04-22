// src/components/Contact.jsx
import React, { useState, useRef, useEffect } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import SocialLinks from '../components/common/SocialLinks';

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
    instagram: 'https://instagram.com/yourusername',
    twitter: 'https://twitter.com/yourusername'
  };

  return (
    <section id="contact" className="bg-gradient-to-br from-primary to-gray-900 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 md:mb-3">
            Get In <span className="text-secondary">Touch</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-secondary mx-auto mb-2 md:mb-3"></div>
          <p className="text-xs sm:text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out to me for any opportunities or collaborations. I'm always open to discussing new projects and ideas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Form - Left Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-primary/50 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-secondary/20"
          >
            <form ref={form} onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 md:mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 md:px-4 md:py-3 rounded-lg bg-primary/30 text-white border ${
                    errors.name ? 'border-red-500' : 'border-secondary/20'
                  } focus:border-secondary focus:ring-2 focus:ring-secondary/50 transition-all text-xs sm:text-sm`}
                  placeholder="John Doe"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 md:mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 md:px-4 md:py-3 rounded-lg bg-primary/30 text-white border ${
                    errors.email ? 'border-red-500' : 'border-secondary/20'
                  } focus:border-secondary focus:ring-2 focus:ring-secondary/50 transition-all text-xs sm:text-sm`}
                  placeholder="john@example.com"
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="title" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 md:mb-2">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`w-full px-3 py-2 md:px-4 md:py-3 rounded-lg bg-primary/30 text-white border ${
                    errors.title ? 'border-red-500' : 'border-secondary/20'
                  } focus:border-secondary focus:ring-2 focus:ring-secondary/50 transition-all text-xs sm:text-sm`}
                  placeholder="Project Inquiry"
                />
                {errors.title && (
                  <p className="mt-1 text-xs text-red-500">{errors.title}</p>
                )}
              </div>
              <div>
                <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 md:mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full px-3 py-2 md:px-4 md:py-3 rounded-lg bg-primary/30 text-white border ${
                    errors.message ? 'border-red-500' : 'border-secondary/20'
                  } focus:border-secondary focus:ring-2 focus:ring-secondary/50 transition-all text-xs sm:text-sm`}
                  placeholder="Your message here..."
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              {/* Status Messages */}
              <AnimatePresence>
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-3 md:p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-xs sm:text-sm"
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-3 md:p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-xs sm:text-sm"
                  >
                    Oops! Something went wrong. Please try again later.
                  </motion.div>
                )}
              </AnimatePresence>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className={`w-full px-4 py-2 md:px-6 md:py-3 bg-secondary text-black font-semibold rounded-lg shadow-lg hover:bg-purple-300 transition-all flex items-center justify-center gap-2 text-xs sm:text-sm ${
                  isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane size={14} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info Cards - Right Side */}
          <div className="flex flex-col gap-4 md:gap-6">
            {/* First Row - Location and Phone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-primary/50 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-secondary/20 hover:border-secondary/40 transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-2 md:mb-3">
                    <FaMapMarkerAlt className="text-secondary" size={18} />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">Location</h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-300">{contactInfo.location}</p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-primary/50 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-secondary/20 hover:border-secondary/40 transition-all"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-2 md:mb-3">
                    <FaPhone className="text-secondary" size={18} />
                  </div>
                  <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">Phone</h3>
                  <div className="flex flex-col gap-1">
                    <a 
                      href={`tel:${contactInfo.phone1}`}
                      className="text-xs sm:text-sm md:text-base text-gray-300 hover:text-secondary transition-colors"
                    >
                      {contactInfo.phone1}
                    </a>
                    <a 
                      href={`tel:${contactInfo.phone2}`}
                      className="text-xs sm:text-sm md:text-base text-gray-300 hover:text-secondary transition-colors"
                    >
                      {contactInfo.phone2}
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Second Row - Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-primary/50 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-secondary/20 hover:border-secondary/40 transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-2 md:mb-3">
                  <FaEnvelope className="text-secondary" size={18} />
                </div>
                <h3 className="text-base md:text-lg font-semibold text-white mb-1 md:mb-2">Email</h3>
                <a 
                  href={`mailto:${contactInfo.email}?subject=Portfolio%20Inquiry`}
                  className="text-xs sm:text-sm md:text-base text-gray-300 hover:text-secondary transition-colors break-all"
                >
                  {contactInfo.email}
                </a>
              </div>
            </motion.div>

            {/* Third Row - Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-primary/50 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-secondary/20 hover:border-secondary/40 transition-all"
            >
              <div className="flex flex-col items-center text-center">
                <h3 className="text-base md:text-lg font-semibold text-white mb-4 md:mb-6">Connect With Me</h3>
                <SocialLinks 
                  socialLinks={socialLinks}
                  iconClassName="text-gray-300 hover:text-secondary transition-colors"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
  