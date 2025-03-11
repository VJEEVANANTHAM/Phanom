import React from 'react';

const BlogSection = () => {
  const blogData = [
    { 
      image: require('../logos/b1.png'), 
      title: 'Vital for Business Growth', 
      description: 'Off-the-shelf software may address basic needs, but custom IT solutions offer tailored benefits that align perfectly with your business goals. Learn how personalized development ensures scalability, enhances productivity, and provides a competitive edge in a rapidly.'
    },
    { 
      image: require('../logos/b2.png'), 
      title: 'Smart UI/UX Design', 
      description: 'User experience is at the heart of any successful application or platform. Smart UI/UX design not only boosts user engagement but also increases conversion rates.'
    },
    { 
      image: require('../logos/b3.png'), 
      title: 'Future of IT Solutions', 
      description: 'Technology is evolving at an unprecedented pace, shaping the future of businesses worldwide. From AI integration to cloud computing advancements, staying updated with the latest IT trends is crucial for success..'
    }
  ];

  return (
    <div 
      style={{
        padding: '50px 60px', 
        textAlign: 'center',
      }}
    >
      {/* Blog Header */}
      <h1 style={{ fontSize: '2.5rem', color: '#9b51e0', marginBottom: '10px' }}>
        Our Blog and Articles
      </h1>
      <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '40px' }}>
        Take a look at our Company’s Blog Series or read some professional gardening insights and news.
      </p>

      {/* Blog Content */}
      <div 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)', 
          gap: '30px',
          alignItems: 'start',
        }}
      >
        {blogData.map((blog, index) => (
          <div 
            key={index} 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
            }}
          >
            {/* Blog Image */}
            <div 
              style={{
                height: '250px',
                width: '100%',
                backgroundImage: `url(${blog.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderRadius: '10px',
              }}
            ></div>

            {/* Blog Text Content */}
            <h2 style={{ fontSize: '1.8rem', color: '#333' }}>
              {blog.title}
            </h2>
            <p style={{ fontSize: '1rem', color: '#666', lineHeight: '1.6' }}>
              {blog.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSection;
