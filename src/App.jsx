import React from 'react';
import Header from './components/Header';
import Hero3D from './components/Hero3D';
import ProductGallery from './components/ProductGallery';
import CheckoutForm from './components/CheckoutForm';
import Benefits from './components/Benefits';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <div className="announcement-bar" style={{ background: 'var(--primary-color)', color: 'white', textAlign: 'center', padding: '0.5rem', fontSize: '0.875rem' }}>
        التوصيل مجاني لجميع المدن المغربية والدفع عند الاستلام! ✨
      </div>
      
      <Header />
      
      <main>
        <Hero3D />
        <ProductGallery />
        <CheckoutForm />
        <Benefits />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
