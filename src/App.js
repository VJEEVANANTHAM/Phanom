import React from 'react';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Footer from './Components/Footer';
import ImageSlider from './Components/ImageSlider';
import Card from './Components/Card';
import SplitScreen from './Components/SplitScreen';
import SplitScreenWithDividers from './Components/SplitScreenWithDividers';
import BlogSection from './Components/BlogSection';
import UserStories from './Components/UserStories';
import WhyChooseUsScreen from './Components/WhyChooseUsScreen';
import MissionSection from './Components/MissionSection';
import SubscribeSection from './Components/SubscribeSection';
const LandingPage = () => {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
  };
  const [showPopup, setShowPopup] = useState(false); 
  const menuOptions = [
    {
      title: 'Digital Marketing',
      submenus: ['SEO (Search Engine Optimisation)', 'Social Media Marketing', 'Pay Per Click (PPC)','Youtube Marketing'],
    },
    {
      title: 'Design & Development',
      submenus: ['Web Development', 'Shopify','Java','Magento','Wordpress','PHP'],
    },
    {
      title: 'Animations & Graphics',
      submenus: ['Video Marketing', 'Branding', 'Packaging & Labeling', 'Graphic Design', 'Web Design','Rotoscoping','Animation'],
    },
    {
      title: 'E-commerce solution',
      submenus: ['E-Commerce Marketing', 'Amazon Marketing'],
    },
  ];
  return (
    <div 
    >
    
    <nav 
  style={{ 
    position: 'fixed', 
    top: 0, 
    left: 0, 
    right: 0, 
    background: '#ffffff', 
    padding: '20px 90px', 
    zIndex: 100, 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' // Adds a subtle shadow
  }}
>
  <img 
    src={require('./logos/logo.png')} 
    alt="Phanom Professionals Logo" 
    style={{ height: '50px', cursor: 'pointer' }} 
  />

  <div 
    style={{ 
      display: 'flex', 
      alignItems: 'center', 
      gap: '30px' // More spacing between items
    }}
  >
    
      <div 
        style={{ position: 'relative' }}
        onMouseEnter={() => setShowPopup(true)}
        onMouseLeave={() => setShowPopup(false)}
      >
        <button 
        style={{ 
          color: '#000000', 
          background: 'transparent', 
          border: 'none', 
          cursor: 'pointer', 
          fontSize: '1.2rem', 
          fontWeight: '400', 
          display: 'flex', 
          alignItems: 'center' 
        }}
        >
        Services 
        </button>

        {showPopup && (
        <div
          style={{
          position: 'absolute',
          top: '100%',
          left: '10%',
          background: '#fff',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)',
          zIndex: 200,
          display: 'flex',
          justifyContent: 'space-between',
          whiteSpace: 'nowrap',
          overflowX: 'auto',
          }}
        >
          {menuOptions.map((option, index) => (
          <div key={index} style={{ textAlign: 'center', margin: '0 20px' }}>
            <h3 style={{ color: '#9b51e0', marginBottom: '10px', fontSize: '1.1rem' }}>{option.title}</h3>
            {option.submenus.map((submenu, subIndex) => (
            <p key={subIndex} style={{ color: '#333', margin: '5px 0', cursor: 'pointer', fontSize: '1rem' }}>
              {submenu}
            </p>
            ))}
          </div>
          ))}
        </div>
        )}
      </div>

      {/* Navigation Links */}
    <button 
      onClick={() => scrollToSection('hire-indian-talent')} 
      style={{ 
        color: '#000000', 
        background: 'transparent', 
        border: 'none', 
        cursor: 'pointer', 
        fontSize: '1.2rem', 
        fontWeight: '400' 
      }}
    >
      Hire Indian Talent
    </button>

    <button 
      onClick={() => scrollToSection('footer')} 
      style={{ 
        color: '#000000', 
        background: 'transparent', 
        border: 'none', 
        cursor: 'pointer', 
        fontSize: '1.2rem', 
        fontWeight: '400' 
      }}
    >
      Contact
    </button>

    <button 
      onClick={() => scrollToSection('our-portfolio')} 
      style={{ 
        color: '#000000', 
        background: 'transparent', 
        border: 'none', 
        cursor: 'pointer', 
        fontSize: '1.2rem', 
        fontWeight: '400' 
      }}
    >
      Our Portfolio
    </button>

    <button 
      onClick={() => scrollToSection('case-study')} 
      style={{ 
        color: '#000000', 
        background: 'transparent', 
        border: 'none', 
        cursor: 'pointer', 
        fontSize: '1.2rem', 
        fontWeight: '400' 
      }}
    >
      Case Study
    </button>

    {/* Appointment Button */}
    <button 
      onClick={() => scrollToSection('appointment')} 
      style={{ 
        color: '#fff', 
        background: '#9b51e0', 
        border: 'none', 
        borderRadius: '20px', 
        padding: '10px 25px', 
        cursor: 'pointer', 
        fontSize: '1.2rem', 
        fontWeight: '400', 
        boxShadow: '0 2px 10px rgba(155, 81, 224, 0.3)' 
      }}
    >
      Book an Appointment
    </button>
  </div>
</nav>

    <div style={{ 
      minHeight: '80vh', 
      fontFamily: 'Poppins, sans-serif', 
      fontWeight: 'bold',
    }}>
      <header id="header" style={{ textAlign: 'center', padding: '120px 20px 60px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ flex: 1, paddingRight: '20px' }}>
            <motion.h1 
              style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#333' }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Let’s <span style={{ color: '#9b51e0' }}>innovation</span> meet your excellence
            </motion.h1>
            <motion.p 
              style={{ marginTop: '20px', fontSize: '1.2rem', color: '#555' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Excellence refined, innovation ignited, the future starts here
            </motion.p>
            <motion.button
              style={{ marginTop: '30px', padding: '10px 20px', background: '#9b51e0', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '1rem' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Book an Appointment
            </motion.button>
          </div>
          <div style={{ flex: 1, textAlign: 'center' }}>
            <img src={require('./logos/SEO.png')} alt="Your Image" style={{ maxWidth: '100%', height: 'auto' }} />
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-around' }}>
              
            <span style={{  color: '#ffffff', padding: '10px 20px', borderRadius: '5px' }}>
  <span style={{ fontSize: '3rem' }}>24/7</span><br />
  <span style={{ fontSize: '1rem' }}>Support</span>
</span>
<span style={{ color: '#ffffff', padding: '10px 20px', borderRadius: '5px' }}>
  <span style={{ fontSize: '3rem' }}>100+</span><br />
  <span style={{ fontSize: '1rem' }}>WebDeveloped&Applications</span>
</span><span style={{ color: '#ffffff', padding: '10px 20px', borderRadius: '5px' }}>
  <span style={{ fontSize: '3rem' }}>5+</span><br />
  <span style={{ fontSize: '1rem' }}>Years of Experience</span>
</span>
             
            </div>
          </div>
        </div>
       
      </header>
      <ImageSlider />
      <Card />
      <SplitScreen />
      <SplitScreenWithDividers />
      <WhyChooseUsScreen />
      <SubscribeSection />
      <MissionSection />
      <UserStories />
      <BlogSection />
      <Footer />
</div>
     </div>

    
  );
};

export default LandingPage;
