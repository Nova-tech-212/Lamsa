import React from 'react';
import { motion } from 'framer-motion';

const Benefits = () => {
  const benefits = [
    { num: '01', title: 'الحفظ والتحصين', desc: 'آية الكرسي هي أعظم آية في القرآن، ولبسها يجعلك تتذكر دائماً قراءتها للتحصين والحفظ طوال اليوم.' },
    { num: '02', title: 'تذكير بذكر الله', desc: 'في زحمة الحياة، رؤيتك للسوار في معصمك هي تذكير دائم بذكر الله والشعور بالسكينة والطمأنينة.' },
    { num: '03', title: 'هدية ذات معنى عميق', desc: 'أفضل ما يمكنك إهداؤه لمن تحب! هدية تجمع بين الأناقة والرسالة الروحية العميقة التي تعبر عن اهتمامك.' },
    { num: '04', title: 'جودة تدوم طويلاً', desc: 'مصنوع من الستانلس ستيل الطبي عالي الجودة. لا يصدأ، لا يتغير لونه، ومقاوم للماء ليلائم نشاطك اليومي.' }
  ];

  return (
    <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem', color: 'var(--primary-color)' }}
        >
          لماذا تختار سوار آية الكرسي؟
        </motion.h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
          {benefits.map((b, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'relative',
                background: 'white',
                padding: '3rem 2rem 2rem',
                border: '1px solid #E5E7EB',
                overflow: 'hidden',
                zIndex: 1,
                textAlign: 'right'
              }}
            >
              <span style={{
                position: 'absolute',
                top: '-15px',
                right: '10px',
                fontSize: '6rem',
                fontWeight: '800',
                color: '#F3F4F6',
                zIndex: -1,
                fontFamily: 'var(--font-sans)',
                lineHeight: 1,
                userSelect: 'none'
              }}>
                {b.num}
              </span>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--primary-color)' }}>{b.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6 }}>{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
