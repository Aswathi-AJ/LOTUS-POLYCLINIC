import React, { useState, useEffect } from 'react';
import {
  Phone, Mail, MapPin, Clock, MessageCircle, Menu, X,
  Heart, Home, Info, Shield, Users, Star, Award,
  Calendar, ArrowRight, CheckCircle, Play, Stethoscope,
  Baby, Activity, Apple, Plus, FileText, ChevronRight,
  Eye, ArrowUp, ExternalLink, Sparkles, Leaf, Zap,
  Thermometer, Pill, Microscope, Scissors
} from 'lucide-react';

// CSS Variables for consistency
const globalStyles = `
  :root {
    /* Colors */
    --primary-dark: #0D3B66;
    --primary-medium: #4A90E2;
    --primary-light: #87CEEB;
    --accent-pink: #E8A3B9;
    --accent-light-pink: #F8D4E3;
    --text-dark: #1f2937;
    --text-medium: #6b7280;
    --text-light: #9ca3af;
    --white: #ffffff;
    
    /* Typography */
    --text-xs: 0.75rem;
    --text-sm: 0.875rem;
    --text-base: 1rem;
    --text-lg: 1.125rem;
    --text-xl: 1.25rem;
    --text-2xl: 1.5rem;
    --text-3xl: 1.875rem;
    --text-4xl: 2.25rem;
    
    /* Spacing */
    --space-1: 0.25rem;
    --space-2: 0.5rem;
    --space-3: 0.75rem;
    --space-4: 1rem;
    --space-5: 1.25rem;
    --space-6: 1.5rem;
    --space-8: 2rem;
    --space-10: 2.5rem;
    --space-12: 3rem;
    --space-16: 4rem;
    --space-20: 5rem;
    --space-24: 6rem;
  }

  /* Ensure proper contrast */
  .text-gray-700 {
    color: var(--text-dark);
  }
  
  .text-gray-600 {
    color: var(--text-medium);
  }
  
  /* Focus states for accessibility */
  button:focus-visible, 
  a:focus-visible, 
  input:focus-visible, 
  select:focus-visible, 
  textarea:focus-visible {
    outline: 2px solid var(--primary-medium);
    outline-offset: 2px;
  }

  /* Improved line-height for readability */
  .leading-relaxed {
    line-height: 1.6;
  }

  /* Animation for success message */
  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fade-in 0.3s ease-out;
  }
`;

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [showBookingSuccess, setShowBookingSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    service: '',
    notes: ''
  });

  useEffect(() => {
    // Add global styles
    const styleSheet = document.createElement("style");
    styleSheet.innerText = globalStyles;
    document.head.appendChild(styleSheet);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.head.removeChild(styleSheet);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openBlog = (blog) => {
    setSelectedBlog(blog);
  };

  const closeBlog = () => {
    setSelectedBlog(null);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    
    // Here you would typically send the data to your backend
    console.log('Booking submitted:', formData);
    
    // Show success message
    setShowBookingSuccess(true);
    
    // Reset form
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      service: '',
      notes: ''
    });
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      setShowBookingSuccess(false);
    }, 5000);
  };

