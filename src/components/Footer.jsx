import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '4rem 0 2rem', backgroundColor: '#000', color: 'white', textAlign: 'center' }}>
      <div className="container">
        <h2 style={{ fontFamily: 'var(--font-arabic-serif)', fontSize: '2rem', marginBottom: '2rem' }}>لمسة</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '3rem' }}>
          <a href="#" style={{ color: 'white', borderBottom: '1px solid transparent' }}>انستغرام</a>
          <a href="#" style={{ color: 'white', borderBottom: '1px solid transparent' }}>واتساب</a>
          <a href="#" style={{ color: 'white', borderBottom: '1px solid transparent' }}>اتصل بنا</a>
        </div>
        <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>&copy; 2026 مجوهرات لمسة. جميع الحقوق محفوظة.</p>
      </div>
    </footer>
  );
};

export default Footer;
