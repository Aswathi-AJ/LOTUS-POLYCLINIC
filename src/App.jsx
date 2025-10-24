// src/App.jsx
import React, { useState, useEffect } from 'react';
import {
  Phone, Mail, MapPin, Clock, MessageCircle, Menu, X,
  Heart, Home, Info, Shield, Users, Star, Award,
  Calendar, ArrowRight, CheckCircle, Play, Stethoscope,
  Baby, Activity, Apple, Plus, FileText, ChevronRight,
  Sparkles, Zap, Eye, TrendingUp
} from 'lucide-react';

// Blog data - moved outside component for better organization
const blogPosts = [
  {
    id: 1,
    title: "Managing Diabetes: Daily Lifestyle Tips",
    excerpt: "Practical advice for daily diabetes management, diet planning, exercise routines, and medication adherence to maintain healthy blood sugar levels.",
    category: "DIABETES CARE",
    readTime: "3 min read",
    date: "Oct 15, 2024",
    icon: Activity,
    color: "from-[#0D3B66] to-[#4A90E2]",
    fullContent: `
      <h2>Understanding Diabetes Management</h2>
      <p>Living with diabetes requires a comprehensive approach that combines medication, diet, exercise, and regular monitoring. Here are some essential tips for effective diabetes management:</p>
      
      <h3>1. Blood Sugar Monitoring</h3>
      <p>Regular monitoring helps you understand how different foods, activities, and medications affect your blood sugar levels. Keep a log to identify patterns and make informed decisions.</p>
      
      <h3>2. Healthy Eating Habits</h3>
      <p>Focus on a balanced diet rich in fiber, lean proteins, and healthy fats. Include plenty of vegetables, whole grains, and limit processed foods and sugary beverages.</p>
      
      <h3>3. Regular Exercise</h3>
      <p>Aim for at least 30 minutes of moderate exercise most days. Walking, swimming, and cycling are excellent choices that help improve insulin sensitivity.</p>
      
      <h3>4. Medication Adherence</h3>
      <p>Take medications as prescribed and never skip doses. Set reminders and work closely with your healthcare provider to adjust dosages when needed.</p>
      
      <h3>5. Stress Management</h3>
      <p>Chronic stress can affect blood sugar levels. Practice relaxation techniques like deep breathing, meditation, or yoga to manage stress effectively.</p>
    `
  },
  {
    id: 2,
    title: "Prenatal Care: Essential Guide",
    excerpt: "Comprehensive guide to prenatal care, nutrition, wellness tips, and important check-ups for expecting mothers at every trimester.",
    category: "WOMEN'S HEALTH",
    readTime: "4 min read",
    date: "Oct 8, 2024",
    icon: Baby,
    color: "from-[#E8A3B9] to-[#F5CEDD]",
    fullContent: `
      <h2>Comprehensive Prenatal Care Guide</h2>
      <p>Pregnancy is a beautiful journey that requires special care and attention. Proper prenatal care ensures the health of both mother and baby throughout all trimesters.</p>
      
      <h3>First Trimester (Weeks 1-12)</h3>
      <p>• Schedule your first prenatal visit<br>
         • Start prenatal vitamins with folic acid<br>
         • Discuss genetic screening options<br>
         • Manage morning sickness with small, frequent meals</p>
      
      <h3>Second Trimester (Weeks 13-26)</h3>
      <p>• Anatomy scan ultrasound<br>
         • Monitor weight gain and blood pressure<br>
         • Screen for gestational diabetes<br>
         • Begin prenatal classes</p>
      
      <h3>Third Trimester (Weeks 27-40)</h3>
      <p>• More frequent check-ups<br>
         • Monitor fetal movement<br>
         • Prepare birth plan<br>
         • Finalize hospital arrangements</p>
      
      <h3>Nutrition During Pregnancy</h3>
      <p>Focus on iron-rich foods, calcium sources, and adequate protein. Stay hydrated and avoid certain foods like raw seafood and unpasteurized dairy products.</p>
    `
  },
  {
    id: 3,
    title: "Preventive Health Check-ups Guide",
    excerpt: "Why regular health screenings are crucial and which tests you should consider based on your age, lifestyle, and family history.",
    category: "PREVENTIVE CARE",
    readTime: "5 min read",
    date: "Oct 1, 2024",
    icon: Apple,
    color: "from-[#0D3B66] to-[#E8A3B9]",
    fullContent: `
      <h2>The Importance of Preventive Health Screenings</h2>
      <p>Regular health check-ups can detect potential health issues early, when they're most treatable. Here's a comprehensive guide to preventive screenings by age group.</p>
      
      <h3>In Your 20s and 30s</h3>
      <p>• Annual physical examination<br>
         • Blood pressure screening<br>
         • Cholesterol check every 4-6 years<br>
         • Diabetes screening if overweight<br>
         • Skin cancer examination<br>
         • Dental check-ups every 6 months</p>
      
      <h3>In Your 40s and 50s</h3>
      <p>• All previous screenings continue<br>
         • Colon cancer screening starting at 45<br>
         • Mammograms for women starting at 40<br>
         • Prostate screening for men at 50<br>
         • Bone density testing for women at 65<br>
         • Eye examinations every 2-4 years</p>
      
      <h3>In Your 60s and Beyond</h3>
      <p>• Continue all previous screenings<br>
         • Abdominal aortic aneurysm screening<br>
         • Hearing tests<br>
         • Cognitive assessments<br>
         • Fall risk evaluation</p>
      
      <h3>Lifestyle Factors</h3>
      <p>Your screening schedule may vary based on family history, lifestyle factors like smoking and alcohol consumption, and existing health conditions.</p>
    `
  }
];

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isBlogModalOpen, setIsBlogModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Open blog modal
  const openBlogModal = (blog) => {
    setSelectedBlog(blog);
    setIsBlogModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Close blog modal
  const closeBlogModal = () => {
    setIsBlogModalOpen(false);
    setSelectedBlog(null);
    document.body.style.overflow = 'unset';
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
    { number: "5000+", label: "Patients Treated", icon: Users },
    { number: "16+", label: "Years Experience", icon: Award },
    { number: "24/7", label: "Medical Care", icon: Clock },
    { number: "98%", label: "Patient Satisfaction", icon: Heart }
  ];

  // Color schemes for different sections
  const sectionColors = {
    hero: {
      bg: "from-[#0D3B66] via-[#2A5F8F] to-[#4A90E2]",
      text: "text-white",
      accent: "[#E8A3B9]",
      button: {
        primary: "from-[#E8A3B9] to-[#F5CEDD] text-[#0D3B66]",
        secondary: "border-white/80 text-white hover:bg-white hover:text-[#0D3B66]"
      }
    },
    values: {
      bg: "from-white to-gray-50",
      text: "text-[#0D3B66]",
      accent: "[#E8A3B9]",
      card: "bg-white",
      badge: "bg-[#F5CEDD]/20 text-[#0D3B66]"
    },
    about: {
      bg: "from-[#F5CEDD]/10 via-[#E8A3B9]/5 to-[#0D3B66]/5",
      text: "text-[#0D3B66]",
      accent: "[#E8A3B9]",
      card: "from-[#0D3B66] to-[#4A90E2] text-white",
      badge: "bg-[#F5CEDD]/20 text-[#0D3B66]"
    },
    services: {
      bg: "from-[#4A90E2]/5 via-[#0D3B66]/5 to-white",
      text: "text-[#0D3B66]",
      accent: "[#E8A3B9]",
      card: "bg-white",
      badge: "bg-[#F5CEDD]/20 text-[#0D3B66]",
      icon: "from-[#0D3B66] to-[#4A90E2]"
    },
    facilities: {
      bg: "from-[#E8A3B9]/5 via-[#F5CEDD]/5 to-[#0D3B66]/5",
      text: "text-[#0D3B66]",
      accent: "[#E8A3B9]",
      card: "bg-white",
      badge: "bg-white text-[#0D3B66]",
      icon: {
        0: "from-[#0D3B66] to-[#4A90E2]",
        1: "from-[#E8A3B9] to-[#F5CEDD]",
        2: "from-[#0D3B66] to-[#E8A3B9]",
        3: "from-[#4A90E2] to-[#0D3B66]",
        4: "from-[#E8A3B9] to-[#4A90E2]",
        5: "from-[#0D3B66] to-[#F5CEDD]"
      }
    },
    blogs: {
      bg: "from-white to-gray-50",
      text: "text-[#0D3B66]",
      accent: "[#E8A3B9]",
      card: "bg-white",
      badge: "bg-[#F5CEDD]/20 text-[#0D3B66]",
      button: "from-[#0D3B66] to-[#4A90E2] text-white hover:from-[#E8A3B9] hover:to-[#F5CEDD] hover:text-[#0D3B66]"
    },
    testimonials: {
      bg: "from-[#0D3B66]/5 via-[#E8A3B9]/5 to-[#F5CEDD]/5",
      text: "text-[#0D3B66]",
      accent: "[#E8A3B9]",
      card: "bg-white",
      badge: "bg-white text-[#0D3B66]"
    },
    contact: {
      bg: "from-white to-gray-50",
      text: "text-[#0D3B66]",
      accent: "[#E8A3B9]",
      card: {
        info: "from-[#0D3B66] to-[#4A90E2] text-white",
        form: "bg-white"
      },
      badge: "bg-[#F5CEDD]/20 text-[#0D3B66]",
      button: {
        primary: "from-[#0D3B66] to-[#4A90E2] text-white hover:from-[#E8A3B9] hover:to-[#F5CEDD] hover:text-[#0D3B66]",
        secondary: "from-[#E8A3B9] to-[#F5CEDD] text-[#0D3B66] hover:from-[#0D3B66] hover:to-[#4A90E2] hover:text-white"
      }
    },
    footer: {
      bg: "from-[#0D3B66] to-[#4A90E2]",
      text: "text-white",
      accent: "[#E8A3B9]"
    }
  };

  // Core values from brand guide
  const coreValues = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Healthcare as service, not privilege",
      gradient: "from-[#E8A3B9] to-[#F5CEDD]"
    },
    {
      icon: Shield,
      title: "Accessibility",
      description: "Easy reach for underserved populations",
      gradient: "from-[#0D3B66] to-[#4A90E2]"
    },
    {
      icon: Award,
      title: "Trust & Expertise",
      description: "Female-led with 16+ years experience in diabetes and family medicine",
      gradient: "from-[#E8A3B9] to-[#0D3B66]"
    },
    {
      icon: Stethoscope,
      title: "Modern Care",
      description: "Multi-department facility with 24/7 emergency care",
      gradient: "from-[#4A90E2] to-[#0D3B66]"
    }
  ];

  // Facilities from PPT - Updated with exact PPT content
  const facilities = [
    {
      icon: Clock,
      title: "24/7 Medical Care",
      description: "Our polyclinic operates round-the-clock, ensuring that quality healthcare is always accessible to you and your family. Our dedicated medical team is available 24 hours a day, 7 days a week, providing continuous care and peace of mind.",
      index: 0
    },
    {
      icon: Shield,
      title: "Emergency Care Services",
      description: "Equipped with modern emergency care facilities, we are prepared to handle urgent medical situations promptly and efficiently. Our emergency services ensure that critical care is never more than a moment away.",
      index: 1
    },
    {
      icon: Plus,
      title: "24/7 On-Site Pharmacy",
      description: "Our fully-stocked pharmacy operates 24 hours a day, providing immediate access to prescribed medications and essential healthcare products. No more waiting or traveling to multiple locations for your medical needs.",
      index: 2
    },
    {
      icon: Activity,
      title: "Advanced Laboratory Services",
      description: "Comprehensive diagnostic testing with state-of-the-art equipment. ECG (Electrocardiogram) services for cardiac health monitoring. Home collection services for your convenience - we come to you. Quick and accurate results to support timely medical decisions.",
      index: 3
    },
    {
      icon: Star,
      title: "Wellness Packages",
      description: "Our specially designed wellness packages focus on preventive care and health maintenance, helping you stay ahead of potential health issues. These comprehensive packages are tailored to meet diverse health needs and age groups.",
      index: 4
    },
    {
      icon: Home,
      title: "Home Collection Services",
      description: "Understanding the value of your time and comfort, we offer doorstep collection of samples for laboratory tests, making healthcare more accessible and convenient for our patients.",
      index: 5
    }
  ];

  // Services data
  const services = [
    {
      icon: Stethoscope,
      title: "General Medicine",
      description: "Comprehensive primary care for all ages and health conditions",
      features: ["Routine Check-ups", "Chronic Disease Management", "Preventive Care"]
    },
    {
      icon: Activity,
      title: "Diabetology",
      description: "Specialized care for diabetes management and prevention",
      features: ["Blood Sugar Monitoring", "Diet Planning", "Insulin Management"]
    },
    {
      icon: Baby,
      title: "OB/GYN Care",
      description: "Complete women's health and maternity care services",
      features: ["Prenatal Care", "Gynecological Services", "Postnatal Care"]
    },
    {
      icon: Eye,
      title: "Dermatology",
      description: "Skin care treatments and cosmetic dermatology services",
      features: ["Skin Conditions", "Acne Treatment", "Skin Cancer Screening"]
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

      {/* Blog Modal */}
      {isBlogModalOpen && selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden flex flex-col w-full animate-scaleIn">
            <div className="flex justify-between items-center p-6 border-b border-gray-200 bg-gradient-to-r from-white to-gray-50">
              <div>
                <span className="text-sm font-semibold text-[#0D3B66] bg-[#F5CEDD]/20 px-3 py-1 rounded-full">
                  {selectedBlog.category}
                </span>
                <h2 className="text-2xl font-bold text-[#0D3B66] mt-2">{selectedBlog.title}</h2>
              </div>
              <button
                onClick={closeBlogModal}
                className="text-gray-500 hover:text-[#E8A3B9] transition-colors p-2 rounded-lg hover:bg-gray-100"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <div 
                className="prose prose-lg max-w-none prose-headings:text-[#0D3B66] prose-p:text-gray-700 prose-strong:text-[#E8A3B9]"
                dangerouslySetInnerHTML={{ __html: selectedBlog.fullContent }}
              />
            </div>
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="flex justify-between items-center text-sm text-gray-600">
                <span>{selectedBlog.date}</span>
                <span>{selectedBlog.readTime}</span>
              </div>
              <button
                onClick={closeBlogModal}
                className="w-full mt-4 bg-gradient-to-r from-[#0D3B66] to-[#4A90E2] text-white py-3 rounded-lg font-semibold hover:from-[#E8A3B9] hover:to-[#F5CEDD] hover:text-[#0D3B66] transition-all duration-300 transform hover:scale-105"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Header */}
      <header className={`fixed w-full top-0 z-40 bg-white/95 backdrop-blur-lg shadow-lg border-b border-[#E8A3B9]/20 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Enhanced Logo Section */}
          <button 
            onClick={() => scrollToSection('home')} 
            className="flex items-center group z-50"
          >
            <div className="relative">
              <img 
                src="/logo.png" 
                alt="Lotus Polyclinic" 
                className={`object-contain group-hover:scale-105 transition-transform duration-300 ${isScrolled ? 'h-14' : 'h-16 md:h-20 lg:h-24'}`}
              />
            </div>
          </button>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8 xl:space-x-10">
            {[
              { id: 'home', label: 'Home', icon: Home },
              { id: 'about', label: 'About Us', icon: Info },
              { id: 'services', label: 'Services', icon: Stethoscope },
              { id: 'facilities', label: 'Facilities', icon: Shield },
              { id: 'blogs', label: 'Blogs', icon: FileText },
              { id: 'testimonials', label: 'Testimonials', icon: Star },
              { id: 'contact', label: 'Contact Us', icon: Mail }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center text-[#0D3B66] hover:text-[#E8A3B9] font-semibold transition-all duration-300 group py-2 relative"
                style={{ letterSpacing: '0.02em', fontSize: '1.1rem' }}
              >
                <item.icon size={20} className="mr-3 group-hover:scale-110 transition-transform" />
                {item.label}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#E8A3B9] to-[#F5CEDD] group-hover:w-full transition-all duration-300"></div>
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4 md:space-x-6">
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden md:flex items-center bg-gradient-to-r from-[#0D3B66] to-[#4A90E2] text-white px-6 py-3 md:px-8 md:py-3 rounded-full hover:from-[#E8A3B9] hover:to-[#F5CEDD] hover:text-[#0D3B66] transition-all duration-300 shadow-xl hover:shadow-2xl font-bold text-lg group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <Calendar size={20} className="mr-3 group-hover:scale-110 transition-transform relative z-10" />
              <span className="hidden sm:inline relative z-10">Book Appointment</span>
            </button>

            <button
              className="lg:hidden text-[#0D3B66] p-3 rounded-lg hover:bg-[#F5CEDD]/30 transition-colors border border-[#E8A3B9]/20"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white/95 backdrop-blur-lg border-t border-[#E8A3B9]/20 py-8 px-8 shadow-inner animate-slideDown">
            <div className="flex flex-col space-y-6">
              {[
                { id: 'home', label: 'Home', icon: Home },
                { id: 'about', label: 'About Us', icon: Info },
                { id: 'services', label: 'Services', icon: Stethoscope },
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
                  className="flex items-center text-[#0D3B66] hover:text-[#E8A3B9] font-semibold text-xl py-4 transition-all duration-300 border-b border-[#E8A3B9]/10 hover:border-[#E8A3B9] hover:bg-[#F5CEDD]/10 rounded-lg px-4 group"
                >
                  <item.icon size={24} className="mr-4 group-hover:scale-110 transition-transform" />
                  {item.label}
                  <ChevronRight size={20} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))}
              <button
                onClick={() => {
                  scrollToSection('contact');
                  setIsMenuOpen(false);
                }}
                className="bg-gradient-to-r from-[#0D3B66] to-[#4A90E2] text-white px-8 py-4 rounded-xl hover:from-[#E8A3B9] hover:to-[#F5CEDD] hover:text-[#0D3B66] transition-all duration-300 font-bold text-lg text-center mt-4 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Add more padding for the bigger header */}
      <div className="pt-24 md:pt-28"></div>

      {/* Enhanced Hero Section */}
      <section id="home" className={`relative bg-gradient-to-br ${sectionColors.hero.bg} text-white py-16 md:py-20 lg:py-24 xl:py-28 px-4 overflow-hidden min-h-[90vh] flex items-center`}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-16 h-16 md:w-20 md:h-20 bg-[#E8A3B9] rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 md:right-20 w-24 h-24 md:w-32 md:h-32 bg-[#E8A3B9] rounded-full blur-2xl animate-bounce"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 md:w-16 md:h-16 bg-[#F5CEDD] rounded-full blur-lg animate-ping"></div>
        </div>

        <div className="container mx-auto max-w-4xl lg:max-w-6xl text-center relative z-10">
          {/* Enhanced Main Logo in Hero */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4 tracking-tight">
              LOTUS
            </h1>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white -mt-6 md:-mt-8 tracking-tight">
              POLYCLINIC
            </h1>
          </div>

          {/* Enhanced Badge */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-3 mb-6 md:mb-8 border border-white/30 mx-auto shadow-lg">
            <Award size={18} className="mr-3 text-[#E8A3B9] flex-shrink-0" />
            <span className="text-sm md:text-base font-semibold">Trusted Healthcare Since 2020</span>
          </div>

          {/* Enhanced Main Heading */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 md:mb-8 leading-snug md:leading-tight px-2">
            "Caring beyond treatment"
          </h1>
          
          {/* Enhanced Subtitle */}
          <p className="text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-8 md:mb-12 max-w-3xl lg:max-w-4xl mx-auto leading-relaxed opacity-95 px-2 font-light" style={{ fontFamily: "'Lora', serif" }}>
            Lotus polyclinic is a comprehensive health care provider committed to deliver compassionate, personalized and evidence based medical care.
          </p>

          {/* Enhanced Buttons */}
          <div className="flex flex-col xs:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 mb-12 md:mb-16 px-2">
            <button
              onClick={() => scrollToSection('contact')}
              className={`group bg-gradient-to-r ${sectionColors.hero.button.primary} px-6 sm:px-8 md:px-12 lg:px-16 py-4 rounded-full font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center text-base sm:text-lg md:text-xl whitespace-nowrap w-full xs:w-auto min-w-[200px] sm:min-w-[240px] relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <Calendar size={20} className="mr-3 group-hover:scale-110 transition-transform relative z-10" />
              <span className="relative z-10">Book Appointment</span>
              <ArrowRight size={20} className="ml-3 group-hover:translate-x-1 transition-transform relative z-10" />
            </button>
            <button
              onClick={() => scrollToSection('facilities')}
              className={`group border-2 ${sectionColors.hero.button.secondary} px-6 sm:px-8 md:px-12 lg:px-16 py-4 rounded-full font-bold transition-all duration-300 backdrop-blur-sm text-base sm:text-lg md:text-xl whitespace-nowrap w-full xs:w-auto min-w-[200px] sm:min-w-[240px] relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-[#0D3B66] transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <span className="relative z-10">Explore Facilities</span>
              <Play size={16} className="ml-3 inline group-hover:translate-x-1 transition-transform relative z-10" />
            </button>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 md:gap-6 lg:gap-8 max-w-3xl lg:max-w-5xl mx-auto px-2">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 md:p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group hover:scale-105">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-[#E8A3B9] to-[#F5CEDD] rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                  <stat.icon size={24} className="md:w-8 md:h-8 text-[#0D3B66]" />
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#E8A3B9] mb-2">{stat.number}</div>
                <div className="text-xs sm:text-sm font-medium opacity-90 leading-tight px-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Core Values Section */}
      <section className={`py-16 md:py-20 bg-gradient-to-b ${sectionColors.values.bg}`}>
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12 md:mb-16">
            <div className={`inline-flex items-center ${sectionColors.values.badge} rounded-full px-4 py-2 mb-4`}>
              <Heart size={18} className="text-[#0D3B66] mr-2" />
              <span className="text-sm font-semibold text-[#0D3B66]">OUR VALUES</span>
            </div>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${sectionColors.values.text} mb-4`}>Our Core Values</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto" style={{ fontFamily: "'Lora', serif" }}>
              The principles that guide every aspect of our healthcare delivery
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {coreValues.map((value, index) => (
              <div key={index} className={`group text-center p-6 md:p-8 ${sectionColors.values.card} rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-[#E8A3B9]/10`}>
                <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <value.icon size={28} className="md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0D3B66] mb-3 md:mb-4">{value.title}</h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className={`py-16 md:py-20 bg-gradient-to-br ${sectionColors.about.bg} relative overflow-hidden`}>
        <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-gradient-to-bl from-[#F5CEDD]/10 to-[#0D3B66]/5 rounded-full -translate-y-24 md:-translate-y-32 translate-x-24 md:translate-x-32"></div>
        
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className={`bg-gradient-to-br ${sectionColors.about.card} rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl transform hover:scale-[1.02] transition-all duration-500 relative overflow-hidden`}>
                <div className="absolute top-4 right-4 w-8 h-8 bg-[#E8A3B9] rounded-full opacity-20"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#F5CEDD] rounded-full opacity-20"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4 md:mb-6">
                    <Shield className="text-[#E8A3B9] mr-3 md:mr-4 md:w-8 md:h-8" size={24} />
                    <h3 className="text-xl md:text-2xl font-bold">Our Mission & Vision</h3>
                  </div>
                  <p className="text-base md:text-lg mb-4 md:mb-6 leading-relaxed opacity-90" style={{ fontFamily: "'Lora', serif" }}>
                    <strong>Vision:</strong> To deliver uncompromised, expert healthcare to all, grounded in compassion and guided by the best of modern medical excellence.
                  </p>
                  <p className="text-base md:text-lg mb-4 md:mb-6 leading-relaxed opacity-90" style={{ fontFamily: "'Lora', serif" }}>
                    <strong>Mission:</strong> To provide accessible, high-quality healthcare to every patient who walks through our doors, treating each individual with dignity, empathy, and respect. We are committed to:
                  </p>
                  <div className="space-y-2 md:space-y-3">
                    {[
                      "Delivering evidence-based medical care that meets the highest standards of clinical excellence",
                      "Fostering genuine human connections through compassionate listening and personalized attention",
                      "Creating a healing environment where patients feel heard, valued, and empowered in their health journey"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle size={16} className="md:w-5 md:h-5 text-[#E8A3B9] mr-2 md:mr-3 mt-1 flex-shrink-0" />
                        <span className="text-sm md:text-base font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className={`inline-flex items-center ${sectionColors.about.badge} rounded-full px-3 py-1 md:px-4 md:py-2 mb-4 md:mb-6`}>
                <Info size={14} className="md:w-4 md:h-4 text-[#0D3B66] mr-2" />
                <span className="text-xs md:text-sm font-semibold text-[#0D3B66]">ABOUT LOTUS POLYCLINIC</span>
              </div>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0D3B66] mb-4 md:mb-6 leading-tight">
                Built on the Foundation of <span className="text-[#E8A3B9]">Sri Sai Clinic</span>
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
                Lotus Polyclinic at Ponmar, built upon the foundation of Sri Sai Clinic, established in 2020, with a vision to provide quality and affordable healthcare to the community.
              </p>
              <p className="text-base md:text-lg text-gray-700 mb-6 md:mb-8 leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
                Guided by compassion and commitment, we have grown into a multi-specialty clinic dedicated to patient-centered care. At Lotus Polyclinic, we strive to combine medical expertise with empathy, ensuring that every individual receives comprehensive, evidence-based, and personalized treatment.
              </p>
              
              {/* Dr. Meena Section from PPT - Updated with full content */}
              <div className="bg-white rounded-xl p-4 md:p-6 border border-[#E8A3B9]/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-lg md:text-xl font-bold text-[#0D3B66] mb-3 flex items-center">
                  <Users size={20} className="mr-2 text-[#E8A3B9]" />
                  Dr. Meena - Founder & Chief Consultant
                </h3>
                <p className="text-sm md:text-base text-gray-700 mb-3" style={{ fontFamily: "'Lora', serif" }}>
                  <strong>MBBS, MD</strong> - brings over 16 years of distinguished clinical experience to Lotus Polyclinic, with specialized expertise in diabetes management and family medicine. She has dedicated her career to providing comprehensive healthcare with a particular focus on diabetic care.
                </p>
                <p className="text-sm md:text-base text-gray-700" style={{ fontFamily: "'Lora', serif" }}>
                  What sets Dr. Meena apart is her unwavering commitment to patient-centered care. Known for her compassionate approach, she combines clinical excellence with genuine empathy, ensuring every patient feels heard and valued. Her ethical practice and kind demeanor create a comfortable environment where patients can openly discuss their health concerns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className={`py-16 md:py-20 bg-gradient-to-b ${sectionColors.services.bg}`}>
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12 md:mb-16">
            <div className={`inline-flex items-center ${sectionColors.services.badge} rounded-full px-4 py-2 mb-4`}>
              <Stethoscope size={18} className="text-[#0D3B66] mr-2" />
              <span className="text-sm font-semibold text-[#0D3B66]">OUR SERVICES</span>
            </div>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${sectionColors.services.text} mb-4`}>Comprehensive Medical Services</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto px-4" style={{ fontFamily: "'Lora', serif" }}>
              Expert medical care across multiple specialties to meet all your healthcare needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className={`bg-white rounded-2xl p-6 md:p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#E8A3B9]/20 group hover:-translate-y-2`}>
                <div className="flex items-start mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-br ${sectionColors.services.icon} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform`}>
                    <service.icon size={24} className="text-[#E8A3B9]" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#0D3B66] mb-2">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
                      {service.description}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <span key={featureIndex} className="bg-[#F5CEDD]/20 text-[#0D3B66] px-3 py-1 rounded-full text-sm font-medium">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Facilities Section */}
      <section id="facilities" className={`py-16 md:py-20 bg-gradient-to-br ${sectionColors.facilities.bg}`}>
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12 md:mb-16">
            <div className={`inline-flex items-center ${sectionColors.facilities.badge} rounded-full px-4 py-2 mb-4 shadow-lg`}>
              <Shield size={18} className="text-[#0D3B66] mr-2" />
              <span className="text-sm font-semibold text-[#0D3B66]">OUR FACILITIES</span>
            </div>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${sectionColors.facilities.text} mb-4`}>State-of-the-Art Facilities</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto px-4" style={{ fontFamily: "'Lora', serif" }}>
              All your medical needs met under one roof with the highest standards of care
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className={`bg-white rounded-2xl p-6 md:p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#E8A3B9]/20 group hover:-translate-y-2`}>
                <div className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${sectionColors.facilities.icon[facility.index]} rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <facility.icon size={28} className="md:w-10 md:h-10 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-[#0D3B66] mb-3 md:mb-4">{facility.title}</h3>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Blog Section */}
      <section id="blogs" className={`py-16 md:py-20 bg-gradient-to-b ${sectionColors.blogs.bg} px-4`}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <div className={`inline-flex items-center ${sectionColors.blogs.badge} rounded-full px-4 py-2 mb-4`}>
              <FileText size={18} className="text-[#0D3B66] mr-2" />
              <span className="text-sm font-semibold text-[#0D3B66]">HEALTH BLOG</span>
            </div>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${sectionColors.blogs.text} mb-4`}>Health & Wellness Insights</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto px-4" style={{ fontFamily: "'Lora', serif" }}>
              Expert medical advice, health tips, and wellness guidance from our healthcare professionals
            </p>
          </div>

          {/* Regular Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {blogPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-[#E8A3B9]/20 group hover:-translate-y-4 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${post.color}`}></div>
                <div className="p-6 md:p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`w-12 h-12 bg-gradient-to-br ${post.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                        <post.icon size={24} className="text-white" />
                      </div>
                      <div className="ml-4">
                        <div className="text-xs font-semibold text-[#0D3B66]">{post.category}</div>
                        <div className="flex items-center text-xs text-gray-500">
                          <Calendar size={12} className="mr-1" />
                          {post.date}
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#0D3B66] mb-4 leading-tight group-hover:text-[#E8A3B9] transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-base" style={{ fontFamily: "'Lora', serif" }}>
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock size={14} className="mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                    <button 
                      onClick={() => openBlogModal(post)}
                      className="text-[#0D3B66] hover:text-[#E8A3B9] font-semibold text-base flex items-center group"
                    >
                      Read More
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Blogs Button */}
          <div className="text-center">
            <button className={`bg-gradient-to-r ${sectionColors.blogs.button} px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl text-lg flex items-center justify-center mx-auto group`}>
              <FileText size={20} className="mr-3 group-hover:scale-110 transition-transform" />
              View All Blog Articles
              <ArrowRight size={16} className="ml-3 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced Testimonials Section */}
      <section id="testimonials" className={`py-16 md:py-20 bg-gradient-to-br ${sectionColors.testimonials.bg} px-4`}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <div className={`inline-flex items-center ${sectionColors.testimonials.badge} rounded-full px-4 py-2 mb-4 shadow-lg`}>
              <Star size={18} className="text-[#0D3B66] mr-2" />
              <span className="text-sm font-semibold text-[#0D3B66]">PATIENT TESTIMONIALS</span>
            </div>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${sectionColors.testimonials.text} mb-4`}>What Our Patients Say</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto px-4" style={{ fontFamily: "'Lora', serif" }}>
              Real stories from our satisfied patients about their healthcare journey with us
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#E8A3B9] to-[#F5CEDD]"></div>
            <div className="text-center">
              <div className="flex justify-center mb-6 md:mb-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star 
                    key={star} 
                    size={24} 
                    className="md:w-8 md:h-8 text-yellow-400 fill-current mx-1" 
                  />
                ))}
              </div>
              
              <div className="min-h-[120px] md:min-h-[140px] mb-6 md:mb-8">
                <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed" style={{ fontFamily: "'Lora', serif" }}>
                  "{testimonials[activeTestimonial].text}"
                </p>
              </div>
              
              <div className="font-bold text-[#0D3B66] text-lg md:text-xl mb-3">
                {testimonials[activeTestimonial].name}
              </div>
              <div className="text-gray-600 mb-8 md:mb-12 text-base md:text-lg">Patient</div>
              
              {/* Testimonial Indicators */}
              <div className="flex justify-center space-x-3">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300 ${
                      index === activeTestimonial 
                        ? 'bg-[#E8A3B9] w-8 md:w-12' 
                        : 'bg-gray-300 hover:bg-[#E8A3B9]/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className={`py-16 md:py-20 bg-gradient-to-b ${sectionColors.contact.bg} px-4`}>
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12 md:mb-16">
            <div className={`inline-flex items-center ${sectionColors.contact.badge} rounded-full px-4 py-2 mb-4`}>
              <Mail size={18} className="text-[#0D3B66] mr-2" />
              <span className="text-sm font-semibold text-[#0D3B66]">CONTACT US</span>
            </div>
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold ${sectionColors.contact.text} mb-4`}>Get In Touch</h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto px-4" style={{ fontFamily: "'Lora', serif" }}>
              Ready to schedule your appointment? We're here to help with all your healthcare needs.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
            {/* Left Column - Contact Info & Google Maps */}
            <div className="space-y-8">
              {/* Contact Info Card */}
              <div className={`bg-gradient-to-br ${sectionColors.contact.card.info} rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden`}>
                <div className="absolute top-4 right-4 w-8 h-8 bg-[#E8A3B9] rounded-full opacity-20"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 bg-[#F5CEDD] rounded-full opacity-20"></div>
                <div className="relative z-10">
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
                      height="600"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Lotus Polyclinic Location"
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
                    className={`w-full bg-gradient-to-r ${sectionColors.contact.button.primary} py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl text-sm flex items-center justify-center transform hover:scale-105`}
                  >
                    <Calendar size={18} className="mr-2" />
                    BOOK APPOINTMENT
                  </button>
                </form>
              </div>

              {/* Message Us Form - Updated with PPT fields */}
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
                    className={`w-full bg-gradient-to-r ${sectionColors.contact.button.secondary} py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl text-sm flex items-center justify-center transform hover:scale-105`}
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

      {/* Enhanced Footer */}
      <footer className={`bg-gradient-to-br ${sectionColors.footer.bg} text-white py-12 md:py-16 px-4`}>
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
            <div>
              {/* Footer Logo - Text Only */}
              <div className="mb-4 md:mb-6">
                <div className="text-left">
                  <span className="text-2xl md:text-3xl font-bold text-white block leading-tight">
                    LOTUS
                  </span>
                  <span className="text-2xl md:text-3xl font-bold text-white block leading-tight -mt-2">
                    POLYCLINIC
                  </span>
                </div>
              </div>
              <p className="text-white/80 leading-relaxed text-base md:text-lg mb-4" style={{ fontFamily: "'Lora', serif" }}>
                "Caring beyond treatment" - Comprehensive healthcare provider committed to deliver compassionate, personalized and evidence based medical care.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white/70 hover:text-[#E8A3B9] transition-colors">
                  <MessageCircle size={20} />
                </a>
                <a href="#" className="text-white/70 hover:text-[#E8A3B9] transition-colors">
                  <Phone size={20} />
                </a>
                <a href="#" className="text-white/70 hover:text-[#E8A3B9] transition-colors">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg md:text-xl mb-4 md:mb-6">Quick Links</h4>
              <div className="space-y-2 md:space-y-3">
                {['home', 'about', 'services', 'facilities', 'blogs', 'testimonials', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block text-white/70 hover:text-[#E8A3B9] transition-colors capitalize text-base md:text-lg text-left"
                  >
                    {item === 'about' ? 'About Us' : 
                     item === 'services' ? 'Our Services' :
                     item === 'contact' ? 'Contact Us' : 
                     item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg md:text-xl mb-4 md:mb-6">Contact Info</h4>
              <div className="space-y-2 md:space-y-3 text-white/70 text-base md:text-lg">
                <div className="flex items-center">
                  <MapPin size={16} className="mr-2 text-[#E8A3B9]" />
                  <span>Ponmar</span>
                </div>
                <div className="flex items-center">
                  <Phone size={16} className="mr-2 text-[#E8A3B9]" />
                  <span>0820-0000000</span>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="mr-2 text-[#E8A3B9]" />
                  <span>contact@lotuspolyclinic.com</span>
                </div>
                <div className="flex items-center">
                  <Clock size={16} className="mr-2 text-[#E8A3B9]" />
                  <span>Mon-Sun: 7:00 AM - 7:30 PM</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-lg md:text-xl mb-4 md:mb-6">Emergency</h4>
              <div className="space-y-2 md:space-y-3">
                <div className="text-[#E8A3B9] font-semibold text-base md:text-lg">24/7 Support Available</div>
                <a href="tel:08200000000" className="text-white/70 hover:text-[#E8A3B9] transition-colors block text-base md:text-lg">
                  Emergency Helpline
                </a>
                <a href="https://wa.me/918200000000" className="text-white/70 hover:text-[#E8A3B9] transition-colors block text-base md:text-lg">
                  WhatsApp Emergency
                </a>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-[#E8A3B9] text-[#0D3B66] px-4 py-2 rounded-full font-semibold hover:bg-[#F5CEDD] transition-all duration-300 text-sm md:text-base mt-2"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="text-white/70 text-base md:text-lg" style={{ fontFamily: "'Lora', serif" }}>
              © 2025 Lotus Polyclinic. All rights reserved. | Built on the foundation of Sri Sai Clinic | Compassionate Care, Clinical Excellence
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;