const testimonials = [
  {
    name: "CHARLES C L",
    
    date: "2 months ago",
    text: "Was very happy with the service and the results got. Very clean clinic, staff are very professional. Would definitely recommend for very economical treatment.",
    rating: 5
  },
  {
    name: "Arun Kumar",

    date: "4 years ago",
    text: "Had issue with my sugar level and had been referred by my colleague to Sri Sai Clinic. The treatment was good. I strongly recommend to visit the clinic for diabetes related issues.",
    rating: 5
  }
];

  const stats = [
    { number: "5000+", label: "Patients Treated", icon: Users },
    { number: "16+", label: "Years Experience", icon: Award },
    { number: "24/7", label: "Medical Care", icon: Clock },
    { number: "98%", label: "Patient Satisfaction", icon: Heart }
  ];

  const coreValues = [
    {
      icon: Heart,
      title: "Compassion",
      description: "Healthcare as service, not privilege",
      gradient: "from-[#0D3B66] to-[#4A90E2]"
    },
    {
      icon: Zap,
      title: "Accessibility",
      description: "Easy reach for underserved populations",
      gradient: "from-[#E8A3B9] to-[#F8D4E3]"
    },
    {
      icon: Award,
      title: "Trust & Expertise",
      description: "Female-led with 16+ years experience",
      gradient: "from-[#4A90E2] to-[#E8A3B9]"
    },
    {
      icon: Sparkles,
      title: "Modern Care",
      description: "Multi-department facility with visiting specialists",
      gradient: "from-[#E8A3B9] to-[#4A90E2]"
    }
  ];

  const facilitiesData = [
    {
      icon: Clock,
      title: "24/7 Medical Care",
      description: "Round-the-clock healthcare services ensuring continuous access to quality medical care for your entire family.",
      gradient: "from-[#0D3B66] to-[#4A90E2]"
    },
    {
      icon: Shield,
      title: "Emergency Services",
      description: "Modern emergency care facilities ready to handle urgent situations promptly and efficiently.",
      gradient: "from-[#E8A3B9] to-[#F8D4E3]"
    },
    {
      icon: Pill,
      title: "24/7 Pharmacy",
      description: "Fully-stocked on-site pharmacy operating round-the-clock for immediate access to prescribed medications.",
      gradient: "from-[#4A90E2] to-[#E8A3B9]"
    },
    {
      icon: Microscope,
      title: "Advanced Laboratory",
      description: "State-of-the-art diagnostic testing with ECG services and convenient home collection services.",
      gradient: "from-[#E8A3B9] to-[#4A90E2]"
    },
    {
      icon: Star,
      title: "Wellness Packages",
      description: "Comprehensive preventive care packages tailored to diverse health needs and age groups.",
      gradient: "from-[#0D3B66] to-[#4A90E2]"
    },
    {
      icon: Home,
      title: "Home Collection",
      description: "Doorstep sample collection services for laboratory tests, making healthcare accessible and convenient.",
      gradient: "from-[#E8A3B9] to-[#F8D4E3]"
    }
  ];

  const services = [
    {
      icon: Activity,
      title: "Diabetology",
      description: "Specialized care for diabetes management and prevention with comprehensive monitoring and personalized treatment plans.",
      features: ["Blood Sugar Monitoring", "Diet Planning", "Complication Screening"]
    },
    {
      icon: Baby,
      title: "OB/GYN Care",
      description: "Complete women's health and maternity care services at every life stage from adolescence through menopause.",
      features: ["Prenatal Care", "Gynecological Services", "Family Planning"]
    },
    {
      icon: Stethoscope,
      title: "General Medicine",
      description: "Comprehensive primary care for all ages and health conditions with chronic disease management expertise.",
      features: ["Chronic Disease Management", "Preventive Care", "Geriatric Care"]
    },
    {
      icon: Eye,
      title: "Dermatology",
      description: "Skin care treatments and medical dermatology services for all skin conditions and cosmetic concerns.",
      features: ["Skin Conditions", "Allergy Testing", "Minor Procedures"]
    }
  ];

  const blogPostsData = [
    {
      id: 1,
      title: "Comprehensive Diabetes Management: A Complete Guide to Living Well with Diabetes",
      excerpt: "Expert insights on managing diabetes through lifestyle modifications, medication adherence, and regular monitoring for optimal health outcomes.",
      category: "DIABETES CARE",
      readTime: "25 min read",
      date: "Nov 20, 2024",
      icon: Activity,
      author: "Dr. Meena",
      authorRole: "Chief Diabetologist & Physician",
      content: `
        <h1>Understanding Diabetes: The Modern Epidemic</h1>
        <p>Diabetes mellitus has emerged as one of the most significant health challenges of the 21st century, affecting over 537 million adults worldwide according to the International Diabetes Federation. At Lotus Polyclinic, we believe that comprehensive diabetes management goes beyond mere blood sugar control—it encompasses holistic care that addresses physical, emotional, and lifestyle factors to ensure optimal quality of life for our patients.</p>

        <h2>Types of Diabetes: Comprehensive Understanding</h2>
        <p><strong>Type 1 Diabetes:</strong> An autoimmune condition where the body's immune system mistakenly attacks and destroys insulin-producing beta cells in the pancreas. This type typically develops in childhood or adolescence and requires lifelong insulin therapy. The exact cause remains unknown, but genetic predisposition and environmental factors are believed to play significant roles.</p>
        
        <p><strong>Type 2 Diabetes:</strong> The most common form, accounting for approximately 90-95% of all diabetes cases. Characterized by insulin resistance and relative insulin deficiency, this condition develops gradually over years. Key risk factors include obesity, sedentary lifestyle, family history, and certain ethnic backgrounds. Unlike type 1 diabetes, type 2 is largely preventable through lifestyle modifications.</p>
        
        <p><strong>Gestational Diabetes:</strong> Develops during pregnancy and usually resolves after childbirth, though it increases future diabetes risk for both mother and child. This condition affects approximately 2-10% of pregnancies and requires careful monitoring to prevent complications for both mother and baby.</p>

        <h2>Comprehensive Diagnostic Approach</h2>
        <p>Accurate diagnosis forms the foundation of effective diabetes management. Our diagnostic protocol includes:</p>
        <ul>
          <li><strong>Fasting Plasma Glucose Test:</strong> Measures blood sugar after an 8-hour fast, with values ≥126 mg/dL indicating diabetes</li>
          <li><strong>Oral Glucose Tolerance Test (OGTT):</strong> Assesses blood sugar response to glucose load, with 2-hour values ≥200 mg/dL diagnostic</li>
          <li><strong>HbA1c Test:</strong> Provides 3-month average blood sugar levels, with values ≥6.5% indicating diabetes</li>
          <li><strong>Random Blood Glucose Test:</strong> Values ≥200 mg/dL with classic symptoms confirm diagnosis</li>
        </ul>

        <h2>Advanced Management Strategies</h2>
        
        <h3>Medical Nutrition Therapy: Beyond Basic Diet</h3>
        <p>Proper nutrition forms the cornerstone of diabetes management. Our approach includes sophisticated dietary strategies:</p>
        <ul>
          <li><strong>Carbohydrate Counting Mastery:</strong> Advanced techniques for balancing carbohydrate intake with insulin or medication requirements</li>
          <li><strong>Glycemic Index Optimization:</strong> Understanding how different foods affect blood sugar levels and meal timing strategies</li>
          <li><strong>Macronutrient Balancing:</strong> Optimal distribution of carbohydrates (45-65%), proteins (15-20%), and fats (20-35%)</li>
          <li><strong>Portion Control Systems:</strong> Implementing consistent meal sizes and timing using advanced portion control methods</li>
          <li><strong>Nutrient Timing Strategies:</strong> Strategic meal scheduling to optimize metabolic responses and medication efficacy</li>
        </ul>

        <p>At Lotus Polyclinic, we're committed to providing comprehensive, compassionate diabetes care that empowers individuals to live full, healthy lives. Our multidisciplinary team works together to create personalized management plans that address each patient's unique needs, goals, and lifestyle circumstances.</p>

        <p><strong>Key Takeaway:</strong> Diabetes management is a dynamic, lifelong journey that requires partnership between patients and healthcare providers. With proper care, advanced technology, and continuous support, excellent quality of life and optimal health outcomes are absolutely achievable. Regular monitoring, lifestyle modifications, and proactive complication screening form the foundation of successful long-term diabetes management.</p>
      `
    },
    {
      id: 2,
      title: "Comprehensive Prenatal Care: Ensuring Optimal Maternal and Fetal Health",
      excerpt: "Complete evidence-based guide to prenatal care, advanced nutrition planning, exercise protocols, and comprehensive wellness practices for optimal pregnancy outcomes.",
      category: "WOMEN'S HEALTH",
      readTime: "28 min read",
      date: "Nov 15, 2024",
      icon: Baby,
      author: "Dr. Meena",
      authorRole: "OB/GYN Specialist & Physician",
      content: `
        <h1>Comprehensive Prenatal Care: A Journey of Transformation</h1>
        <p>Pregnancy represents one of life's most profound physiological and emotional transformations. At Lotus Polyclinic, we provide comprehensive, evidence-based prenatal care designed to support both maternal and fetal well-being through every stage of this remarkable journey.</p>

        <h2>Preconception Care: Laying the Foundation</h2>
        <p>Optimal pregnancy outcomes begin before conception. Our comprehensive preconception program includes:</p>
        <ul>
          <li><strong>Comprehensive Health Assessment:</strong> Detailed medical history review, genetic screening, and risk factor evaluation</li>
          <li><strong>Nutritional Optimization:</strong> Folic acid supplementation (400-800 mcg daily) initiated 3 months pre-conception</li>
          <li><strong>Chronic Condition Management:</strong> Optimization of pre-existing conditions like diabetes, hypertension, or thyroid disorders</li>
          <li><strong>Lifestyle Modification:</strong> Smoking cessation, alcohol avoidance, and healthy weight achievement</li>
        </ul>

        <h2>First Trimester: Critical Foundation Building</h2>
        <p>The first prenatal appointment includes our comprehensive evaluation protocol with detailed medical history, dating ultrasound, and advanced laboratory panel to ensure the healthiest start for both mother and baby.</p>

        <h2>Advanced Nutritional Science in Pregnancy</h2>
        <p>Optimal nutritional support for maternal health and fetal development includes proper folic acid protocol, iron supplementation strategy, calcium optimization, and omega-3 fatty acids for fetal brain development.</p>

        <p>At Lotus Polyclinic, we're committed to providing exceptional, evidence-based prenatal care that supports both physical health and emotional well-being. Our comprehensive approach ensures that every pregnancy receives the advanced medical expertise, personalized attention, and compassionate support it deserves.</p>

        <p><strong>Key Takeaway:</strong> Optimal pregnancy outcomes result from comprehensive, personalized care that begins before conception and extends through the postpartum period. Regular prenatal visits, evidence-based interventions, and proactive complication screening form the foundation of successful pregnancy management.</p>
      `
    },
    {
      id: 3,
      title: "Comprehensive Preventive Health: Advanced Strategies for Disease Prevention",
      excerpt: "Evidence-based comprehensive guide to preventive health screenings, advanced lifestyle modifications, and cutting-edge early detection strategies for lifelong wellness.",
      category: "PREVENTIVE CARE",
      readTime: "30 min read",
      date: "Nov 10, 2024",
      icon: Shield,
      author: "Dr. Meena",
      authorRole: "Preventive Medicine Specialist & Physician",
      content: `
        <h1>Preventive Health: The Science of Proactive Wellness</h1>
        <p>Preventive healthcare represents the most sophisticated and effective approach to maintaining long-term health, quality of life, and functional longevity. At Lotus Polyclinic, we emphasize proactive health management through comprehensive evidence-based screenings and advanced lifestyle interventions.</p>

        <h2>The Scientific Foundation of Preventive Care</h2>
        <p>Advanced preventive care operates across multiple scientific levels with sophisticated interventions including primordial prevention, primary prevention, secondary prevention, and tertiary prevention strategies tailored to individual risk profiles.</p>

        <h2>Comprehensive Age-Specific Preventive Guidelines</h2>
        <p>Our preventive care includes specialized protocols for young adults (18-39 years) focusing on foundation building, middle age (40-64 years) with enhanced surveillance, and senior adults (65+ years) with comprehensive geriatric assessment.</p>

        <h2>Advanced Cancer Screening and Prevention</h2>
        <p>We provide sophisticated multi-modal screening approaches for breast cancer, colorectal cancer, and prostate cancer with personalized risk assessment and advanced biomarker integration.</p>

        <p>At Lotus Polyclinic, we believe that advanced preventive care is the foundation of long-term health, vitality, and functional longevity. Our comprehensive approach combines cutting-edge screening technologies with personalized lifestyle recommendations and continuous risk monitoring to help you maintain optimal health throughout your lifespan.</p>

        <p><strong>Key Takeaway:</strong> The most sophisticated and effective approach to health is proactive prevention. Advanced preventive care, combined with healthy lifestyle choices and regular monitoring, can significantly reduce your risk of developing chronic diseases and help you maintain the highest possible quality of life.</p>
      `
    }
  ];

