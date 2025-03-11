import React from 'react';

const Card = () => {
  const cardData = [
    { 
      image: require('../logos/card1.png'), 

      description: 'Channel SEO | Skip-Non Skip able Ads | Increase Subscriber & Views' 
    },
    { 
      image: require('../logos/card2.png'), 
        description: 'Technical SEO | On-Page SEO | Off- Page SEO | Local SEO' 
    },
    { 
      image: require('../logos/card3.png'), 
         description: 'Facebook | Instagram | X | Linkedin Pinterest' 
    },
    { 
      image: require('../logos/card4.png'), 
      title: 'Card 4', 
      description: 'Search Ads | Display Ads | Demand Gen PMax Ads| Video Ads | Lead Generation ' 
    }
  ];

  return (
    <div 
      style={{
        display: 'flex',
        gap: '20px',
        padding: '50px 60px', // Space on left and right
        height: '60vh',
      }}
    >
      {/* Left section (20%) */}
      <div 
        style={{
          flex: '1', 
          background: '#f5f5f5', 
          padding: '20px', 
          borderRadius: '10px'
        }}
      >
        <h1 style={{ fontSize: '2rem', color: '#9b51e0' }}>Explore our Service</h1>
        <p style={{ fontSize: '1.2rem', color: '#333' }}>
        Explore our service and discover solutions designed to meet your 
        unique needs. With a focus on quality and innovation, we turn your vision into reality.        </p>
        <button 
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            background: '#9b51e0',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Book an Appointment
        </button>
      </div>

      {/* Right section (80%) */}
      <div 
        style={{
          flex: '4', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '20px',
         // flex: '1', 
          background: '#f5f5f5', 
          padding: '20px', 
          borderRadius: '10px'
        }}
      >
        <h2 style={{ fontSize: '1.8rem', color: '#9b51e0', textAlign: 'center' }}>
        Digital Marketing        </h2>
        <p style={{ fontSize: '1.2rem', color: '#222', textAlign: 'center' }}>
        Keep your lawn in top shape without lifting a finger and  boost the appearance of your property.
        </p>

        {/* Card grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)', // 4 equal columns
            gap: '10px'
          }}
        >
          {cardData.map((card, index) => (
            <div 
              key={index} 
              style={{
                background: '#fff', 
                borderRadius: '10px', 
                boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Card image */}
              <div 
                style={{
                    height: '140px',
                    width: '100%',
                    backgroundImage: `url(${card.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',

                }}
              ></div>

              {/* Card content */}
              <div 
                style={{
                  height: '50%', 
                  padding: '10px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  justifyContent: 'space-between'
                }}
              >
                <h3 style={{ fontSize: '1.2rem', color: '#9b51e0' }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '1rem', color: '#333' }}>
                  {card.description}
                </p>
                <button 
                  style={{
                    padding: '8px 16px',
                    background: '#9b51e0',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                  }}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
