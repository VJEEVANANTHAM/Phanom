import React from 'react';

const SplitScreen = () => {
  return (
    <div style={{ 
      display: 'flex', 
      height: '80vh', 
      fontFamily: 'Poppins, sans-serif',
      background: 'linear-gradient(to right, rgb(242, 195, 229), rgb(183, 192, 204))', // Full-screen background
      padding: '20px', 
      boxSizing: 'border-box'   
    }}>
      
      {/* Left Side */}
      <div style={{ 
        flex: 1, 
        padding: '20px', 
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'flex-start', 
        alignItems: 'flex-start'
      }}>
        <h2 style={{ margin: 0, color: '#9b51e0' }}>Adarsh</h2>
        <p style={{ margin: '10px 0', color: '#9b51e0' }}>Phanom Guide</p>
        
        <img 
          src={require('../logos/Profilepic.png')} 
          alt="Profile" 
          style={{ 
            width: '100%', 
            height: 'auto', 
            borderRadius: '10px', 
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' 
          }} 
        />
      </div>

      {/* Right Side */}
      <div style={{ 
        flex: 1, 
        padding: '40px', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'flex-start'
      }}>
        <h1 style={{ color: '#000000' }}>Flexible, private, and affordable VPS Hosting</h1>
        <h2 style={{ color: '#000000' }}>Expand major projects with hardware strategy design options.</h2>
        <h2 style={{ color: '#000000' }}>Pick Your Dream OS.</h2>
        <h3 style={{ color: '#000000' }}>Maintain Sites and Applications uptime of 99.9%.*</h3>
        
        <button 
          style={{ 
            marginTop: '20px', 
            padding: '10px 20px', 
            background: '#9b51e0', 
            color: '#fff', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer' 
          }}
        >
          Get Started
        </button>

        {/* Star Rating */}
        <div style={{ marginTop: '30px', display: 'flex', gap: '10px' }}>
          {[...Array(5)].map((_, index) => (
            <span key={index} style={{ fontSize: '2rem', color: '#FFD700' }}>★</span>
          ))}
        </div>
      </div>

    </div>
  );
};

export default SplitScreen;
