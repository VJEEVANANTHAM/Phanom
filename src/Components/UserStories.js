import React from 'react';

const UserStories = () => {
  const users = [
    {
      name: 'Emily Johnson',
      image: require('../logos/user1.png'),
      story: 'This platform transformed my workflow. The ease of use and intuitive design made a huge difference for my team.',
    },
    {
      name: 'Michael Smith',
      image: require('../logos/user2.png'),
      story: 'I was amazed by the support and the rapid implementation of new features. It feels like they truly care about users.',
    },
    {
      name: 'Sophia Martinez',
      image: require('../logos/user3.png'),
      story: 'The analytics features gave us valuable insights, helping us make smarter business decisions with real-time data.',
    },
    {
      name: 'Daniel Lee',
      image: require('../logos/user4.png'),
      story: 'From day one, I felt empowered. The platform is fast, reliable, and packed with the tools I need to succeed every day.',
    },
  ];

  return (
    <div style={{ 
      padding: '40px 20px', 
      background: 'linear-gradient(180deg, #6C5FD4 23.53%, #FFFFFF 150.05%)',
      fontFamily: 'Poppins, sans-serif', 
      color: '#333', 
    }}>
      {/* Header */}
      <h2 style={{ 
        textAlign: 'center', 
        fontSize: '2.5rem', 
        marginBottom: '40px', 
        color: '#6C5FD4', 
      }}>
        Real Stories, Real Impact: Our Users Share Their Experience
      </h2>

      {/* Stories Layout */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(4, 1fr)', 
        gap: '30px', 
        width: '100%', 
        maxWidth: '1200px', 
        margin: '0 auto', 
      }}>
        {users.map((user, index) => (
          <div 
            key={index} 
            style={{ 
              padding: '20px', 
              textAlign: 'center',
            }}
          >
            {/* Image */}
            <img 
              src={user.image} 
              alt={user.name} 
              style={{ 
                width: '120px', 
                height: '120px', 
                borderRadius: '50%', 
                objectFit: 'cover', 
                marginBottom: '20px',
              }} 
            />

            {/* Name */}
            <h3 style={{ 
              margin: '0 0 10px', 
              fontSize: '1.5rem', 
              fontWeight: '600',
            }}>
              {user.name}
            </h3>

            {/* Story */}
            <p style={{ 
              fontSize: '1rem', 
              lineHeight: '1.6', 
              color: '#555', 
            }}>
              {user.story}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserStories;
