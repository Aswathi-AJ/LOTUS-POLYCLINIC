const config = {
  CLINIC_EMAIL: import.meta.env.VITE_CLINIC_EMAIL || 'lotuspolyclinic@gmail.com',
  CLINIC_PHONE: import.meta.env.VITE_CLINIC_PHONE || '+91 9840398908',
  EMAILJS_PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '7hytwlaS_99jy7O5o',
  EMAILJS_SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_u0dyx6e',
  EMAILJS_TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_6rr7ecb',
  // Add VITE_ prefix to other environment variables as needed
};

export default config;