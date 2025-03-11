import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        background: 'linear-gradient(180deg,rgb(29, 29, 41), #2b2b63)',
        color: '#fff',
        padding: '2rem 3rem',
        textAlign: 'center',
      }}
    >
        <h1>Let's make something great together.</h1>

       <h2> Let us know what challenges you are trying to solve so we can help.</h2>
      <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
        
        <div style={{ maxWidth: '300px' }}>
          <img src={require('../logos/footerlogo.png')} alt="Phanom Professionals Logo" style={{ height: '100px' }} />
          <p>INNOVATE CREATE DOMINATE</p>
        </div>

        <div>
          <h3>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>Home</li>
            <li>Services</li>
            <li>Hire Indian Talent</li>
            <li>Our Portfolio</li>
            <li>Book an Appointment</li>
          </ul>
        </div>

        <div>
          <h3>Social</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
            <li>Pinterest</li>
            <li>Twitter</li>
          </ul>
        </div>

        <div>
          <h3>Address:</h3>
          <p>
            E-193, Third Floor, TDS Tower, Phase 8B, Industrial Area, Sector 74,<br />
            Sahibzada Ajit Singh Nagar, Punjab 160055
          </p>
        </div>
      </div>

      <hr style={{ margin: '2rem 0', borderColor: '#ffffff33' }} />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <p>Terms of Use | Privacy Policy | About Cookies</p>
          <p>Copyright © 2025 Phanom Techno Private Ltd. All rights reserved.</p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            style={{
              background: '#9b51e0',
              color: '#fff',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '5px',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            📞 Call to ask any question
          </button>
          <p style={{ fontWeight: 'bold' }}>+91 (628) 007-2655</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
