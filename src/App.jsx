// src/App.jsx
import React, { useState, useEffect } from 'react';
import {
  Phone, Mail, MapPin, Clock, MessageCircle, Menu, X,
  Heart, Home, Info, Briefcase, Users, Star, Award, Shield,
  Calendar, ArrowRight, CheckCircle, Play, Stethoscope,
  Baby, Eye, Activity, Apple, ShieldCheck
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    service: '',
    date: '',
    time: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll for header background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment Request:', formData);
    setFormSubmitted(true);
    setFormData({ name: '', contact: '', service: '', date: '', time: '' });
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Testimonials data from content document
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

  // Stats data
  const stats = [
    { number: "5000+", label: "Patients Treated" },
    { number: "15+", label: "Years Experience" },
    { number: "98%", label: "Patient Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  // Core values from brand guide
  const coreValues = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Healthcare as service, not privilege"
    },
    {
      icon: ShieldCheck,
      title: "Accessibility",
      description: "Easy reach for underserved populations"
    },
    {
      icon: Award,
      title: "Trust & Expertise",
      description: "Female-led with specializations in diabetology, OB/GYN, and general medicine"
    },
    {
      icon: Stethoscope,
      title: "Modern Care",
      description: "Multi-department facility with visiting specialists"
    }
  ];

  // Services with icons
  const services = [
    {
      icon: Activity,
      title: "Diabetology",
      description: "Comprehensive diabetes management with advanced monitoring and lifestyle coaching",
      features: ["Expert Consultation", "Advanced Monitoring", "Diet & Lifestyle Coaching"]
    },
    {
      icon: Baby,
      title: "Obstetrics & Gynecology",
      description: "Complete women's health services from prenatal care to menopause support",
      features: ["Prenatal Care", "Well-woman Exams", "Family Planning"]
    },
    {
      icon: Stethoscope,
      title: "General Medicine",
      description: "Holistic primary care for acute illnesses and chronic disease management",
      features: ["Primary Care", "Chronic Disease Management", "Preventive Screenings"]
    },
    {
      icon: Shield,
      title: "Dermatology",
      description: "Expert care for skin, hair, and nail conditions with personalized treatments",
      features: ["Skin Conditions", "Allergy Testing", "Cosmetic Advice"]
    },
    {
      icon: Users,
      title: "Visiting Specialists",
      description: "Access to pediatrics, cardiology, orthopedics, ENT, and ophthalmology",
      features: ["Pediatrics", "Cardiology", "Orthopedics"]
    },
    {
      icon: Apple,
      title: "Wellness Services",
      description: "Preventive health check-ups, vaccinations, and lifestyle counseling",
      features: ["Health Check-ups", "Vaccinations", "Nutrition Counseling"]
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
        href="https://wa.me/918201234567"
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

      {/* Header - Fixed to always be visible */}
<header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-[#E8A3B9]/20">
  <div className="container mx-auto px-4 py-3 flex justify-between items-center">
    {/* Logo Section */}
    <button 
      onClick={() => scrollToSection('home')} 
      className="flex items-center space-x-3 group z-50"
    >
      {/* Your Logo */}
      <img 
        src="/logo.png" 
        alt="Lotus Polyclinic" 
        className="h-10 w-auto md:h-12 object-contain group-hover:scale-105 transition-transform"
      />
      <div className="text-left">
        <span className="text-xl md:text-2xl font-bold text-[#0D3B66] block leading-tight" style={{ letterSpacing: '0.02em' }}>
          Lotus Polyclinic
        </span>
        <span className="text-xs font-medium text-[#E8A3B9]">
          Healthcare Excellence
        </span>
      </div>
    </button>

    {/* Desktop Nav */}
    <nav className="hidden lg:flex space-x-6 xl:space-x-8">
      {[
        { id: 'home', label: 'Home', icon: Home },
        { id: 'about', label: 'About', icon: Info },
        { id: 'services', label: 'Services', icon: Briefcase },
        { id: 'doctors', label: 'Doctors', icon: Users },
        { id: 'testimonials', label: 'Testimonials', icon: Star },
        { id: 'contact', label: 'Contact', icon: Mail }
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

  {/* Mobile Menu */}
  {isMenuOpen && (
    <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-[#E8A3B9]/20 py-6 px-6">
      <div className="flex flex-col space-y-4">
        {[
          { id: 'home', label: 'Home', icon: Home },
          { id: 'about', label: 'About', icon: Info },
          { id: 'services', label: 'Services', icon: Briefcase },
          { id: 'doctors', label: 'Doctors', icon: Users },
          { id: 'testimonials', label: 'Testimonials', icon: Star },
          { id: 'contact', label: 'Contact', icon: Mail }
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

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-[#0D3B66] via-[#2A5F8F] to-[#4A90E2] text-white py-16 md:py-24 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-16 h-16 md:w-20 md:h-20 bg-[#E8A3B9] rounded-full blur-xl"></div>
          <div className="absolute bottom-20 right-10 md:right-20 w-24 h-24 md:w-32 md:h-32 bg-[#E8A3B9] rounded-full blur-2xl"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 md:w-16 md:h-16 bg-[#F5CEDD] rounded-full blur-lg"></div>
        </div>

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 md:px-4 md:py-2 mb-4 md:mb-6 border border-white/20">
            <Award size={14} className="mr-2 text-[#E8A3B9]" />
            <span className="text-xs md:text-sm font-medium">Mangalore's Trusted Healthcare Partner Since 2020</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 md:mb-6 leading-tight">
            Your Health, 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#E8A3B9] to-[#F5CEDD] mt-1 md:mt-2">
              Our Commitment
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed opacity-90 px-4" style={{ fontFamily: "'Lora', serif" }}>
            Expert-led, compassionate healthcare for your entire family. Where modern medicine meets heartfelt care.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-5 mb-8 md:mb-12 px-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="group bg-gradient-to-r from-[#E8A3B9] to-[#F5CEDD] text-[#0D3B66] px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-4 rounded-full font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center text-sm md:text-base"
            >
              <Calendar size={18} className="mr-2 md:mr-3 group-hover:scale-110 transition-transform" />
              Book Appointment
              <ArrowRight size={18} className="ml-2 md:ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="group border-2 border-white/60 text-white px-6 py-3 md:px-8 md:py-4 lg:px-10 lg:py-4 rounded-full font-bold hover:bg-white hover:text-[#0D3B66] transition-all duration-300 backdrop-blur-sm text-sm md:text-base"
            >
              Explore Services
              <Play size={14} className="ml-2 inline group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 max-w-4xl mx-auto px-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-3 md:p-4 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[#E8A3B9] mb-1">{stat.number}</div>
                <div className="text-xs md:text-sm font-medium opacity-90">{stat.label}</div>
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

      {/* About Section */}
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
                  To make high-quality healthcare accessible and affordable for every individual in our community, 
                  combining clinical excellence with genuine compassion.
                </p>
                <div className="space-y-2 md:space-y-3">
                  {[
                    "15+ Years Medical Experience",
                    "Female-Led Healthcare Team",
                    "Affordable Pricing",
                    "Community-First Approach"
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
                Compassionate Care Meets <span className="text-[#E8A3B9]">Medical Excellence</span>
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
                Founded in 2020 by Dr. Meena, Lotus Polyclinic has been at the forefront of providing 
                comprehensive healthcare services to the Mangalore community. Our female-led team brings 
                expertise, empathy, and excellence to every patient interaction.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
                Specializing in diabetology, obstetrics & gynecology, and general medicine, we've built 
                a reputation for affordable, high-quality care that puts patients first.
              </p>
              
              <div className="flex flex-wrap gap-2 md:gap-4">
                <div className="bg-[#0D3B66] text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold flex items-center text-sm md:text-base">
                  <Award size={16} className="mr-2" />
                  Certified Specialists
                </div>
                <div className="bg-[#E8A3B9] text-[#0D3B66] px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold flex items-center text-sm md:text-base">
                  <Heart size={16} className="mr-2" />
                  Patient-Centered
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 md:py-16 lg:py-20 bg-white px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-[#F5CEDD]/20 rounded-full px-3 py-1 md:px-4 md:py-2 mb-3 md:mb-4">
              <Briefcase size={14} className="md:w-4 md:h-4 text-[#0D3B66] mr-2" />
              <span className="text-xs md:text-sm font-semibold text-[#0D3B66]">OUR SERVICES</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D3B66] mb-3 md:mb-4">Comprehensive Healthcare Solutions</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4" style={{ fontFamily: "'Lora', serif" }}>
              From routine check-ups to specialized treatments, we offer a complete range of medical services
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E8A3B9]/20 group hover:transform hover:-translate-y-1 md:hover:-translate-y-2"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#0D3B66] to-[#4A90E2] rounded-lg md:rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform">
                  <service.icon size={20} className="md:w-6 md:h-6 text-[#E8A3B9]" />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#0D3B66] mb-2 md:mb-3 group-hover:text-[#E8A3B9] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-600 mb-3 md:mb-4 leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
                  {service.description}
                </p>
                <div className="space-y-1 md:space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs md:text-sm text-gray-700">
                      <CheckCircle size={14} className="md:w-4 md:h-4 text-[#E8A3B9] mr-1 md:mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-br from-[#F5CEDD]/10 to-[#0D3B66]/5">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
            {[
              { icon: Activity, title: "In-House Laboratory", desc: "Quick and reliable diagnostic testing" },
              { icon: Shield, title: "Pharmacy", desc: "Full-service medication and counseling" },
              { icon: Calendar, title: "Health Check-ups", desc: "Preventive and comprehensive packages" },
              { icon: MessageCircle, title: "Telemedicine", desc: "Online consultations for your convenience" }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-lg md:rounded-xl p-4 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#E8A3B9] rounded-lg flex items-center justify-center mx-auto mb-3">
                  <service.icon size={20} className="md:w-6 md:h-6 text-[#0D3B66]" />
                </div>
                <h4 className="font-bold text-[#0D3B66] mb-1 text-sm md:text-base">{service.title}</h4>
                <p className="text-xs md:text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-12 md:py-16 lg:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-[#F5CEDD]/20 rounded-full px-3 py-1 md:px-4 md:py-2 mb-3 md:mb-4">
              <Users size={14} className="md:w-4 md:h-4 text-[#0D3B66] mr-2" />
              <span className="text-xs md:text-sm font-semibold text-[#0D3B66]">MEET OUR EXPERTS</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D3B66] mb-3 md:mb-4">Our Medical Specialists</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4" style={{ fontFamily: "'Lora', serif" }}>
              Experienced doctors dedicated to providing the highest quality medical care
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Dr. Meena */}
            <div className="bg-gradient-to-br from-[#0D3B66] to-[#4A90E2] rounded-2xl md:rounded-3xl p-6 md:p-8 text-white shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-white/20 rounded-full flex items-center justify-center border-4 border-[#E8A3B9] shadow-lg">
                  <div className="text-2xl md:text-3xl font-bold text-white">M</div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-2">
                    <Award size={16} className="md:w-5 md:h-5 text-[#E8A3B9] mr-2" />
                    <span className="text-xs md:text-sm font-semibold">FOUNDER & CHIEF CONSULTANT</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Dr. Meena</h3>
                  <p className="text-[#E8A3B9] text-base md:text-lg font-semibold mb-3 md:mb-4">MBBS, MD - Diabetology & OB/GYN</p>
                  
                  <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                    <div className="flex items-center">
                      <CheckCircle size={14} className="md:w-5 md:h-5 text-[#E8A3B9] mr-2 md:mr-3" />
                      <span className="text-sm md:text-base">15+ Years Experience</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle size={14} className="md:w-5 md:h-5 text-[#E8A3B9] mr-2 md:mr-3" />
                      <span className="text-sm md:text-base">Specialist in Diabetology</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle size={14} className="md:w-5 md:h-5 text-[#E8A3B9] mr-2 md:mr-3" />
                      <span className="text-sm md:text-base">Expert in Obstetrics & Gynecology</span>
                    </div>
                  </div>
                  
                  <p className="text-white/90 leading-relaxed text-sm md:text-base" style={{ fontFamily: "'Lora', serif" }}>
                    Dr. Meena leads our team with compassion and expertise, specializing in comprehensive 
                    women's healthcare and diabetes management with a patient-first approach.
                  </p>
                </div>
              </div>
            </div>

            {/* Dr. Arjun */}
            <div className="bg-gradient-to-br from-[#E8A3B9] to-[#F5CEDD] rounded-2xl md:rounded-3xl p-6 md:p-8 text-[#0D3B66] shadow-2xl transform hover:scale-[1.02] transition-all duration-500">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-white/20 rounded-full flex items-center justify-center border-4 border-[#0D3B66] shadow-lg">
                  <div className="text-2xl md:text-3xl font-bold text-[#0D3B66]">A</div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start mb-2">
                    <Award size={16} className="md:w-5 md:h-5 text-[#0D3B66] mr-2" />
                    <span className="text-xs md:text-sm font-semibold">CONSULTANT DERMATOLOGIST</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">Dr. Arjun</h3>
                  <p className="text-[#0D3B66] text-base md:text-lg font-semibold mb-3 md:mb-4">MD - Dermatology</p>
                  
                  <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                    <div className="flex items-center">
                      <CheckCircle size={14} className="md:w-5 md:h-5 text-[#0D3B66] mr-2 md:mr-3" />
                      <span className="text-sm md:text-base">10+ Years Experience</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle size={14} className="md:w-5 md:h-5 text-[#0D3B66] mr-2 md:mr-3" />
                      <span className="text-sm md:text-base">Skin & Hair Specialist</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle size={14} className="md:w-5 md:h-5 text-[#0D3B66] mr-2 md:mr-3" />
                      <span className="text-sm md:text-base">Advanced Dermatology Procedures</span>
                    </div>
                  </div>
                  
                  <p className="text-[#0D3B66]/90 leading-relaxed text-sm md:text-base" style={{ fontFamily: "'Lora', serif" }}>
                    Dr. Arjun brings extensive expertise in dermatology, offering advanced treatments 
                    for skin conditions with a focus on personalized care and effective solutions.
                  </p>
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

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-16 lg:py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-8 md:mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-[#F5CEDD]/20 rounded-full px-3 py-1 md:px-4 md:py-2 mb-3 md:mb-4">
              <Mail size={14} className="md:w-4 md:h-4 text-[#0D3B66] mr-2" />
              <span className="text-xs md:text-sm font-semibold text-[#0D3B66]">GET IN TOUCH</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D3B66] mb-3 md:mb-4">Contact Us</h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4" style={{ fontFamily: "'Lora', serif" }}>
              Ready to schedule your appointment? We're here to help with all your healthcare needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Contact Info */}
            <div>
              <div className="bg-gradient-to-br from-[#0D3B66] to-[#4A90E2] rounded-2xl md:rounded-3xl p-6 md:p-8 text-white shadow-2xl">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Visit Our Clinic</h3>
                
                <div className="space-y-4 md:space-y-6">
                  <div className="flex items-start">
                    <div className="bg-[#E8A3B9] p-2 md:p-3 rounded-lg md:rounded-xl mr-3 md:mr-4">
                      <MapPin size={20} className="md:w-6 md:h-6 text-[#0D3B66]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-lg mb-1">Address</h4>
                      <p className="opacity-90 text-sm md:text-base">[Clinic Address, Mangalore]</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#E8A3B9] p-2 md:p-3 rounded-lg md:rounded-xl mr-3 md:mr-4">
                      <Phone size={20} className="md:w-6 md:h-6 text-[#0D3B66]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-lg mb-1">Phone</h4>
                      <a href="tel:08201234567" className="opacity-90 hover:underline block text-sm md:text-base">
                        0820-XXXXXXX
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#E8A3B9] p-2 md:p-3 rounded-lg md:rounded-xl mr-3 md:mr-4">
                      <Mail size={20} className="md:w-6 md:h-6 text-[#0D3B66]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-lg mb-1">Email</h4>
                      <a href="mailto:contact@lotuspolyclinic.com" className="opacity-90 hover:underline block text-sm md:text-base">
                        contact@lotuspolyclinic.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#E8A3B9] p-2 md:p-3 rounded-lg md:rounded-xl mr-3 md:mr-4">
                      <Clock size={20} className="md:w-6 md:h-6 text-[#0D3B66]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base md:text-lg mb-1">Working Hours</h4>
                      <p className="opacity-90 text-sm md:text-base">Monday - Sunday: 7:00 AM – 7:30 PM</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <div className="mt-6 md:mt-8 bg-white/10 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-6 border border-white/20">
                  <h4 className="font-bold text-base md:text-lg mb-2 flex items-center">
                    <MessageCircle size={18} className="md:w-5 md:h-5 mr-2 text-[#E8A3B9]" />
                    Quick Booking via WhatsApp
                  </h4>
                  <p className="mb-3 md:mb-4 opacity-90 text-sm md:text-base">Get instant responses and quick appointments</p>
                  <a
                    href="https://wa.me/918201234567"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-green-500 text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold hover:bg-green-600 transition-all text-sm md:text-base"
                  >
                    <MessageCircle size={16} className="md:w-4 md:h-4 mr-2" />
                    Message on WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Appointment Form */}
            <div>
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-6 md:p-8 border border-[#E8A3B9]/20">
                <h3 className="text-xl md:text-2xl font-bold text-[#0D3B66] mb-2">Book an Appointment</h3>
                <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">Fill out the form below and we'll get back to you shortly</p>
                
                {formSubmitted ? (
                  <div className="bg-green-100 border border-green-400 text-green-800 px-4 py-6 md:px-6 md:py-8 rounded-xl md:rounded-2xl text-center">
                    <CheckCircle size={32} className="md:w-12 md:h-12 mx-auto mb-3 md:mb-4 text-green-500" />
                    <h4 className="text-lg md:text-xl font-bold mb-2">Thank You!</h4>
                    <p className="text-sm md:text-base">Your appointment request has been received. We'll contact you shortly to confirm your booking.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      <div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Full Name"
                          required
                          className="w-full p-3 md:p-4 border border-gray-300 rounded-lg md:rounded-xl focus:ring-2 focus:ring-[#E8A3B9] focus:border-transparent transition-all text-sm md:text-base"
                        />
                      </div>
                      <div>
                        <input
                          type="tel"
                          name="contact"
                          value={formData.contact}
                          onChange={handleInputChange}
                          placeholder="Contact Number"
                          required
                          className="w-full p-3 md:p-4 border border-gray-300 rounded-lg md:rounded-xl focus:ring-2 focus:ring-[#E8A3B9] focus:border-transparent transition-all text-sm md:text-base"
                        />
                      </div>
                    </div>
                    
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full p-3 md:p-4 border border-gray-300 rounded-lg md:rounded-xl focus:ring-2 focus:ring-[#E8A3B9] focus:border-transparent transition-all text-sm md:text-base"
                    >
                      <option value="">Select Service</option>
                      <option value="Diabetology">Diabetology</option>
                      <option value="OB/GYN">OB/GYN</option>
                      <option value="General Medicine">General Medicine</option>
                      <option value="Dermatology">Dermatology</option>
                      <option value="Pediatrics">Pediatrics</option>
                      <option value="Other">Other</option>
                    </select>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                      <div>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleInputChange}
                          required
                          className="w-full p-3 md:p-4 border border-gray-300 rounded-lg md:rounded-xl focus:ring-2 focus:ring-[#E8A3B9] focus:border-transparent transition-all text-sm md:text-base"
                        />
                      </div>
                      <div>
                        <input
                          type="time"
                          name="time"
                          value={formData.time}
                          onChange={handleInputChange}
                          required
                          className="w-full p-3 md:p-4 border border-gray-300 rounded-lg md:rounded-xl focus:ring-2 focus:ring-[#E8A3B9] focus:border-transparent transition-all text-sm md:text-base"
                        />
                      </div>
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#0D3B66] to-[#4A90E2] text-white py-3 md:py-4 rounded-lg md:rounded-xl font-bold hover:from-[#E8A3B9] hover:to-[#F5CEDD] hover:text-[#0D3B66] transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base"
                    >
                      Submit Appointment Request
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Google Maps Embed */}
          <div className="mt-8 md:mt-12 lg:mt-16 rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border border-[#E8A3B9]/20">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.894223456789!2d74.856789!3d12.912345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU0JzQ0LjQiTiA3NMKwNTEnMjQuNCJF!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lotus Polyclinic Location"
              className="rounded-xl md:rounded-2xl lg:rounded-3xl"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Footer */}
<footer className="bg-gradient-to-br from-[#0D3B66] to-[#4A90E2] text-white py-8 md:py-12 px-4">
  <div className="container mx-auto max-w-6xl">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
      <div>
        {/* Footer Logo */}
        <div className="flex items-center mb-3 md:mb-4">
          <img 
            src="/logo.png" 
            alt="Lotus Polyclinic" 
            className="h-10 w-10 md:h-12 md:w-12 object-contain mr-3"
          />
          <span className="text-xl md:text-2xl font-bold">Lotus Polyclinic</span>
        </div>
        <p className="text-white/80 leading-relaxed text-sm md:text-base" style={{ fontFamily: "'Lora', serif" }}>
          Compassionate, community-focused healthcare since 2020. Your health is our priority.
        </p>
      </div>
      
      <div>
        <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Quick Links</h4>
        <div className="space-y-1 md:space-y-2">
          {['home', 'about', 'services', 'doctors', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="block text-white/70 hover:text-[#E8A3B9] transition-colors capitalize text-sm md:text-base"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      
      <div>
        <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Contact Info</h4>
        <div className="space-y-1 md:space-y-2 text-white/70 text-sm md:text-base">
          <div>Mangalore, Karnataka</div>
          <div>0820-XXXXXXX</div>
          <div>contact@lotuspolyclinic.com</div>
          <div>Mon-Sun: 7:00 AM - 7:30 PM</div>
        </div>
      </div>
      
      <div>
        <h4 className="font-bold text-base md:text-lg mb-3 md:mb-4">Emergency</h4>
        <div className="space-y-1 md:space-y-2">
          <div className="text-[#E8A3B9] font-semibold text-sm md:text-base">24/7 Support</div>
          <a href="tel:08201234567" className="text-white/70 hover:text-[#E8A3B9] transition-colors block text-sm md:text-base">
            Emergency Helpline
          </a>
          <a href="https://wa.me/918201234567" className="text-white/70 hover:text-[#E8A3B9] transition-colors block text-sm md:text-base">
            WhatsApp Emergency
          </a>
        </div>
      </div>
    </div>
    
    <div className="border-t border-white/20 pt-6 md:pt-8 text-center">
      <p className="text-white/70 text-sm md:text-base" style={{ fontFamily: "'Lora', serif" }}>
        © 2025 Lotus Polyclinic. All rights reserved. | Compassionate Care, Clinical Excellence
      </p>
    </div>
  </div>
</footer>
    </div>
  );
};

export default App;