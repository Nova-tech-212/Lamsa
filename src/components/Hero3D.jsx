import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Hero3D = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({ opacity: 1, y: 0 });
  }, [controls]);

  return (
    <section className="section" style={{ paddingBottom: '2rem', paddingTop: '2rem' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          style={{ textAlign: 'center', marginBottom: '1.5rem' }}
        >
          <span style={{ fontSize: '0.85rem', letterSpacing: '4px', textTransform: 'uppercase', color: 'var(--text-muted)', fontFamily: 'var(--font-sans)' }}>
            اكتشف السوار بـ 360 درجة
          </span>
          <h1 style={{ fontSize: '3rem', marginTop: '1rem', color: 'var(--primary-color)' }}>سوار آية الكرسي الفاخر</h1>
          <p style={{ maxWidth: '600px', margin: '1rem auto', color: 'var(--text-muted)' }}>
            احملي معك تذكيراً قوياً بالإيمان والحماية كل يوم. سوار أنيق من الستانلس ستيل منقوش بآية الكرسي بدقة. مقاوم للصدأ والماء ومصمم ليدوم.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
        >
          <model-viewer 
            src="assets/models/bracelet.glb" 
            poster="assets/images/IMG_5758.WEBP" 
            alt="سوار آية الكرسي ثلاثي الأبعاد" 
            camera-controls 
            auto-rotate 
            rotation-per-second="30deg"
            shadow-intensity="1"
            style={{ width: '100%', height: '50vh', minHeight: '400px', backgroundColor: 'var(--bg-main)', border: '1px solid #E5E7EB' }}
          ></model-viewer>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero3D;
