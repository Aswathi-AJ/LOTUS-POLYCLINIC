import emailjs from '@emailjs/browser';
import React, { useState, useEffect } from 'react';
import {
  Phone, Mail, MapPin, Clock, MessageCircle, Menu, X,
  Heart, Home, Info, Shield, Users, Star, Award,
  Calendar, ArrowRight, CheckCircle, Play, Stethoscope,
  Baby, Activity, Apple, Plus, FileText, ChevronRight,
  Eye, ArrowUp, ExternalLink, Sparkles, Leaf, Zap,
  Thermometer, Pill, Microscope, Scissors
} from 'lucide-react';

import config from './config';

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

  // ADD THIS LINE TO FIX THE ERROR
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


  // Add this state near your other state declarations
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Add this testimonials data array near your other data arrays
  const testimonialsData = [
    { id: 1, name: "Charles", file: "/Charles.png" },
    { id: 2, name: "Arunkumar", file: "/Arunkumar.png" },
    { id: 3, name: "Karthic", file: "/Karthic.png" },
    { id: 4, name: "Muthu", file: "/Muthu.png" },
    { id: 5, name: "Parinitha", file: "/Parinitha.png" },
    { id: 6, name: "Raja", file: "/Raja.png" },
    { id: 7, name: "Rajkumar", file: "/Rajkumar.png" },
    { id: 8, name: "Saravana", file: "/Saravana.png" },
    { id: 9, name: "Saravanan", file: "/Saravanan.png" },
    { id: 10, name: "selva", file: "/selva.png" },
    { id: 11, name: "Veenavani", file: "/Veenavani.png" },
    { id: 12, name: "venkatesh", file: "/venkatesh.png" }
  ];

  // Add these functions to handle navigation
  const goToNextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonialsData.length);
  };

  const goToPreviousTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleTestimonialClick = (index) => {
    setCurrentTestimonial(index);
  };

  // Optional: Auto-advance slideshow (add this useEffect)
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextTestimonial();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const isSunday = (dateString) => {
    if (!dateString) return false;
    const date = new Date(dateString);
    return date.getDay() === 0; // 0 is Sunday
  };

  const formatTimeForDisplay = (timeValue) => {
    if (!timeValue) return '';
    
    if (timeValue.includes('-')) {
      // Handle time range like "14:00-15:00"
      return timeValue.split('-').map(time => {
        const [hours, minutes] = time.split(':');
        const hour = parseInt(hours);
        const ampm = hour >= 12 ? 'PM' : 'AM';
        const displayHour = hour % 12 || 12;
        return `${displayHour}:${minutes} ${ampm}`;
      }).join(' - ');
    } else {
      // Handle single time like "14:00"
      const [hours, minutes] = timeValue.split(':');
      const hour = parseInt(hours);
      const ampm = hour >= 12 ? 'PM' : 'AM';
      const displayHour = hour % 12 || 12;
      return `${displayHour}:${minutes} ${ampm}`;
    }
  };

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
    let element;
    let extraOffset = 0;
    
    if (id === 'about') {
      element = document.getElementById('about-heading');
      extraOffset = 100;
    } else if (id === 'appointment') {
      // First, try to find the booking form directly
      element = document.querySelector('#contact .bg-white.rounded-lg.shadow-xl');
      
      // If not found, fallback to contact section
      if (!element) {
        element = document.getElementById('contact');
        extraOffset = 200; // Scroll further down to show the form
      } else {
        extraOffset = 50; // Less offset when targeting form directly
      }
    } else {
      element = document.getElementById(id);
    }
    
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight - extraOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    
    // If date is being changed and it's Sunday, clear the time if it's after 4 PM
    if (id === 'date') {
      const newDate = value;
      const currentlySelectedTime = formData.time;
      
      // If switching to Sunday and current time is after 4 PM, clear the time
      if (isSunday(newDate) && currentlySelectedTime) {
        const timeValue = currentlySelectedTime.split('-')[0]; // Get start time
        const hour = parseInt(timeValue.split(':')[0]);
        
        if (hour >= 16) { // 4 PM or later
          setFormData(prev => ({
            ...prev,
            [id]: value,
            time: '' // Clear time selection
          }));
          return;
        }
      }
    }
    
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    
    // Phone number validation (10 digits for India)
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      alert('Please enter a valid 10-digit Indian phone number starting with 6-9');
      return;
    }

    // Email validation (now required)
    if (!formData.email || !emailRegex.test(formData.email)) {
      alert('Please enter a valid email address with proper domain extension (e.g., name@gmail.com, name@yahoo.co.in, name@domain.org)');
      return;
    }
    
    try {
      const templateParams = {
        patient_name: formData.fullName,
        patient_phone: formData.phone,
        patient_email: formData.email,
        appointment_date: formData.date,
        appointment_time: formatTimeForDisplay(formData.time),
        service_type: formData.service,
        additional_notes: formData.notes || 'No additional notes',
        submitted_on: new Date().toLocaleString(),
        to_email: config.CLINIC_EMAIL
      };

      console.log('Sending booking email with params:', templateParams);
      console.log('Using EmailJS config:', {
        serviceId: config.EMAILJS_SERVICE_ID,
        templateId: config.EMAILJS_TEMPLATE_ID,
        publicKey: config.EMAILJS_PUBLIC_KEY
      });

      // Send email using EmailJS
      const result = await emailjs.send(
        config.EMAILJS_SERVICE_ID,
        config.EMAILJS_TEMPLATE_ID,
        templateParams,
        config.EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);

      if (result.text === 'OK') {
        setShowBookingSuccess(true);
        setFormData({
          fullName: '', phone: '', email: '', date: '', time: '', service: '', notes: ''
        });
        setTimeout(() => setShowBookingSuccess(false), 5000);
      }
    } catch (error) {
      console.error('Failed to send email:', error);
      
      // Fallback with proper time formatting
      const subject = `Appointment Booking Request - ${formData.fullName}`;
      const body = `
NEW APPOINTMENT REQUEST - LOTUS POLYCLINIC

Patient Information:
──────────────────
👤 Name: ${formData.fullName}
📞 Phone: ${formData.phone}
📧 Email: ${formData.email}

Appointment Details:
──────────────────
📅 Preferred Date: ${formData.date}
⏰ Preferred Time: ${formatTimeForDisplay(formData.time)}
🏥 Service Required: ${formData.service}

Additional Notes:
${formData.notes || 'No additional notes provided'}

📋 Submitted on: ${new Date().toLocaleString()}

───
This appointment request was submitted through the Lotus Polyclinic website.
Please contact the patient to confirm the appointment.
`.trim();

      // Open user's default email client
      const mailtoLink = `mailto:${config.CLINIC_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoLink, '_blank');

      // Show success message
      setShowBookingSuccess(true);
      setFormData({
        fullName: '', phone: '', email: '', date: '', time: '', service: '', notes: ''
      });
      setTimeout(() => setShowBookingSuccess(false), 5000);
    }
  };

  // Function to open blog in new window
  const openBlogInNewWindow = (blog) => {
    const blogHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${blog.title} - Lotus Polyclinic</title>
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
        <style>
          body { font-family: 'Inter', sans-serif; }
          .prose h1 { font-size: 2.25rem; font-weight: 700; margin-bottom: 1rem; color: #1f2937; }
          .prose h2 { font-size: 1.875rem; font-weight: 600; margin-bottom: 0.75rem; color: #1f2937; }
          .prose h3 { font-size: 1.5rem; font-weight: 600; margin-bottom: 0.75rem; color: #1f2937; }
          .prose p { margin-bottom: 1rem; color: #374151; line-height: 1.6; }
          .prose ul { margin-bottom: 1rem; padding-left: 1.5rem; }
          .prose li { margin-bottom: 0.5rem; color: #374151; }
          .prose strong { color: #1f2937; font-weight: 600; }
        </style>
      </head>
      <body class="bg-gray-50 min-h-screen">
        <div class="max-w-4xl mx-auto bg-white min-h-screen">
          <!-- Header -->
          <header class="bg-gradient-to-br from-[#0D3B66] to-[#4A90E2] text-white py-6 px-6">
            <div class="flex items-center justify-between">
              <div>
                <h1 class="text-2xl font-bold">LOTUS POLYCLINIC</h1>
                <p class="text-white/80 text-sm">Health & Wellness Blog</p>
              </div>
              <button onclick="window.close()" class="text-white/80 hover:text-white bg-white/20 px-4 py-2 rounded-lg transition-colors">
                Close
              </button>
            </div>
          </header>

          <!-- Blog Content -->
          <main class="p-6">
            <div class="mb-6">
              <div class="flex items-center mb-4">
                <div class="bg-[#F8D4E3] rounded-full px-3 py-1">
                  <span class="text-sm font-bold text-[#0D3B66]">${blog.category}</span>
                </div>
                <span class="ml-3 text-sm text-gray-600">${blog.date}</span>
              </div>
              
              <div class="flex items-center mb-6 p-4 bg-gray-50 rounded-lg">
                <div class="w-12 h-12 bg-gradient-to-br from-[#0D3B66] to-[#4A90E2] rounded-lg flex items-center justify-center mr-4">
                  <span style="color: #E8A3B9; font-size: 24px;">●</span>
                </div>
                <div>
                  <div class="font-semibold text-gray-900 text-base">${blog.author}</div>
                  <div class="text-sm text-gray-600">${blog.authorRole}</div>
                  <div class="flex items-center text-sm text-gray-600 mt-1">
                    <span>${blog.readTime}</span>
                  </div>
                </div>
              </div>

              <h1 class="text-3xl font-bold text-gray-900 mb-6 leading-tight">${blog.title}</h1>
              <p class="text-lg text-gray-700 mb-8 leading-relaxed">${blog.excerpt}</p>
            </div>

            <article class="prose prose-lg max-w-none">
              ${blog.content}
            </article>

            <div class="mt-8 pt-6 border-t border-gray-200">
              <button onclick="window.close()" class="bg-gradient-to-r from-[#0D3B66] to-[#4A90E2] text-white px-6 py-3 rounded-lg hover:from-[#E8A3B9] hover:to-[#F8D4E3] hover:text-[#0D3B66] transition-all font-medium">
                Close Article
              </button>
            </div>
          </main>
        </div>
      </body>
      </html>
    `;

    const blogWindow = window.open('', '_blank', 'width=800,height=900,scrollbars=yes');
    blogWindow.document.write(blogHTML);
    blogWindow.document.close();
  };

  const testimonials = [
    {
      name: "CHARLES C L",
      date: "2 months ago",
      text: "Was very happy with the service and the results got. Very clean clinic, staff are very professional. Would definitely recommend for very economical treatment.",
      rating: 5,
      role: "Local Guide · 94 reviews · 84 photos",
      image: "Charles.png" // Add this line
    },
    {
      name: "Arun Kumar",
      date: "4 years ago", 
      text: "Had issue with my sugar level and had been referred by my colleague to Sri Sai Clinic. The treatment was good. I strongly recommend to visit the clinic for diabetes related issues.",
      rating: 5,
      role: "4 reviews",
      image: "Arun.png" // Add this line
    }
  ];

  const stats = [
    { number: "5000+", label: "Patients Treated", icon: Users },
    { number: "16+", label: "Years Experience", icon: Award },
    { number: "95%", label: " Primary Care ", icon: Clock },
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
      title: "Primary Care",
      description: "Complete family healthcare for all ages, from children to seniors, with personalized medical attention.",
      gradient: "from-[#0D3B66] to-[#4A90E2]"
    },
    {
      icon: Shield,
      title: " Day Care ",
      description: "Comfortable medical day care for procedures that require several hours of monitoring and recovery.",
      gradient: "from-[#E8A3B9] to-[#F8D4E3]"
    },
    {
      icon: Pill,
      title: " Pharmacy",
      description: "Well-stocked on-site pharmacy providing immediate access to prescribed medications during clinic hours.",
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
      filePath: "/blog-diabetes.html"  // Add this line
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
      filePath: "/blog-prenatal.html"  // Add this line
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
      filePath: "/blog-preventive.html"  // Add this line
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

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
      
      {/* ADD THIS LINE FOR BROWSER TAB FAVICON */}
      <link rel="icon" type="image/png" href="/favicon.png" />
      
      {/* Booking Success Message */}
      {showBookingSuccess && <BookingSuccessMessage />}

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
     
      {/* Floating WhatsApp Button - api.whatsapp.com */}
      <a
        href={`https://api.whatsapp.com/send?phone=${config.CLINIC_PHONE.replace(/\D/g, '')}&text=Hello%20Lotus%20Polyclinic%2C%20I%20want%20to%20book%20an%20appointment`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        aria-label="Contact us on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>

      {/* Header */}
      <header className={`fixed w-full top-0 z-40 bg-white shadow-md border-b border-gray-200 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-4'}`}>
        <div className="px-5 sm:px-6 max-w-7xl mx-auto flex justify-between items-center">
          <button 
            onClick={() => scrollToSection('home')} 
            className="flex items-center rounded-lg focus:outline-none"
            aria-label="Lotus Polyclinic Home"
          >
            {/* Logo with Image from Public Folder - Large Size */}
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="Lotus Polyclinic Logo" 
                className="w-20 h-20 md:w-24 md:h-24 object-contain"
              />
            </div>
          </button>

          <nav className="hidden lg:flex items-center space-x-3" aria-label="Main navigation">
            {[
              { id: 'home', label: 'Home', icon: Home },
              { id: 'about', label: 'About', icon: Info },
              { id: 'services', label: 'Services', icon: Stethoscope },
              { id: 'facilities', label: 'Facilities', icon: Shield },
              { id: 'testimonials', label: 'Testimonials', icon: Star },
              { id: 'blogs', label: 'Blog', icon: FileText },
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
              onClick={() => scrollToSection('appointment')}
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
                onClick={() => scrollToSection('appointment')}
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
                onClick={() => scrollToSection('appointment')}
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
            
            {/* NEW: Clean Announcement Banner */}
            <div className="text-center mb-12">
              {/* Announcement Heading */}
              <div className="inline-flex items-center bg-[#F8D4E3] rounded-full px-4 py-2 mb-4 border border-[#E8A3B9]">
                <Sparkles size={16} className="text-[#0D3B66] mr-2" />
                <span className="text-sm font-bold text-[#0D3B66] tracking-wide">ANNOUNCEMENT</span>
              </div>
              
              {/* Banner Image Only */}
              <div>
                <img 
                  src="/banner.png" 
                  alt="Sri Sai Clinic is now Lotus Polyclinic - Coming Soon"
                  className="mx-auto rounded-lg shadow-lg"
                  style={{ maxWidth: '400px', width: '100%', height: 'auto' }}
                />
              </div>
            </div>

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
                
                <div className="bg-white rounded-lg p-6 border border-gray-200 shadow-sm flex items-start gap-4">
                  {/* Replaced Users icon with precisely cropped round profile image */}
                  <img 
                    src="/face_4.jpg" 
                    alt="Dr. Meena - Founder of Lotus Polyclinic"
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#E8A3B9] flex-shrink-0"
                  />
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
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
              </div>

              <div className="mt-8 lg:mt-0 space-y-6">
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
                
                {/* New face_1.jpg image matching Mission & Vision card size */}
                <img 
                  src="/face_1.jpg" 
                  alt="Lotus Polyclinic Healthcare Team"
                  className="w-full h-64 object-cover rounded-lg shadow-lg border-2 border-[#F8D4E3]"
                />
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

            {/* New face_2.png image in Services section */}
            <div className="flex justify-center mb-12">
              <img 
                src="/face_2.png" 
                alt="Advanced Medical Services at Lotus Polyclinic"
                className="w-full max-w-2xl h-64 object-cover rounded-xl shadow-lg border-2 border-[#F8D4E3]"
              />
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

        {/* Clinic Gallery Collage - Add this after Core Values section */}
<section className="py-12 md:py-16 px-5 bg-white" aria-labelledby="gallery-heading">
  
</section>

        {/* Testimonials Section - Fixed Height Card */}
        <section id="testimonials" className="py-12 md:py-20 px-5 bg-gradient-to-b from-white to-gray-50" aria-labelledby="testimonials-heading">
          <div className="px-5 sm:px-6 max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center bg-[#F8D4E3] rounded-full px-4 py-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#0D3B66] mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-sm font-bold text-[#0D3B66] tracking-wide">TESTIMONIALS</span>
              </div>
              <h2 id="testimonials-heading" className="text-2xl md:text-3xl font-bold leading-tight text-gray-900 mb-4">What Our Patients Say</h2>
              <p className="text-base leading-relaxed text-gray-700 max-w-2xl mx-auto">
                Real stories from our satisfied patients
              </p>
            </div>

            {/* Fixed Height Card Container */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-[#F8D4E3] p-4 md:p-6 min-h-[500px] flex flex-col">
              <div className="flex flex-col lg:flex-row items-start gap-6 flex-1">
                {/* Main Image - Fixed Height Container */}
                <div className="flex-1 w-full">
                  <img 
                    src={testimonialsData[currentTestimonial].file}
                    alt={`${testimonialsData[currentTestimonial].name} testimonial`}
                    className="w-full h-full object-contain max-h-72"
                  />
                </div>
              </div>

              {/* Compact Navigation Controls */}
              <div className="flex flex-col sm:flex-row items-center justify-between mt-6 pt-4 border-t border-gray-200 gap-3">
                <button 
                  onClick={goToPreviousTestimonial}
                  className="flex items-center text-[#0D3B66] hover:text-[#E8A3B9] transition-colors font-medium px-3 py-2 rounded-lg hover:bg-gray-50 text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Previous
                </button>
                <div className="flex items-center space-x-3">
                  <span className="text-xs font-medium text-gray-600">
                    <span className="text-[#0D3B66] font-bold">{currentTestimonial + 1}</span> / <span className="text-gray-800 font-bold">{testimonialsData.length}</span>
                  </span>
                  <div className="flex space-x-1">
                    {testimonialsData.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handleTestimonialClick(index)}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${
                          index === currentTestimonial ? 'bg-[#0D3B66] scale-125' : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to review ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>

                <button 
                  onClick={goToNextTestimonial}
                  className="flex items-center text-[#0D3B66] hover:text-[#E8A3B9] transition-colors font-medium px-3 py-2 rounded-lg hover:bg-gray-50 text-sm"
                >
                  Next
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
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
                      <a 
                        href={post.filePath}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#0D3B66] hover:text-[#E8A3B9] font-medium text-sm flex items-center focus:outline-none focus:ring-2 focus:ring-[#E8A3B9] rounded px-2 py-1"
                        aria-label={`Read full article: ${post.title} (opens in new tab)`}
                      >
                        Read Full Article
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
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
                        <p className="text-base opacity-90">No 1/285, ASM Complex, Vedhagiri Nagar,Ponmar,<br /> Chennai - 600127</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#E8A3B9] p-3 rounded-lg mr-4 flex-shrink-0">
                        <Phone size={20} className="text-[#0D3B66]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base mb-2">Phone</h4>
                        <a href={`tel:${config.CLINIC_PHONE}`} className="hover:underline text-base opacity-90">
                          {config.CLINIC_PHONE}
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#E8A3B9] p-3 rounded-lg mr-4 flex-shrink-0">
                        <Mail size={20} className="text-[#0D3B66]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base mb-2">Email</h4>
                        <a 
                          href={`https://mail.google.com/mail/?view=cm&to=${config.CLINIC_EMAIL}&su=Appointment%20Inquiry%20-%20Lotus%20Polyclinic&body=Hello%20Lotus%20Polyclinic,%0A%0AI%20would%20like%20to%20inquire%20about%20an%20appointment%20or%20get%20more%20information%20about%20your%20services.%0A%0AThank%20you.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline text-base opacity-90 break-all block"
                        >
                          {config.CLINIC_EMAIL}
                        </a>
                        <span className="text-sm text-white/70 mt-1 block">
                          
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[#E8A3B9] p-3 rounded-lg mr-4 flex-shrink-0">
                        <Clock size={20} className="text-[#0D3B66]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-base mb-2">Working Hours</h4>
                        <p className="text-base opacity-90">Monday - Saturday: 9:00 AM – 9:00 PM</p>
                        <p className="text-base opacity-90">Sunday: 9:00 AM – 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                  <div className="p-6">
                    <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                      <div className="p-6">
                        <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                          <MapPin size={24} className="mr-3 text-[#E8A3B9]" />
                          Our Location
                        </h3>
                        
                        {/* Embedded Map with Red Pin - No "View larger map" option */}
                        <div className="relative rounded-lg overflow-hidden border border-gray-200 bg-gray-100 aspect-video mb-4">
                          <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.207359106582!2d80.1759338!3d12.8669939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUyJzAxLjIiTiA4MMKwMTAnMzMuNCJF!5e0!3m2!1sen!2sin!4v1733400000000&markers=color:red%7Csize:large%7C12.8669939,80.1759338&zoom=19&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Lotus Polyclinic Location in Ponmar, Chennai"
                            className="w-full h-full"
                          />
                        </div>
                        
                        {/* Custom Google Maps Link */}
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=12.8669939,80.1759338"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center bg-gradient-to-r from-[#0D3B66] to-[#4A90E2] text-white px-4 py-3 rounded-lg hover:from-[#E8A3B9] hover:to-[#F8D4E3] hover:text-[#0D3B66] transition-all font-medium"
                        >
                          <MapPin size={16} className="mr-2" />
                          Open in Google Maps with location pin
                        </a>
                      </div>
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
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-3">
                          Phone Number *
                          <span className="text-xs text-gray-600 ml-2"></span>
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="Enter 10-digit mobile number"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          pattern="[6-9]\d{9}"
                          title="Please enter a valid 10-digit Indian phone number starting with 6,7,8,9"
                          maxLength="10"
                          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8A3B9] focus:border-[#E8A3B9] transition-all text-base focus:outline-none"
                        />
                        {formData.phone && !/^[6-9]\d{9}$/.test(formData.phone) && (
                          <p className="text-red-500 text-xs mt-1">
                            Please enter a valid 10-digit number starting with 6-9
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-3">
                          Email *
                          <span className="text-xs text-gray-600 ml-2"></span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="your.email@example.com"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E8A3B9] focus:border-[#E8A3B9] transition-all text-base focus:outline-none"
                        />
                        {formData.email && !emailRegex.test(formData.email) && (
                          <p className="text-red-500 text-xs mt-1">
                            Please enter a valid email address
                          </p>
                        )}
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
                          <option value="09:00-10:00">9:00 AM - 10:00 AM</option>
                          <option value="10:00-11:00">10:00 AM - 11:00 AM</option>
                          <option value="11:00-12:00">11:00 AM - 12:00 PM</option>
                          <option value="12:00-13:00">12:00 PM - 1:00 PM</option>
                          <option value="13:00-14:00">1:00 PM - 2:00 PM</option>
                          <option value="14:00-15:00">2:00 PM - 3:00 PM</option>
                          <option value="15:00-16:00">3:00 PM - 4:00 PM</option>
                          
                          {/* Show these slots only if NOT Sunday */}
                          {!isSunday(formData.date) && (
                            <>
                              <option value="16:00-17:00">4:00 PM - 5:00 PM</option>
                              <option value="17:00-18:00">5:00 PM - 6:00 PM</option>
                              <option value="18:00-19:00">6:00 PM - 7:00 PM</option>
                              <option value="19:00-20:00">7:00 PM - 8:00 PM</option>
                              <option value="20:00-21:00">8:00 PM - 9:00 PM</option>
                            </>
                          )}
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
                <a 
                  href={`tel:${config.CLINIC_PHONE || '+91 9840398908'}`}
                  className="text-white/80 hover:text-[#E8A3B9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E8A3B9] rounded p-2"
                  aria-label="Call us"
                >
                  <Phone size={20} />
                </a>
                <a 
                  href={`https://mail.google.com/mail/?view=cm&to=${config.CLINIC_EMAIL}&su=Appointment%20Inquiry%20-%20Lotus%20Polyclinic&body=Hello%20Lotus%20Polyclinic,%0A%0AI%20would%20like%20to%20inquire%20about%20an%20appointment%20or%20get%20more%20information%20about%20your%20services.%0A%0AThank%20you.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-[#E8A3B9] transition-colors focus:outline-none focus:ring-2 focus:ring-[#E8A3B9] rounded p-2"
                  aria-label="Email us via Gmail"
                >
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
                  <span>No 1/285, ASM Complex, <br /> Vedhagiri Nagar,Ponmar,<br />  Chennai - 600127</span>
                </div>
                <div className="flex items-center">
                  <Phone size={18} className="mr-3 text-[#E8A3B9] flex-shrink-0" />
                  <a 
                    href={`tel:${config.CLINIC_PHONE || '+91 9840398908'}`}
                    className="hover:text-[#E8A3B9] transition-colors hover:underline"
                  >
                    {config.CLINIC_PHONE}
                  </a>
                </div>
                <div className="flex items-start">
                  <Mail size={18} className="mr-3 text-[#E8A3B9] mt-0.5 flex-shrink-0" />
                  <div>
                    <a 
                      href={`https://mail.google.com/mail/?view=cm&to=${config.CLINIC_EMAIL}&su=Appointment%20Inquiry%20-%20Lotus%20Polyclinic&body=Hello%20Lotus%20Polyclinic,%0A%0AI%20would%20like%20to%20inquire%20about%20an%20appointment%20or%20get%20more%20information%20about%20your%20services.%0A%0AThank%20you.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#E8A3B9] transition-colors hover:underline break-words text-sm block mb-1"
                    >
                      {config.CLINIC_EMAIL}
                    </a>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock size={18} className="mr-3 text-[#E8A3B9] flex-shrink-0" />
                  <span>Mon-Sat: 9AM - 9PM <br />Sun: 9AM - 4PM</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-6">Emergency</h4>
              <div className="space-y-3">
                <div className="text-[#E8A3B9] font-medium text-sm"> Support Available</div>
                <a 
                  href={`tel:${config.CLINIC_PHONE || '+91 9840398908'}`}
                  className="text-white/80 hover:text-[#E8A3B9] transition-colors hover:underline block text-sm focus:outline-none focus:ring-2 focus:ring-[#E8A3B9] rounded px-2 py-1"
                >
                  Day Care Helpline
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center mt-8">
            <p className="text-white/80 text-sm leading-relaxed mb-4">
              © 2025 Lotus Polyclinic. | Built on the foundation of Sri Sai Clinic
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