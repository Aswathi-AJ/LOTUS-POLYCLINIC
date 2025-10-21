// src/App.jsx
import React, { useState, useEffect } from 'react';
import {
  Phone, Mail, MapPin, Clock, MessageCircle, Menu, X,
  Heart, Home, Info, Shield, Users, Star, Award,
  Calendar, ArrowRight, CheckCircle, Play, Stethoscope,
  Baby, Activity, Apple, Plus, FileText
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Contact Form Submitted:', formData);
    setFormSubmitted(true);
    setFormData({ 
      name: '', 
      email: '', 
      mobile: '', 
      subject: '', 
      message: '' 
    });
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Testimonials data from PPT
  const testimonials = [
    {
      name: "Sanjay K., 58",
      text: "I have been living with diabetes for 10 years, and the care I receive at Lotus Polyclinic has truly transformed my health. Dr. Meena guided me on managing my diet and medications so well that my sugar levels are finally under control.",
      rating: 5
    },
    {
      name: "Anjali M., 29",
      text: "When I was expecting my first baby, I wanted a doctor who would understand my fears. The OB/GYN care I got from Lotus Polyclinic was outstanding - thorough in every check-up and so warm and reassuring.",
      rating: 5
    },
    {
      name: "Rahul D., 35",
      text: "Dr. Arjun was very professional and kind. He explained the possible causes of my rash and the treatment plan in simple language. My skin problem cleared up in two weeks.",
      rating: 5
    }
  ];

  // Stats data from PPT
  const stats = [
    { number: "5000+", label: "Patients Treated" },
    { number: "16+", label: "Years Experience" },
    { number: "24/7", label: "Medical Care" },
    { number: "98%", label: "Patient Satisfaction" }
  ];

  // Core values from brand guide
  const coreValues = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Healthcare as service, not privilege"
    },
    {
      icon: Shield,
      title: "Accessibility",
      description: "Easy reach for underserved populations"
    },
    {
      icon: Award,
      title: "Trust & Expertise",
      description: "Female-led with 16+ years experience in diabetes and family medicine"
    },
    {
      icon: Stethoscope,
      title: "Modern Care",
      description: "Multi-department facility with 24/7 emergency care"
    }
  ];

  // Facilities from PPT
  const facilities = [
    {
      icon: Clock,
      title: "24/7 Medical Care",
      description: "Round-the-clock healthcare accessible to you and your family"
    },
    {
      icon: Shield,
      title: "Emergency Care Services",
      description: "Modern emergency facilities for urgent medical situations"
    },
    {
      icon: Plus,
      title: "24/7 On-Site Pharmacy",
      description: "Fully-stocked pharmacy operating 24 hours daily"
    },
    {
      icon: Activity,
      title: "Advanced Laboratory",
      description: "Comprehensive diagnostic testing with ECG and home collection"
    },
    {
      icon: Star,
      title: "Wellness Packages",
      description: "Preventive care and health maintenance programs"
    },
    {
      icon: Home,
      title: "Home Collection Services",
      description: "Doorstep sample collection for laboratory tests"
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="font-sans" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918200000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 group"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
        <div className="absolute -top-2 -right-2 bg-[#E8A3B9] text-[#0D3B66] text-xs font-bold px-2 py-1 rounded-full animate-pulse">
          Live
        </div>
      </a>

      {/* Header - Fixed with solid background */}
      <header className="fixed w-full top-0 z-50 bg-white shadow-lg border-b border-[#E8A3B9]/20">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo Section */}
          <button 
            onClick={() => scrollToSection('home')} 
            className="flex items-center group z-50"
          >
            <img 
              src="/logo.png" 
              alt="Lotus Polyclinic" 
              className="h-10 w-auto md:h-12 object-contain group-hover:scale-105 transition-transform"
            />
          </button>

          {/* Desktop Nav - Updated to match PPT structure */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8">
            {[
              { id: 'home', label: 'Home', icon: Home },
              { id: 'about', label: 'About Us', icon: Info },
              { id: 'facilities', label: 'Facilities', icon: Shield },
              { id: 'blogs', label: 'Blogs', icon: FileText },
              { id: 'testimonials', label: 'Testimonials', icon: Star },
              { id: 'contact', label: 'Contact Us', icon: Mail }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center text-[#0D3B66] hover:text-[#E8A3B9] font-medium transition-all duration-300 group"
                style={{ letterSpacing: '0.02em' }}
              >
                <item.icon size={18} className="mr-2 group-hover:scale-110 transition-transform" />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-3 md:space-x-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden md:flex items-center bg-gradient-to-r from-[#0D3B66] to-[#4A90E2] text-white px-4 py-2 md:px-6 md:py-3 rounded-full hover:from-[#E8A3B9] hover:to-[#F5CEDD] hover:text-[#0D3B66] transition-all duration-300 shadow-lg hover:shadow-xl font-semibold group"
            >
              <Calendar size={16} className="mr-2 group-hover:scale-110 transition-transform" />
              <span className="hidden sm:inline">Book Appointment</span>
            </button>

            <button
              className="lg:hidden text-[#0D3B66] p-2 rounded-lg hover:bg-[#F5CEDD]/20 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Updated to match PPT structure */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-[#E8A3B9]/20 py-6 px-6">
            <div className="flex flex-col space-y-4">
              {[
                { id: 'home', label: 'Home', icon: Home },
                { id: 'about', label: 'About Us', icon: Info },
                { id: 'facilities', label: 'Facilities', icon: Shield },
                { id: 'blogs', label: 'Blogs', icon: FileText },
                { id: 'testimonials', label: 'Testimonials', icon: Star },
                { id: 'contact', label: 'Contact Us', icon: Mail }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsMenuOpen(false);
                  }}
                  className="flex items-center text-[#0D3B66] hover:text-[#E8A3B9] font-medium text-lg py-3 transition-all duration-300"
                >
                  <item.icon size={20} className="mr-3" />
                  {item.label}
                </button>
              ))}
              <button
                onClick={() => {
                  scrollToSection('contact');
                  setIsMenuOpen(false);
                }}
                className="bg-gradient-to-r from-[#0D3B66] to-[#4A90E2] text-white px-6 py-4 rounded-xl hover:from-[#E8A3B9] hover:to-[#F5CEDD] hover:text-[#0D3B66] transition-all duration-300 font-semibold text-center mt-2"
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Add padding for fixed header */}
      <div className="pt-16"></div>

      {/* Hero Section - Updated with logo and PPT content */}
      <section id="home" className="relative bg-gradient-to-br from-[#0D3B66] via-[#2A5F8F] to-[#4A90E2] text-white py-12 md:py-16 lg:py-20 xl:py-24 px-4 overflow-hidden min-h-[80vh] flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-16 h-16 md:w-20 md:h-20 bg-[#E8A3B9] rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 md:right-20 w-24 h-24 md:w-32 md:h-32 bg-[#E8A3B9] rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 md:w-16 md:h-16 bg-[#F5CEDD] rounded-full blur-lg"></div>
        </div>

        <div className="container mx-auto max-w-4xl lg:max-w-6xl text-center relative z-10">
          {/* Main Logo in Hero */}
          <div className="text-center mb-6 md:mb-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
              LOTUS
            </h1>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white -mt-6 md:-mt-8">
              POLYCLINIC
            </h1>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 md:px-4 md:py-2 mb-4 md:mb-6 border border-white/20 mx-auto">
            <Award size={14} className="mr-2 text-[#E8A3B9] flex-shrink-0" />
            <span className="text-xs md:text-sm font-medium">Trusted Healthcare</span>
          </div>

          {/* Main Heading from PPT */}
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-snug md:leading-tight px-2">
            Caring Beyond 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E8A3B9] to-[#F5CEDD] mt-1 md:mt-2 lg:mt-3">
              Treatment
            </span>
          </h1>
          
          {/* Subtitle from PPT */}
          <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-2xl lg:max-w-3xl mx-auto leading-relaxed opacity-90 px-2" style={{ fontFamily: "'Lora', serif" }}>
            Comprehensive healthcare provider committed to deliver compassionate, personalized and evidence based medical care.
          </p>

          {/* Buttons */}
          <div className="flex flex-col xs:flex-row justify-center items-center gap-3 sm:gap-4 md:gap-5 mb-8 md:mb-12 px-2">
            <button
              onClick={() => scrollToSection('contact')}
              className="group bg-gradient-to-r from-[#E8A3B9] to-[#F5CEDD] text-[#0D3B66] px-4 sm:px-6 md:px-8 lg:px-10 py-3 rounded-full font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center text-sm sm:text-base whitespace-nowrap w-full xs:w-auto min-w-[160px] sm:min-w-[180px]"
            >
              <Calendar size={16} className="mr-2 group-hover:scale-110 transition-transform flex-shrink-0" />
              Book Appointment
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </button>
            <button
              onClick={() => scrollToSection('facilities')}
              className="group border-2 border-white/60 text-white px-4 sm:px-6 md:px-8 lg:px-10 py-3 rounded-full font-bold hover:bg-white hover:text-[#0D3B66] transition-all duration-300 backdrop-blur-sm text-sm sm:text-base whitespace-nowrap w-full xs:w-auto min-w-[160px] sm:min-w-[180px]"
            >
              Explore Facilities
              <Play size={12} className="ml-2 inline group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 lg:gap-6 max-w-2xl lg:max-w-4xl mx-auto px-2">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#E8A3B9] mb-1">{stat.number}</div>
                <div className="text-xs sm:text-sm font-medium opacity-90 leading-tight px-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className="text-center group p-4 md:p-0">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#0D3B66] to-[#4A90E2] rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon size={20} className="md:w-6 md:h-6 text-[#E8A3B9]" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#0D3B66] mb-2">{value.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Updated with PPT content */}
      <section id="about" className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-br from-[#F5CEDD]/5 to-[#0D3B66]/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-bl from-[#F5CEDD]/10 to-[#0D3B66]/5 rounded-full -translate-y-24 md:-translate-y-32 translate-x-24 md:translate-x-32"></div>
        
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="bg-gradient-to-br from-[#0D3B66] to-[#4A90E2] rounded-2xl md:rounded-3xl p-6 md:p-8 text-white shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
                <div className="flex items-center mb-4 md:mb-6">
                  <Shield className="text-[#E8A3B9] mr-3 md:mr-4 md:w-8 md:h-8" size={24} />
                  <h3 className="text-xl md:text-2xl font-bold">Our Mission & Vision</h3>
                </div>
                <p className="text-base md:text-lg mb-4 md:mb-6 leading-relaxed opacity-90" style={{ fontFamily: "'Lora', serif" }}>
                  <strong>Vision:</strong> To deliver uncompromised, expert healthcare to all, grounded in compassion and guided by modern medical excellence.
                </p>
                <p className="text-base md:text-lg mb-4 md:mb-6 leading-relaxed opacity-90" style={{ fontFamily: "'Lora', serif" }}>
                  <strong>Mission:</strong> To provide accessible, high-quality healthcare to every patient, treating each individual with dignity, empathy, and respect.
                </p>
                <div className="space-y-2 md:space-y-3">
                  {[
                    "Evidence-based medical care",
                    "Compassionate listening",
                    "Personalized attention",
                    "Community-focused approach"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle size={16} className="md:w-5 md:h-5 text-[#E8A3B9] mr-2 md:mr-3" />
                      <span className="text-sm md:text-base font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center bg-[#F5CEDD]/20 rounded-full px-3 py-1 md:px-4 md:py-2 mb-4 md:mb-6">
                <Info size={14} className="md:w-4 md:h-4 text-[#0D3B66] mr-2" />
                <span className="text-xs md:text-sm font-semibold text-[#0D3B66]">ABOUT LOTUS POLYCLINIC</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D3B66] mb-4 md:mb-6 leading-tight">
                Built on the Foundation of <span className="text-[#E8A3B9]">Sri Sai Clinic</span>
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
                Lotus Polyclinic at Ponmar, built upon the foundation of Sri Sai Clinic, established in 2020, 
                with a vision to provide quality and affordable healthcare to the community.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
                Guided by compassion and commitment, we have grown into a multi-specialty clinic dedicated to 
                patient-centered care. We combine medical expertise with empathy, ensuring personalized treatment.
              </p>
              
              {/* Dr. Meena Section from PPT */}
              <div className="bg-white rounded-xl p-4 md:p-6 border border-[#E8A3B9]/20 shadow-lg">
                <h3 className="text-lg md:text-xl font-bold text-[#0D3B66] mb-3 flex items-center">
                  <Users size={20} className="mr-2 text-[#E8A3B9]" />
                  Dr. Meena - Founder & Chief Consultant
                </h3>
                <p className="text-sm md:text-base text-gray-700 mb-3" style={{ fontFamily: "'Lora', serif" }}>
                  <strong>MBBS, MD</strong> - 16+ years of clinical experience with specialized expertise in diabetes management and family medicine.
                </p>
                <p className="text-sm md:text-base text-gray-700" style={{ fontFamily: "'Lora', serif" }}>
                  Known for compassionate approach, combining clinical excellence with genuine empathy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section - From PPT */}
      <section id="facilities" className="py-12 md:py-16 lg:py-20 bg-white px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-[#F5CEDD]/20 rounded-full px-3 py-1 md:px-4 md:py-2 mb-3 md:mb-4">
              <Shield size={14} className="md:w-4 md:h-4 text-[#0D3B66] mr-2" />
              <span className="text-xs md:text-sm font-semibold text-[#0D3B66]">OUR FACILITIES</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D3B66] mb-3 md:mb-4">Comprehensive Healthcare Facilities</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4" style={{ fontFamily: "'Lora', serif" }}>
              All your medical needs met under one roof with the highest standards of care
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E8A3B9]/20 group">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#0D3B66] to-[#4A90E2] rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <facility.icon size={24} className="md:w-8 md:h-8 text-[#E8A3B9]" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#0D3B66] mb-3">{facility.title}</h3>
                <p className="text-sm md:text-base text-gray-600 leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* Enhanced Blog Section */}
<section id="blogs" className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#F5CEDD]/10 to-[#0D3B66]/5 px-4">
  <div className="container mx-auto max-w-6xl">
    <div className="text-center mb-8 md:mb-12 lg:mb-16">
      <div className="inline-flex items-center bg-white rounded-full px-3 py-1 md:px-4 md:py-2 mb-3 md:mb-4 shadow-lg">
        <FileText size={14} className="md:w-4 md:h-4 text-[#0D3B66] mr-2" />
        <span className="text-xs md:text-sm font-semibold text-[#0D3B66]">HEALTH BLOG</span>
      </div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D3B66] mb-3 md:mb-4">Health & Wellness Insights</h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4" style={{ fontFamily: "'Lora', serif" }}>
        Expert medical advice, health tips, and wellness guidance from our healthcare professionals
      </p>
    </div>

    {/* Featured Blog Post */}
    <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl overflow-hidden border border-[#E8A3B9]/20 mb-12 md:mb-16">
      <div className="grid md:grid-cols-2 gap-0">
        {/* Featured Image */}
        <div className="bg-gradient-to-br from-[#0D3B66] to-[#4A90E2] p-8 flex items-center justify-center relative overflow-hidden">
          <div className="text-center text-white relative z-10">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <Activity size={32} className="text-[#E8A3B9]" />
            </div>
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 mb-4">
              <Star size={12} className="text-[#E8A3B9] mr-1" />
              <span className="text-xs font-semibold">FEATURED</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Diabetes Management Guide</h3>
            <p className="text-white/90 mb-4">Comprehensive guide to living well with diabetes</p>
            <div className="flex items-center justify-center text-white/80 text-sm">
              <Calendar size={14} className="mr-2" />
              <span>October 20, 2024</span>
              <div className="w-1 h-1 bg-white/50 rounded-full mx-3"></div>
              <Clock size={14} className="mr-2" />
              <span>5 min read</span>
            </div>
          </div>
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 right-4 w-8 h-8 bg-[#E8A3B9] rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#F5CEDD] rounded-full"></div>
          </div>
        </div>
        
        {/* Featured Content */}
        <div className="p-6 md:p-8 lg:p-10">
          <h3 className="text-xl md:text-2xl font-bold text-[#0D3B66] mb-4">Living Well with Diabetes: A Complete Guide</h3>
          <p className="text-gray-700 mb-4 leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
            Diabetes doesn't have to control your life. With proper management, you can live a full, active life. 
            Our comprehensive guide covers everything from diet and exercise to medication management.
          </p>
          <div className="space-y-2 mb-6">
            {[
              "Understanding blood sugar levels",
              "Healthy eating plans",
              "Exercise routines",
              "Medication management",
              "Regular monitoring"
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle size={16} className="text-green-500 mr-2 flex-shrink-0" />
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <button className="group bg-gradient-to-r from-[#0D3B66] to-[#4A90E2] text-white px-6 py-3 rounded-full font-semibold hover:from-[#E8A3B9] hover:to-[#F5CEDD] hover:text-[#0D3B66] transition-all duration-300 flex items-center">
            Read Full Article
            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>

    {/* Regular Blog Posts Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
      {/* Blog Post 1 - Diabetes Management */}
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E8A3B9]/20 group hover:-translate-y-2 overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-[#0D3B66] to-[#4A90E2]"></div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0D3B66] to-[#4A90E2] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Activity size={20} className="text-[#E8A3B9]" />
              </div>
              <div className="ml-3">
                <div className="text-xs font-semibold text-[#0D3B66]">DIABETES CARE</div>
                <div className="flex items-center text-xs text-gray-500">
                  <Calendar size={10} className="mr-1" />
                  Oct 15, 2024
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-lg font-bold text-[#0D3B66] mb-3 leading-tight">Managing Diabetes: Daily Lifestyle Tips</h3>
          <p className="text-gray-600 mb-4 leading-relaxed text-sm" style={{ fontFamily: "'Lora', serif" }}>
            Practical advice for daily diabetes management, diet planning, exercise routines, and medication adherence to maintain healthy blood sugar levels.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-xs text-gray-500">
              <Clock size={12} className="mr-1" />
              <span>3 min read</span>
            </div>
            <button className="text-[#0D3B66] hover:text-[#E8A3B9] font-semibold text-sm flex items-center group">
              Read More
              <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Blog Post 2 - Women's Health */}
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E8A3B9]/20 group hover:-translate-y-2 overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-[#E8A3B9] to-[#F5CEDD]"></div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-[#E8A3B9] to-[#F5CEDD] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Baby size={20} className="text-[#0D3B66]" />
              </div>
              <div className="ml-3">
                <div className="text-xs font-semibold text-[#0D3B66]">WOMEN'S HEALTH</div>
                <div className="flex items-center text-xs text-gray-500">
                  <Calendar size={10} className="mr-1" />
                  Oct 8, 2024
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-lg font-bold text-[#0D3B66] mb-3 leading-tight">Prenatal Care: Essential Guide</h3>
          <p className="text-gray-600 mb-4 leading-relaxed text-sm" style={{ fontFamily: "'Lora', serif" }}>
            Comprehensive guide to prenatal care, nutrition, wellness tips, and important check-ups for expecting mothers at every trimester.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-xs text-gray-500">
              <Clock size={12} className="mr-1" />
              <span>4 min read</span>
            </div>
            <button className="text-[#0D3B66] hover:text-[#E8A3B9] font-semibold text-sm flex items-center group">
              Read More
              <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Blog Post 3 - General Health */}
      <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E8A3B9]/20 group hover:-translate-y-2 overflow-hidden">
        <div className="h-2 bg-gradient-to-r from-[#0D3B66] to-[#E8A3B9]"></div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-gradient-to-br from-[#0D3B66] to-[#4A90E2] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Apple size={20} className="text-[#E8A3B9]" />
              </div>
              <div className="ml-3">
                <div className="text-xs font-semibold text-[#0D3B66]">PREVENTIVE CARE</div>
                <div className="flex items-center text-xs text-gray-500">
                  <Calendar size={10} className="mr-1" />
                  Oct 1, 2024
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-lg font-bold text-[#0D3B66] mb-3 leading-tight">Preventive Health Check-ups Guide</h3>
          <p className="text-gray-600 mb-4 leading-relaxed text-sm" style={{ fontFamily: "'Lora', serif" }}>
            Why regular health screenings are crucial and which tests you should consider based on your age, lifestyle, and family history.
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center text-xs text-gray-500">
              <Clock size={12} className="mr-1" />
              <span>5 min read</span>
            </div>
            <button className="text-[#0D3B66] hover:text-[#E8A3B9] font-semibold text-sm flex items-center group">
              Read More
              <ArrowRight size={14} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-[#0D3B66]/5 to-[#E8A3B9]/5 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-white rounded-full px-3 py-1 md:px-4 md:py-2 mb-3 md:mb-4 shadow-lg">
              <Star size={14} className="md:w-4 md:h-4 text-[#0D3B66] mr-2" />
              <span className="text-xs md:text-sm font-semibold text-[#0D3B66]">PATIENT TESTIMONIALS</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D3B66] mb-3 md:mb-4">What Our Patients Say</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4" style={{ fontFamily: "'Lora', serif" }}>
              Real stories from our satisfied patients about their healthcare journey with us
            </p>
          </div>

          <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-8 lg:p-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="flex justify-center mb-4 md:mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    size={20} 
                    className="md:w-6 md:h-6 text-yellow-400 fill-current mx-1" 
                  />
                ))}
              </div>
              
              <div className="min-h-[100px] md:min-h-[120px] mb-4 md:mb-6">
                <p className="text-lg md:text-xl text-gray-700 italic leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
                  "{testimonials[activeTestimonial].text}"
                </p>
              </div>
              
              <div className="font-bold text-[#0D3B66] text-base md:text-lg mb-2">
                {testimonials[activeTestimonial].name}
              </div>
              <div className="text-gray-600 mb-6 md:mb-8 text-sm md:text-base">Patient</div>
              
              {/* Testimonial Indicators */}
              <div className="flex justify-center space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                      index === activeTestimonial 
                        ? 'bg-[#E8A3B9] w-6 md:w-8' 
                        : 'bg-gray-300 hover:bg-[#E8A3B9]/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


{/* Contact Section - Compact Layout */}
<section id="contact" className="py-12 md:py-16 lg:py-20 px-4 bg-white">
  <div className="container mx-auto max-w-6xl">
    <div className="text-center mb-8 md:mb-12 lg:mb-16">
      <div className="inline-flex items-center bg-[#F5CEDD]/20 rounded-full px-3 py-1 md:px-4 md:py-2 mb-3 md:mb-4">
        <Mail size={14} className="md:w-4 md:h-4 text-[#0D3B66] mr-2" />
        <span className="text-xs md:text-sm font-semibold text-[#0D3B66]">CONTACT US</span>
      </div>
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D3B66] mb-3 md:mb-4">Get In Touch</h2>
      <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4" style={{ fontFamily: "'Lora', serif" }}>
        Ready to schedule your appointment? We're here to help with all your healthcare needs.
      </p>
    </div>

    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
      {/* Left Column - Contact Info & Google Maps */}
      <div className="space-y-8">
        {/* Contact Info Card */}
        <div className="bg-gradient-to-br from-[#0D3B66] to-[#4A90E2] rounded-2xl md:rounded-3xl p-6 md:p-8 text-white shadow-2xl">
          <h3 className="text-xl md:text-2xl font-bold mb-6">Visit Our Clinic</h3>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-[#E8A3B9] p-2 rounded-lg mr-3 flex-shrink-0">
                <MapPin size={18} className="text-[#0D3B66]" />
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">Address</h4>
                <p className="opacity-90 text-sm">Ponmar</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#E8A3B9] p-2 rounded-lg mr-3 flex-shrink-0">
                <Phone size={18} className="text-[#0D3B66]" />
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">Phone</h4>
                <a href="tel:08200000000" className="opacity-90 hover:underline block text-sm">
                  0820-0000000
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#E8A3B9] p-2 rounded-lg mr-3 flex-shrink-0">
                <Mail size={18} className="text-[#0D3B66]" />
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">Email</h4>
                <a href="mailto:contact@lotuspolyclinic.com" className="opacity-90 hover:underline block text-sm">
                  contact@lotuspolyclinic.com
                </a>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-[#E8A3B9] p-2 rounded-lg mr-3 flex-shrink-0">
                <Clock size={18} className="text-[#0D3B66]" />
              </div>
              <div>
                <h4 className="font-bold text-base mb-1">Working Hours</h4>
                <p className="opacity-90 text-sm">Monday - Sunday: 7:00 AM – 7:30 PM</p>
              </div>
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
            <h4 className="font-bold text-sm mb-2 flex items-center">
              <MessageCircle size={16} className="mr-2 text-[#E8A3B9]" />
              Quick Booking via WhatsApp
            </h4>
            <p className="mb-3 opacity-90 text-xs">Get instant responses and quick appointments</p>
            <a
              href="https://wa.me/918200000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded-full font-semibold hover:bg-green-600 transition-all text-xs"
            >
              <MessageCircle size={14} className="mr-2" />
              Book via WhatsApp
            </a>
          </div>
        </div>

        {/* Google Maps - Compact */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#E8A3B9]/20">
          <div className="p-4">
            <h3 className="text-lg font-bold text-[#0D3B66] mb-3 flex items-center">
              <MapPin size={18} className="mr-2 text-[#E8A3B9]" />
              Our Location
            </h3>
            <div className="rounded-lg overflow-hidden border border-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15557.21526258401!2d80.1707662!3d12.8564248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525976fe0fccb3%3A0x4a8e9a8c87836ac7!2sPonmar%2C%20Moolacheri%2C%20Tamil%20Nadu%20600127%2C%20India!5e0!3m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Lotus Polyclinic Location "
                className="block"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Both Forms Stacked */}
      <div className="space-y-8">
        {/* Book Appointment Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 border border-[#E8A3B9]/20">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0D3B66] to-[#4A90E2] rounded-xl flex items-center justify-center mr-3">
              <Calendar size={20} className="text-[#E8A3B9]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0D3B66]">Book Appointment</h3>
              <p className="text-gray-600 text-sm">Quick and easy scheduling</p>
            </div>
          </div>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
              <input
                type="text"
                placeholder="Your full name"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8A3B9] focus:border-[#E8A3B9] transition-all text-sm"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8A3B9] focus:border-[#E8A3B9] transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8A3B9] focus:border-[#E8A3B9] transition-all text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Date *</label>
                <input
                  type="date"
                  min={new Date().toISOString().split('T')[0]}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8A3B9] focus:border-[#E8A3B9] transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Time *</label>
                <select
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8A3B9] focus:border-[#E8A3B9] transition-all text-sm bg-white appearance-none"
                >
                  <option value="">Select time</option>
                  <option value="07:00">7:00 AM - 8:00 AM</option>
                  <option value="08:00">8:00 AM - 9:00 AM</option>
                  <option value="09:00">9:00 AM - 10:00 AM</option>
                  <option value="10:00">10:00 AM - 11:00 AM</option>
                  <option value="11:00">11:00 AM - 12:00 PM</option>
                  <option value="12:00">12:00 PM - 1:00 PM</option>
                  <option value="13:00">1:00 PM - 2:00 PM</option>
                  <option value="14:00">2:00 PM - 3:00 PM</option>
                  <option value="15:00">3:00 PM - 4:00 PM</option>
                  <option value="16:00">4:00 PM - 5:00 PM</option>
                  <option value="17:00">5:00 PM - 6:00 PM</option>
                  <option value="18:00">6:00 PM - 7:00 PM</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Service Required *</label>
              <select
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8A3B9] focus:border-[#E8A3B9] transition-all text-sm bg-white appearance-none"
              >
                <option value="">Select service</option>
                <option value="Diabetology">Diabetology Consultation</option>
                <option value="OB/GYN">Obstetrics & Gynecology</option>
                <option value="General Medicine">General Medicine</option>
                <option value="Dermatology">Dermatology</option>
                <option value="Emergency Care">Emergency Care</option>
                <option value="Health Check-up">Preventive Health Check-up</option>
                <option value="Laboratory Test">Laboratory Test</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Additional Notes (Optional)</label>
              <textarea
                placeholder="Any specific concerns or symptoms..."
                rows="2"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8A3B9] focus:border-[#E8A3B9] transition-all text-sm resize-none"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#0D3B66] to-[#4A90E2] text-white py-3 rounded-lg font-bold hover:from-[#E8A3B9] hover:to-[#F5CEDD] hover:text-[#0D3B66] transition-all duration-300 shadow-lg hover:shadow-xl text-sm flex items-center justify-center transform hover:scale-105"
            >
              <Calendar size={18} className="mr-2" />
              BOOK APPOINTMENT
            </button>
          </form>
        </div>

        {/* Message Us Form */}
        <div className="bg-white rounded-2xl shadow-2xl p-6 border border-[#E8A3B9]/20">
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0D3B66] to-[#4A90E2] rounded-xl flex items-center justify-center mr-3">
              <Mail size={20} className="text-[#E8A3B9]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0D3B66]">Message Us</h3>
              <p className="text-gray-600 text-sm">General inquiries and questions</p>
            </div>
          </div>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">NAME *</label>
                <input
                  type="text"
                  placeholder="Your full name"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8A3B9] focus:border-[#E8A3B9] transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">MAIL ID *</label>
                <input
                  type="email"
                  placeholder="Your email address"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8A3B9] focus:border-[#E8A3B9] transition-all text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">MOBILE NO *</label>
                <input
                  type="tel"
                  placeholder="10-digit mobile number"
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8A3B9] focus:border-[#E8A3B9] transition-all text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">SUBJECT</label>
                <input
                  type="text"
                  placeholder="Subject of your message"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8A3B9] focus:border-[#E8A3B9] transition-all text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">YOUR MESSAGE *</label>
              <textarea
                placeholder="Your message or inquiry..."
                rows="3"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8A3B9] focus:border-[#E8A3B9] transition-all text-sm resize-none"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#E8A3B9] to-[#F5CEDD] text-[#0D3B66] py-3 rounded-lg font-bold hover:from-[#0D3B66] hover:to-[#4A90E2] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl text-sm flex items-center justify-center transform hover:scale-105"
            >
              <Mail size={18} className="mr-2" />
              SUBMIT MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#0D3B66] to-[#4A90E2] text-white py-8 md:py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
            <div>
              {/* Footer Logo - Text Only */}
              <div className="mb-3 md:mb-4">
                <div className="text-left">
                  <span className="text-xl md:text-2xl font-bold text-white block leading-tight">
                    LOTUS
                  </span>
                  <span className="text-xl md:text-2xl font-bold text-white block leading-tight -mt-2">
                    POLYCLINIC
                  </span>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed text-sm md:text-base" style={{ fontFamily: "'Lora', serif" }}>
                "Caring beyond treatment" - Comprehensive healthcare provider committed to deliver compassionate, personalized and evidence based medical care.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Quick Links</h4>
              <div className="space-y-1 md:space-y-2">
                {['home', 'about', 'facilities', 'blogs', 'testimonials', 'feedback', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block text-white/70 hover:text-[#E8A3B9] transition-colors capitalize text-sm md:text-base"
                  >
                    {item === 'about' ? 'About Us' : 
                     item === 'contact' ? 'Contact Us' : item}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Contact Info</h4>
              <div className="space-y-1 md:space-y-2 text-white/70 text-sm md:text-base">
                <div>Ponmar</div>
                <div>0820-0000000</div>
                <div>contact@lotuspolyclinic.com</div>
                <div>Mon-Sun: 7:00 AM - 7:30 PM</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Emergency</h4>
              <div className="space-y-1 md:space-y-2">
                <div className="text-[#E8A3B9] font-semibold text-sm md:text-base">24/7 Support Available</div>
                <a href="tel:08200000000" className="text-white/70 hover:text-[#E8A3B9] transition-colors block text-sm md:text-base">
                  Emergency Helpline
                </a>
                <a href="https://wa.me/918200000000" className="text-white/70 hover:text-[#E8A3B9] transition-colors block text-sm md:text-base">
                  WhatsApp Emergency
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-6 md:pt-8 text-center">
            <p className="text-white/70 text-sm md:text-base" style={{ fontFamily: "'Lora', serif" }}>
              © 2025 Lotus Polyclinic. All rights reserved. | Built on the foundation of Sri Sai Clinic | Compassionate Care, Clinical Excellence
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;