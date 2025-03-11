import React from 'react';
import userImage from '../logos/chose.png';


const WhyChooseUsScreen = () => {
  return (
    <div style={{ display: 'flex', height: '60vh' }}>
      {/* 15% Section */}
      <div style={{ flex: '15%', background: '#f0f0f0'  , display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', }}>
      <img 
          src={userImage}
          alt="Placeholder Image" 
          style={{ marginBottom: '20px', borderRadius: '10px' }}
        />
      </div>

      {/* 25% Section */}
      <div style={{ flex: '25%', background: '#e0e0e0',  display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center', }}>
      <h1 style={{ fontSize: '2rem', margin: '10px 0' }}>Why Choose Us?</h1>
      </div>

      {/* 60% Section */}
      <div style={{
        flex: '60%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#ffffff'
      }}>
        
        
        <p style={{ fontSize: '1.7rem', textAlign: 'center', maxWidth: '80%' }}>
          We offer the best solutions to help your business thrive. Our team of experts
          is dedicated to delivering innovative strategies tailored to your needs.
        </p>
      </div>
    </div>
  );
};

export default WhyChooseUsScreen;