useEffect(() => {
  const interval = setInterval(() => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  }, 5000);
  return () => clearInterval(interval);
}, [testimonials.length]);

  const BlogModal = ({ blog, onClose }) => (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <div>
            <div className="flex items-center mb-3">
              <div className="bg-[#F8D4E3] rounded-full px-3 py-1">
                <span className="text-sm font-bold text-[#0D3B66]">{blog.category}</span>
              </div>
              <span className="ml-3 text-sm text-gray-600">{blog.date}</span>
            </div>
            <h1 className="text-xl md:text-2xl font-bold text-gray-900 leading-tight">{blog.title}</h1>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#E8A3B9]"
            aria-label="Close blog article"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex items-center mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="w-12 h-12 bg-gradient-to-br from-[#0D3B66] to-[#4A90E2] rounded-lg flex items-center justify-center mr-4">
              <blog.icon size={24} className="text-[#E8A3B9]" />
            </div>
            <div>
              <div className="font-semibold text-gray-900 text-base">{blog.author}</div>
              <div className="text-sm text-gray-600">{blog.authorRole}</div>
              <div className="flex items-center text-sm text-gray-600 mt-1">
                <Clock size={14} className="mr-1" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>

          <article 
            className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-800 prose-li:text-gray-800 prose-strong:text-gray-900 prose-headings:mb-4 prose-p:mb-4 prose-headings:font-semibold"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
          
          <div className="mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={onClose}
              className="bg-gradient-to-r from-[#0D3B66] to-[#4A90E2] text-white px-6 py-3 rounded-lg hover:from-[#E8A3B9] hover:to-[#F8D4E3] hover:text-[#0D3B66] transition-all font-medium text-base focus:outline-none focus:ring-2 focus:ring-[#4A90E2]"
            >
              Close Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Success Message Component
  const BookingSuccessMessage = () => (
    <div className="fixed top-4 right-4 z-50 bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center space-x-3 animate-fade-in">
      <CheckCircle size={24} className="text-white" />
      <div>
        <div className="font-semibold">Booking Successful!</div>
        <div className="text-sm opacity-90">We will contact you shortly to confirm your appointment.</div>
      </div>
      <button
        onClick={() => setShowBookingSuccess(false)}
        className="text-white hover:text-gray-200 focus:outline-none"
        aria-label="Close success message"
      >
        <X size={18} />
      </button>
    </div>
  );

  // Lotus Logo Component
  const LotusLogo = ({ size = 32, className = "" }) => (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 32 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M16 6C12 2 6 4 6 4C6 4 8 10 12 14C16 18 22 20 22 20C22 20 20 14 16 10Z" fill="#E8A3B9"/>
      <path d="M16 6C20 2 26 4 26 4C26 4 24 10 20 14C16 18 10 20 10 20C10 20 12 14 16 10Z" fill="#F8D4E3"/>
      <path d="M16 26C12 22 6 24 6 24C6 24 8 30 12 28C16 26 22 24 22 24C22 24 20 28 16 26Z" fill="#E8A3B9"/>
      <path d="M16 26C20 22 26 24 26 24C26 24 24 30 20 28C16 26 10 24 10 24C10 24 12 28 16 26Z" fill="#F8D4E3"/>
      <circle cx="16" cy="16" r="4" fill="#0D3B66"/>
    </svg>
  );

  return (
    <div className="font-sans min-w-[320px] bg-white leading-relaxed" style={{ fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif" }}>
      {/* Preload critical fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
      
      {/* Blog Modal */}
      {selectedBlog && <BlogModal blog={selectedBlog} onClose={closeBlog} />}

      {/* Booking Success Message */}
      {showBookingSuccess && <BookingSuccessMessage />}

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918200000000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        aria-label="Chat on WhatsApp for medical appointments and inquiries"
      >
        <MessageCircle size={24} />
      </a>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-[#0D3B66] to-[#4A90E2] text-white p-4 rounded-full shadow-lg hover:from-[#E8A3B9] hover:to-[#F8D4E3] hover:text-[#0D3B66] transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#0D3B66] focus:ring-offset-2"
          aria-label="Scroll back to top of the page"
        >
          <ArrowUp size={24} />
        </button>
      )}

{/* Header */}
<header className={`fixed w-full top-0 z-40 bg-white shadow-md border-b border-gray-200 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'}`}>
  <div className="px-5 sm:px-6 max-w-7xl mx-auto flex justify-between items-center">
    <button 
      onClick={() => scrollToSection('home')} 
      className="flex items-center group focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:ring-offset-2 rounded-lg"
      aria-label="Lotus Polyclinic Home"
    >
      {/* Logo with Image from Public Folder - Large Size */}
      <div className="flex items-center space-x-3">
        <img 
          src="/logo.png" 
          alt="Lotus Polyclinic Logo" 
          className="w-20 h-20 md:w-24 md:h-24 object-contain group-hover:scale-105 transition-transform"
        />
       
      </div>
    </button>

    {/* Rest of header code remains the same... */}

          <nav className="hidden lg:flex items-center space-x-3" aria-label="Main navigation">
            {[
              { id: 'home', label: 'Home', icon: Home },
              { id: 'about', label: 'About', icon: Info },
              { id: 'services', label: 'Services', icon: Stethoscope },
              { id: 'facilities', label: 'Facilities', icon: Shield },
              { id: 'blogs', label: 'Blog', icon: FileText },
              { id: 'testimonials', label: 'Testimonials', icon: Star },
              { id: 'contact', label: 'Contact', icon: Mail }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="flex items-center text-gray-800 hover:text-[#E8A3B9] font-medium transition-colors py-3 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E8A3B9] focus:ring-offset-2 text-base"
                aria-label={`Navigate to ${item.label} section`}
              >
                <item.icon size={18} className="mr-2" />
                {item.label}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="hidden md:flex items-center bg-gradient-to-r from-[#0D3B66] to-[#4A90E2] text-white px-5 py-3 rounded-lg hover:from-[#E8A3B9] hover:to-[#F8D4E3] hover:text-[#0D3B66] transition-all shadow-lg font-medium text-base focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:ring-offset-2"
              aria-label="Book an appointment at Lotus Polyclinic"
            >
              <Calendar size={18} className="mr-2" />
              Book Now
            </button>

            <button
              className="lg:hidden text-gray-800 p-2 rounded-lg hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:ring-offset-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle mobile navigation menu"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden bg-white border-t border-gray-200 py-4 px-5" aria-label="Mobile navigation">
            <div className="flex flex-col space-y-3">
              {[
                { id: 'home', label: 'Home', icon: Home },
                { id: 'about', label: 'About', icon: Info },
                { id: 'services', label: 'Services', icon: Stethoscope },
                { id: 'facilities', label: 'Facilities', icon: Shield },
                { id: 'blogs', label: 'Blog', icon: FileText },
                { id: 'testimonials', label: 'Testimonials', icon: Star },
                { id: 'contact', label: 'Contact', icon: Mail }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="flex items-center text-gray-800 hover:text-[#E8A3B9] hover:bg-gray-50 font-medium py-3 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#E8A3B9] focus:ring-offset-2 text-base"
                  aria-label={`Navigate to ${item.label} section`}
                >
                  <item.icon size={20} className="mr-3" />
                  {item.label}
                  <ChevronRight size={18} className="ml-auto" />
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-[#0D3B66] to-[#4A90E2] text-white px-6 py-3 rounded-lg hover:from-[#E8A3B9] hover:to-[#F8D4E3] hover:text-[#0D3B66] transition-all font-medium text-center mt-4 text-base focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:ring-offset-2"
                aria-label="Book an appointment at Lotus Polyclinic"
              >
                Book Appointment
              </button>
            </div>
          </nav>
        )}
      </header>

      {/* Main Content */}
      <main>
        {/* Header Spacing */}
        <div className={isScrolled ? 'pt-16' : 'pt-20'}></div>

        {/* Hero Section */}
        <section id="home" className="relative bg-gradient-to-br from-[#0D3B66] via-[#4A90E2] to-[#87CEEB] text-white py-8 md:py-16 lg:py-20 px-5 min-h-[40vh] md:min-h-[60vh] flex items-center" aria-labelledby="hero-heading">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="px-5 sm:px-6 max-w-7xl mx-auto text-center relative z-10 w-full">
            <div className="mb-6">
              {/* Hero Logo */}
              <div className="flex justify-center mb-4">
              
                  <div className="flex items-center space-x-4">
                    
                    <div className="text-center">
                      <h1 id="hero-heading" className="text-4xl md:text-5xl font-bold leading-tight">
                        LOTUS
                      </h1>
                      <h1 className="text-4xl md:text-5xl font-bold leading-tight -mt-2">
                        POLYCLINIC
                      </h1>
                    </div>
                  
                </div>
              </div>
            </div>

            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/30">
              <Award size={18} className="mr-2 text-[#E8A3B9]" />
              <span className="text-sm font-medium">Trusted Healthcare Since 2020</span>
            </div>

            <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-4">
              "Caring beyond treatment"
            </h2>
            
            <p className="text-base leading-relaxed mb-8 max-w-3xl mx-auto text-white/90">
              Lotus polyclinic is a comprehensive health care provider committed to deliver compassionate, personalized and evidence based medical care.
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-[#E8A3B9] to-[#F8D4E3] text-[#0D3B66] px-6 py-3 rounded-lg hover:shadow-2xl transition-all hover:scale-105 flex items-center justify-center w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-[#E8A3B9] focus:ring-offset-2 text-base font-medium"
                aria-label="Book an appointment at Lotus Polyclinic"
              >
                <Calendar size={20} className="mr-2" />
                Book Appointment
                <ArrowRight size={20} className="ml-2" />
              </button>
              <button
                onClick={() => scrollToSection('facilities')}
                className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#0D3B66] transition-all w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 text-base font-medium"
                aria-label="Explore our medical facilities and services"
              >
                Explore Facilities
                <Play size={16} className="ml-2 inline" />
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/20 transition-all">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E8A3B9] to-[#F8D4E3] rounded-lg flex items-center justify-center mx-auto mb-3" aria-hidden="true">
                    <stat.icon size={24} className="text-[#0D3B66]" />
                  </div>
                  <div className="text-xl font-bold text-[#E8A3B9] mb-2">{stat.number}</div>
                  <div className="text-sm font-medium leading-tight">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-12 md:py-20 px-5 bg-gradient-to-b from-white to-gray-50" aria-labelledby="values-heading">
          <div className="px-5 sm:px-6 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-[#F8D4E3] rounded-full px-4 py-2 mb-4">
                <Heart size={16} className="text-[#0D3B66] mr-2" />
                <span className="text-sm font-bold text-[#0D3B66] tracking-wide">OUR VALUES</span>
              </div>
              <h2 id="values-heading" className="text-2xl md:text-3xl font-bold leading-tight text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-base leading-relaxed text-gray-700 max-w-2xl mx-auto">
                The principles that guide every aspect of our healthcare delivery
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <div key={index} className="text-center bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-gray-100">
                  <div className={`w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <value.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-sm leading-relaxed text-gray-700">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-20 px-5 bg-gradient-to-br from-[#F8D4E3] to-[#87CEEB]" aria-labelledby="about-heading">
          <div className="px-5 sm:px-6 max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              <div className="max-w-2xl">
                <div className="inline-flex items-center bg-[#F8D4E3] rounded-full px-4 py-2 mb-4">
                  <Info size={16} className="text-[#0D3B66] mr-2" />
                  <span className="text-sm font-bold text-[#0D3B66] tracking-wide">ABOUT US</span>
                </div>
                <h2 id="about-heading" className="text-2xl md:text-3xl font-bold leading-tight text-gray-900 mb-4">
                  Built on the Foundation of <span className="text-[#E8A3B9]">Sri Sai Clinic</span>
                </h2>
                <p className="text-base leading-relaxed text-gray-800 mb-6">
                  Lotus Polyclinic at Ponmar, built upon the foundation of Sri Sai Clinic, established in 2020, with a vision to provide quality and affordable healthcare.
                </p>
                
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Users size={24} className="mr-3 text-[#E8A3B9]" />
                    Dr. Meena - Founder
                  </h3>
                  <p className="text-base leading-relaxed text-gray-800 mb-4">
                    <strong>MBBS, MD</strong> - brings over 16 years of experience with specialized expertise in diabetes management.
                  </p>
                  <p className="text-base leading-relaxed text-gray-800">
                    Known for her compassionate approach, combining clinical excellence with genuine empathy.
                  </p>
                </div>
              </div>

              <div className="mt-8 lg:mt-0">
                <div className="bg-gradient-to-br from-[#0D3B66] to-[#4A90E2] text-white rounded-lg p-6 shadow-xl">
                  <div className="flex items-center mb-6">
                    <Shield className="text-[#E8A3B9] mr-4" size={24} />
                    <h3 className="text-xl md:text-2xl font-semibold leading-tight">Mission & Vision</h3>
                  </div>
                  <p className="text-base leading-relaxed mb-6 opacity-90">
                    <strong>Vision:</strong> To deliver uncompromised, expert healthcare grounded in compassion and modern medical excellence.
                  </p>
                  <p className="text-base leading-relaxed mb-6 opacity-90">
                    <strong>Mission:</strong> To provide accessible, high-quality healthcare to every patient.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Evidence-based medical care",
                      "Genuine human connections",
                      "Healing environment"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle size={20} className="text-[#E8A3B9] mr-3 mt-1 flex-shrink-0" />
                        <span className="text-base leading-relaxed opacity-90">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 md:py-20 px-5 bg-white" aria-labelledby="services-heading">
          <div className="px-5 sm:px-6 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-[#F8D4E3] rounded-full px-4 py-2 mb-4">
                <Stethoscope size={16} className="text-[#0D3B66] mr-2" />
                <span className="text-sm font-bold text-[#0D3B66] tracking-wide">OUR SERVICES</span>
              </div>
              <h2 id="services-heading" className="text-2xl md:text-3xl font-bold leading-tight text-gray-900 mb-4">Comprehensive Medical Services</h2>
              <p className="text-base leading-relaxed text-gray-700 max-w-2xl mx-auto">
                Expert medical care across multiple specialties
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:-translate-y-1 group focus:outline-none focus:ring-2 focus:ring-[#E8A3B9] break-words">
                  <div className="flex items-start mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#0D3B66] to-[#4A90E2] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <service.icon size={24} className="text-[#E8A3B9]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 break-words">
                        {service.title}
                      </h3>
                      <p className="text-base leading-relaxed text-gray-700 break-words mb-4">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="bg-[#F8D4E3] text-[#0D3B66] px-3 py-2 rounded-full text-sm font-medium break-words">
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section id="facilities" className="py-12 md:py-20 px-5 bg-gradient-to-br from-[#F8D4E3] to-[#87CEEB]" aria-labelledby="facilities-heading">
          <div className="px-5 sm:px-6 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-white rounded-full px-4 py-2 mb-4">
                <Shield size={16} className="text-[#0D3B66] mr-2" />
                <span className="text-sm font-bold text-[#0D3B66] tracking-wide">OUR FACILITIES</span>
              </div>
              <h2 id="facilities-heading" className="text-2xl md:text-3xl font-bold leading-tight text-gray-900 mb-4">State-of-the-Art Facilities</h2>
              <p className="text-base leading-relaxed text-gray-700 max-w-2xl mx-auto">
                All your medical needs met under one roof
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilitiesData.map((facility, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:-translate-y-1">
                  <div className={`w-14 h-14 bg-gradient-to-br ${facility.gradient} rounded-lg flex items-center justify-center mx-auto mb-4`}>
                    <facility.icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">{facility.title}</h3>
                  <p className="text-base leading-relaxed text-gray-700">
                    {facility.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
<section id="testimonials" className="py-12 md:py-20 px-5 bg-gradient-to-b from-white to-gray-50" aria-labelledby="testimonials-heading">
  <div className="px-5 sm:px-6 max-w-4xl mx-auto">
    <div className="text-center mb-12">
      <div className="inline-flex items-center bg-[#F8D4E3] rounded-full px-4 py-2 mb-4">
        <Star size={16} className="text-[#0D3B66] mr-2" />
        <span className="text-sm font-bold text-[#0D3B66] tracking-wide">TESTIMONIALS</span>
      </div>
      <h2 id="testimonials-heading" className="text-2xl md:text-3xl font-bold leading-tight text-gray-900 mb-4">What Our Patients Say</h2>
      <p className="text-base leading-relaxed text-gray-700 max-w-2xl mx-auto">
        Real stories from our satisfied patients
      </p>
    </div>

    <div className="bg-white rounded-lg shadow-xl p-6 relative">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#E8A3B9] to-[#F8D4E3] rounded-t-lg"></div>
      <div className="text-center">
        <div className="flex justify-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star 
              key={star} 
              size={20} 
              className="text-yellow-400 fill-current mx-1" 
            />
          ))}
        </div>
        
        <div className="min-h-[120px] mb-4">
          <p className="text-base leading-relaxed text-gray-800 italic">
            "{testimonials[activeTestimonial]?.text}"
          </p>
        </div>
        
        <div className="font-semibold text-gray-900 text-xl md:text-2xl mb-2">
          {testimonials[activeTestimonial]?.name}
        </div>
        <div className="text-sm leading-relaxed text-gray-600 mb-2">
          {testimonials[activeTestimonial]?.role}
        </div>
        <div className="text-xs leading-relaxed text-gray-500 mb-6">
          {testimonials[activeTestimonial]?.date}
        </div>
        
        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-[#E8A3B9] ${
                index === activeTestimonial 
                  ? 'bg-[#E8A3B9] w-6' 
                  : 'bg-gray-300 hover:bg-[#E8A3B9]'
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Blog Section */}
        <section id="blogs" className="py-12 md:py-20 px-5 bg-white" aria-labelledby="blogs-heading">
          <div className="px-5 sm:px-6 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-[#F8D4E3] rounded-full px-4 py-2 mb-4">
                <FileText size={16} className="text-[#0D3B66] mr-2" />
                <span className="text-sm font-bold text-[#0D3B66] tracking-wide">HEALTH BLOG</span>
              </div>
              <h2 id="blogs-heading" className="text-2xl md:text-3xl font-bold leading-tight text-gray-900 mb-4">Health & Wellness Insights</h2>
              <p className="text-base leading-relaxed text-gray-700 max-w-2xl mx-auto">
                Expert medical advice and comprehensive health guides from our specialist team
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPostsData.map((post) => (
                <article key={post.id} className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all border border-gray-100 hover:-translate-y-1 overflow-hidden group focus:outline-none focus:ring-2 focus:ring-[#E8A3B9]">
                  <div className="h-2 bg-gradient-to-r from-[#0D3B66] to-[#4A90E2]"></div>
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#0D3B66] to-[#4A90E2] rounded-lg flex items-center justify-center">
                        <post.icon size={20} className="text-[#E8A3B9]" />
                      </div>
                      <div className="ml-3">
                        <div className="text-sm font-semibold text-[#0D3B66]">{post.category}</div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar size={14} className="mr-1" />
                          {post.date}
                        </div>
                      </div>
                    </div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-3 group-hover:text-[#E8A3B9] transition-colors line-clamp-2 leading-tight break-words">
                      {post.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-700 mb-4 line-clamp-3 break-words">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock size={14} className="mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                      <button 
                        onClick={() => openBlog(post)}
                        className="text-[#0D3B66] hover:text-[#E8A3B9] font-medium text-sm flex items-center focus:outline-none focus:ring-2 focus:ring-[#E8A3B9] rounded px-2 py-1"
                        aria-label={`Read full article: ${post.title}`}
                      >
                        Read Full Article
                        <ExternalLink size={14} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-base leading-relaxed text-gray-700 mb-6">
                Looking for specific health information?
              </p>
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-[#0D3B66] to-[#4A90E2] text-white px-6 py-3 rounded-lg hover:from-[#E8A3B9] hover:to-[#F8D4E3] hover:text-[#0D3B66] transition-all font-medium text-base focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:ring-offset-2"
                aria-label="Consult our medical specialists"
              >
                Consult Our Specialists
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-20 px-5 bg-white" aria-labelledby="contact-heading">
          <div className="px-5 sm:px-6 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-[#F8D4E3] rounded-full px-4 py-2 mb-4">
                <Mail size={16} className="text-[#0D3B66] mr-2" />
                <span className="text-sm font-bold text-[#0D3B66] tracking-wide">CONTACT US</span>
              </div>
              <h2 id="contact-heading" className="text-2xl md:text-3xl font-bold leading-tight text-gray-900 mb-4">Get In Touch</h2>
              <p className="text-base leading-relaxed text-gray-700 max-w-2xl mx-auto">
                Ready to schedule your appointment? We're here to help.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-[#0D3B66] to-[#4A90E2] text-white rounded-lg p-6 shadow-xl">
                  <h3 className="text-xl md:text-2xl font-semibold leading-tight mb-6">Visit Our Clinic</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-[#E8A3B9] p-3 rounded-lg mr-4 flex-shrink-0">
                        <MapPin size={20} className="text-[#0D3B66]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base mb-2">Address</h4>
                        <p className="text-base opacity-90">Ponmar, Chennai</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#E8A3B9] p-3 rounded-lg mr-4 flex-shrink-0">
                        <Phone size={20} className="text-[#0D3B66]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base mb-2">Phone</h4>
                        <a href="tel:08200000000" className="hover:underline text-base opacity-90">
                          0820-0000000
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#E8A3B9] p-3 rounded-lg mr-4 flex-shrink-0">
                        <Mail size={20} className="text-[#0D3B66]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base mb-2">Email</h4>
                        <a href="mailto:contact@lotuspolyclinic.com" className="hover:underline text-base opacity-90 break-all">
                          contact@lotuspolyclinic.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#E8A3B9] p-3 rounded-lg mr-4 flex-shrink-0">
                        <Clock size={20} className="text-[#0D3B66]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base mb-2">Working Hours</h4>
                        <p className="text-base opacity-90">Monday - Sunday: 7:00 AM – 7:30 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <h4 className="font-semibold text-base mb-3 flex items-center">
                      <MessageCircle size={18} className="mr-2 text-[#E8A3B9]" />
                      Quick Booking via WhatsApp
                    </h4>
                    <a
                      href="https://wa.me/918200000000"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-green-500 text-white px-4 py-3 rounded-lg hover:bg-green-600 transition-all text-base focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
                      aria-label="Book appointment via WhatsApp"
                    >
                      <MessageCircle size={18} className="mr-2" />
                      Book via WhatsApp
                    </a>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                      <MapPin size={24} className="mr-3 text-[#E8A3B9]" />
                      Our Location
                    </h3>
                    <div className="rounded-lg overflow-hidden border border-gray-200 bg-gray-100 aspect-video">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15557.21526258401!2d80.1707662!3d12.8564248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525976fe0fccb3%3A0x4a8e9a8c87836ac7!2sPonmar%2C%20Chennai!5e0!3m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Lotus Polyclinic Location in Ponmar, Chennai"
                        className="w-full h-full"
                        aria-label="Interactive map showing Lotus Polyclinic location in Ponmar, Chennai"
                      ></iframe>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-xl p-6 border border-gray-200">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#0D3B66] to-[#4A90E2] rounded-lg flex items-center justify-center mr-4">
                      <Calendar size={20} className="text-[#E8A3B9]" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900">Book Appointment</h3>
                      <p className="text-sm leading-relaxed text-gray-600">Quick and easy scheduling</p>
                    </div>
                  </div>
                  
                  <form className="space-y-6" onSubmit={handleBookingSubmit} aria-labelledby="appointment-form">
                    <div className="mb-4">
                      <label htmlFor="fullName" className="block text-sm font-semibold text-gray-800 mb-3">Full Name *</label>
                      <input
                        id="fullName"
                        type="text"
                        placeholder="Your full name"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8A3B9] focus:border-[#E8A3B9] transition-all text-base focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-3">Phone Number *</label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="10-digit mobile"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8A3B9] focus:border-[#E8A3B9] transition-all text-base focus:outline-none"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-3">Email</label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8A3B9] focus:border-[#E8A3B9] transition-all text-base focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="date" className="block text-sm font-semibold text-gray-800 mb-3">Date *</label>
                        <input
                          id="date"
                          type="date"
                          required
                          value={formData.date}
                          onChange={handleInputChange}
                          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8A3B9] focus:border-[#E8A3B9] transition-all text-base focus:outline-none"
                        />
                      </div>
                      <div>
                        <label htmlFor="time" className="block text-sm font-semibold text-gray-800 mb-3">Time *</label>
                        <select
                          id="time"
                          required
                          value={formData.time}
                          onChange={handleInputChange}
                          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8A3B9] focus:border-[#E8A3B9] transition-all text-base bg-white focus:outline-none"
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

                    <div className="mb-4">
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-800 mb-3">Service Required *</label>
                      <select
                        id="service"
                        required
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8A3B9] focus:border-[#E8A3B9] transition-all text-base bg-white focus:outline-none"
                      >
                        <option value="">Select service</option>
                        <option value="Diabetology">Diabetology</option>
                        <option value="OB/GYN">OB/GYN</option>
                        <option value="General Medicine">General Medicine</option>
                        <option value="Dermatology">Dermatology</option>
                        <option value="Emergency">Emergency Care</option>
                        <option value="Health Checkup">Health Check-up</option>
                      </select>
                    </div>

                    <div className="mb-4">
                      <label htmlFor="notes" className="block text-sm font-semibold text-gray-800 mb-3">Additional Notes</label>
                      <textarea
                        id="notes"
                        placeholder="Any specific concerns..."
                        rows="4"
                        value={formData.notes}
                        onChange={handleInputChange}
                        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8A3B9] focus:border-[#E8A3B9] transition-all text-base resize-none focus:outline-none"
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#0D3B66] to-[#4A90E2] text-white py-4 rounded-lg font-medium hover:from-[#E8A3B9] hover:to-[#F8D4E3] hover:text-[#0D3B66] transition-all shadow-md hover:shadow-lg text-base flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-[#4A90E2] focus:ring-offset-2 mt-6"
                      aria-label="Submit appointment booking form"
                    >
                      <Calendar size={20} className="mr-2" />
                      BOOK APPOINTMENT
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#0D3B66] to-[#4A90E2] text-white py-12 px-5" role="contentinfo">
        <div className="px-5 sm:px-6 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">

                <div>
                  <div className="text-xl font-bold">LOTUS</div>
                  <div className="text-sm font-medium -mt-1 opacity-90">POLYCLINIC</div>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-6 opacity-90">
                "Caring beyond treatment" - Comprehensive healthcare provider committed to compassionate care.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-white/80 hover:text-[#E8A3B9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E8A3B9] rounded p-2" aria-label="WhatsApp">
                  <MessageCircle size={20} />
                </a>
                <a href="#" className="text-white/80 hover:text-[#E8A3B9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E8A3B9] rounded p-2" aria-label="Phone">
                  <Phone size={20} />
                </a>
                <a href="#" className="text-white/80 hover:text-[#E8A3B9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E8A3B9] rounded p-2" aria-label="Email">
                  <Mail size={20} />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-6">Quick Links</h4>
              <div className="space-y-3">
                {['home', 'about', 'services', 'facilities', 'blogs', 'testimonials', 'contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className="block text-white/80 hover:text-[#E8A3B9] transition-colors capitalize text-sm text-left focus:outline-none focus:ring-2 focus:ring-[#E8A3B9] rounded px-2 py-1"
                    aria-label={`Navigate to ${item} section`}
                  >
                    {item === 'about' ? 'About Us' : 
                     item === 'contact' ? 'Contact Us' : 
                     item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-6">Contact Info</h4>
              <div className="space-y-3 text-white/80 text-sm">
                <div className="flex items-start">
                  <MapPin size={18} className="mr-3 text-[#E8A3B9] mt-0.5 flex-shrink-0" />
                  <span>Ponmar, Chennai</span>
                </div>
                <div className="flex items-center">
                  <Phone size={18} className="mr-3 text-[#E8A3B9] flex-shrink-0" />
                  <span>0820-0000000</span>
                </div>
                <div className="flex items-start">
                  <Mail size={18} className="mr-3 text-[#E8A3B9] mt-0.5 flex-shrink-0" />
                  <span className="break-words">contact@lotuspolyclinic.com</span>
                </div>
                <div className="flex items-center">
                  <Clock size={18} className="mr-3 text-[#E8A3B9] flex-shrink-0" />
                  <span>Mon-Sun: 7AM - 7:30PM</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-6">Emergency</h4>
              <div className="space-y-3">
                <div className="text-[#E8A3B9] font-medium text-sm">24/7 Support Available</div>
                <a href="tel:08200000000" className="text-white/80 hover:text-[#E8A3B9] transition-colors block text-sm focus:outline-none focus:ring-2 focus:ring-[#E8A3B9] rounded px-2 py-1">
                  Emergency Helpline
                </a>
                <a href="https://wa.me/918200000000" className="text-white/80 hover:text-[#E8A3B9] transition-colors block text-sm focus:outline-none focus:ring-2 focus:ring-[#E8A3B9] rounded px-2 py-1">
                  WhatsApp Emergency
                </a>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-[#E8A3B9] text-[#0D3B66] px-4 py-3 rounded-lg hover:bg-[#F8D4E3] transition-all text-sm mt-4 focus:outline-none focus:ring-2 focus:ring-[#E8A3B9] focus:ring-offset-2 focus:ring-offset-[#0D3B66]"
                  aria-label="Book an appointment"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center mt-8">
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              © 2025 Lotus Polyclinic. All rights reserved. | Built on the foundation of Sri Sai Clinic
            </p>
            <button
              onClick={scrollToTop}
              className="text-white/70 hover:text-[#E8A3B9] transition-colors text-sm focus:outline-none focus:ring-2 focus:ring-[#E8A3B9] rounded px-2 py-1"
              aria-label="Scroll back to top of the page"
            >
              Back to Top ↑
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;