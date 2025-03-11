import React from 'react';

const MissionSection = () => {
  const missions = [
    {
      number: '01',
      title: 'Innovate',
      description: 'Harnessing the power of technology to bring fresh, groundbreaking ideas to life. Stay ahead with our visionary approach to problem-solving and growth.',
    },
    {
      number: '02',
      title: 'Create',
      description: 'Designing and developing solutions that drive progress and meet unique challenges. Build the future with tailored solutions that redefine possibilities.',
    },
    {
      number: '03',
      title: 'Dominate',
      description: 'Empowering businesses to lead their industries with robust, scalable IT strategies. Achieve unmatched success with our expertise guiding your digital journey.',
    },
  ];

  return (
    <div style={{ 
      padding: '60px 20px', 
      fontFamily: 'Poppins, sans-serif', 
      background: '#fff', 
      color: '#333',
      textAlign: 'center',
    }}>
      
      {/* Header */}
      <h2 style={{ 
        fontSize: '2.5rem', 
        fontWeight: 'bold', 
        background: 'linear-gradient(90deg, #6C5FD4, #FF00FF)', 
        WebkitBackgroundClip: 'text', 
        WebkitTextFillColor: 'transparent', 
        marginBottom: '40px',
      }}>
        Our Mission
      </h2>
      <p>Empowering businesses with innovation, crafting bespoke solutions, and driving industry leadership.</p>
      {/* Mission Cards */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(3, 1fr)', 
        gap: '30px', 
        maxWidth: '1200px', 
        margin: '0 auto',
      }}>
        {missions.map((mission, index) => (
          <div 
            key={index} 
            style={{ 
              padding: '40px 20px', 
              position: 'relative', 
              borderRadius: '10px',
              background: '#fff', 
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
            }}
          >
            {/* Large Background Number */}
            <span style={{ 
              position: 'absolute', 
              top: '10px', 
              left: '50%', 
              transform: 'translateX(-50%)', 
              fontSize: '8rem', 
              fontWeight: 'bold', 
              color: '#6C5FD4', 
              opacity: 0.1, 
              zIndex: 0,
            }}>
              {mission.number}
            </span>

            {/* Title and Description */}
            <h3 style={{ fontSize: '1.8rem', fontWeight: 'bold', zIndex: 1, position: 'relative' }}>
              {mission.title}
            </h3>
            <p style={{ fontSize: '1rem', lineHeight: '1.6', zIndex: 1, position: 'relative' }}>
              {mission.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MissionSection;
