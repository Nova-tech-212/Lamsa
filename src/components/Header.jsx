import React, { useState, useEffect } from 'react';
import { motion, useScroll } from 'framer-motion';

const Header = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid #E5E7EB' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80px' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src="assets/images/logo.png" alt="Lamsa لمسة" style={{ height: '70px', objectFit: 'contain' }} />
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
