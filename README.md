# 🏥 Lotus Polyclinic - Healthcare Excellence

A modern, responsive healthcare website for Lotus Polyclinic, Ponmar. Built with React and designed to provide an exceptional user experience for patients seeking quality medical care.

## ✨ Features

- **Modern UI/UX** - Beautiful gradient designs with smooth animations and transitions
- **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- **Service Showcase** - Comprehensive display of medical services including:
  - Diabetology
  - Obstetrics & Gynecology
  - General Medicine
  - Dermatology
  - Visiting Specialists
  - Wellness Services
- **Doctor Profiles** - Detailed information about medical specialists
- **Patient Testimonials** - Auto-rotating testimonial carousel
- **Appointment Booking** - Interactive form for scheduling appointments
- **WhatsApp Integration** - Quick contact via floating WhatsApp button
- **Smooth Navigation** - Scroll-to-section navigation with fixed header
- **Contact Information** - Complete clinic details with location map placeholder

## 🚀 Technology Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icon library
- **React Router DOM** - Client-side routing
- **Google Fonts** - Montserrat & Lora typography

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn** package manager

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd lotus-polyclinic
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Add logo file**
   - Place your `logo.png` file in the `public` folder

## 🏃 Running the Application

### Development Mode
Start the development server with hot module replacement:
```bash
npm run dev
```
The application will be available at `http://localhost:5173`

### Production Build
Create an optimized production build:
```bash
npm run build
```

### Preview Production Build
Preview the production build locally:
```bash
npm run preview
```

### Linting
Run ESLint to check code quality:
```bash
npm run lint
```

## 📁 Project Structure

```
lotus-polyclinic/
├── public/
│   └── logo.png            # Clinic logo
|   └── favicon.png
|   └── banner.png
|   └── Charles.png        # Review of clinic
|   └── Arun.png           # Review of clinic
├── src/
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # Application entry point
│   └── index.css             # Global styles and Tailwind imports
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── tailwind.config.js        # Tailwind CSS configuration
├── vite.config.js            # Vite configuration
└── README.md                 # Project documentation
```

## 🎨 Color Palette

- **Primary Blue**: `#0D3B66` - Trust and professionalism
- **Secondary Blue**: `#4A90E2` - Modern healthcare
- **Pink**: `#E8A3B9` - Compassion and care
- **Light Pink**: `#F5CEDD` - Warmth and comfort
- **White**: `#FFFFFF` - Cleanliness and clarity

## 📝 Customization

### Update Contact Information
Edit the following in `src/App.jsx`:
- **Address**: Line 656
- **Phone**: Lines 667, 861
- **Email**: Lines 679, 862
- **WhatsApp**: Lines 159, 703, 874

### Modify Services
Update the `services` array (lines 108-145) in `src/App.jsx`

### Change Testimonials
Edit the `testimonials` array (lines 57-73) in `src/App.jsx`

### Update Doctor Information
Modify the doctor profile sections (lines 496-569) in `src/App.jsx`

## 🌐 Deployment

This project can be deployed to various platforms:

- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use `gh-pages` package
- **Any static hosting**: Upload the `dist` folder contents

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved by Lotus Polyclinic.

## 📞 Support

For any questions or support, please contact:
- **Email**: lotuspolyclinicponmar.com
- **Phone**: 9840398908
- **WhatsApp**: +91 9840398908

---

**Built with ❤️ for Lotus Polyclinic, Ponamr**
