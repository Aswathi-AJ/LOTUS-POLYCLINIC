const config = {
  CLINIC_EMAIL: import.meta.env.VITE_CLINIC_EMAIL || 'lotuspolyclinicponmar@gmail.com',
  CLINIC_PHONE: import.meta.env.VITE_CLINIC_PHONE || '+91 9840398908',
  EMAILJS_PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'fbvyg37eAKP0zGmlQ',
  EMAILJS_SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_1eu8fp9',
  EMAILJS_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_g2icf7y',
  // Add VITE_ prefix to other environment variables as needed
};

export default config;