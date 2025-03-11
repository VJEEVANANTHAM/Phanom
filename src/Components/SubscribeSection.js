import React, { useState } from 'react';

const SubscribeSection = () => {
  const [email, setEmail] = useState('');

  const handleSend = () => {
    if (email.trim()) {
      alert(`Email sent to: ${email}`);
      setEmail('');
    } else {
      alert('Please enter a valid email address.');
    }
  };

  return (
    <div 
    style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly', // Distribute evenly
        padding: '20px 40px', // Small padding left and right
        gap: '20px',
        background: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)',
      }}
    >
      {/* Header Text */}
      <h2 style={{ fontSize: '1.8rem', color: '#333' }}>
        Build skills, connect.
      </h2>

      {/* Input Box */}
      <input 
        type="email" 
        placeholder="Enter your Email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)}
        style={{
          padding: '10px',
          fontSize: '1rem',
          border: '1px solid #ccc',
          borderRadius: '5px',
          outline: 'none',
          width: '300px'
        }}
      />

      {/* Send Button */}
      <button 
        onClick={handleSend}
        style={{
          padding: '10px 20px',
          fontSize: '1rem',
          background: '#9b51e0',
          color: '#fff',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer'
        }}
      >
        Send
      </button>
    </div>
  );
};

export default SubscribeSection;
