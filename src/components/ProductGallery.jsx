import React from 'react';
import { motion } from 'framer-motion';

const ProductGallery = () => {
  const images = [
    { src: 'assets/images/IMG_5758.WEBP', alt: 'تشكيلة' },
    { src: 'assets/images/IMG_5760.AVIF', alt: 'سوار ذهبي' },
    { src: 'assets/images/IMG_5761.AVIF', alt: 'سوار فضي' },
    { src: 'assets/images/IMG_5762.AVIF', alt: 'سوار ذهبي وردي' },
    { src: 'assets/images/IMG_5763.AVIF', alt: 'سوار أسود' }
  ];

  const lifestyleImages = [
    'assets/images/IMG_5765.WEBP',
    'assets/images/IMG_5770.WEBP',
    'assets/images/IMG_5771.WEBP',
    'assets/images/IMG_5772.WEBP',
    'assets/images/IMG_5773.WEBP',
    'assets/images/IMG_5774.WEBP',
  ];

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="section" style={{ paddingTop: '2rem' }}>
      <div className="container">
        
        {/* Colors Gallery */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
        >
          <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem', color: 'var(--primary-color)' }}>الألوان المتوفرة</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '4rem' }}>
            {images.slice(1).map((img, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                style={{ overflow: 'hidden' }}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  style={{ width: '100%', aspectRatio: '1', objectFit: 'cover', border: '1px solid #E5E7EB' }} 
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Lifestyle Gallery with Horizontal Scroll on Mobile */}
        <motion.div
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
        >
          <h2 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '2rem', color: 'var(--primary-color)' }}>السوار على الطبيعة</h2>
          <div 
            className="hide-scrollbar"
            style={{ 
              display: 'flex', 
              overflowX: 'auto', 
              scrollSnapType: 'x mandatory', 
              gap: '1rem', 
              paddingBottom: '1rem',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {lifestyleImages.map((src, i) => (
              <img 
                key={i}
                src={src} 
                alt={`السوار على الطبيعة ${i+1}`} 
                style={{ 
                  flex: '0 0 85%', 
                  scrollSnapAlign: 'center', 
                  maxWidth: '400px', 
                  aspectRatio: '1', 
                  objectFit: 'cover',
                  border: '1px solid #E5E7EB'
                }} 
              />
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ProductGallery;
