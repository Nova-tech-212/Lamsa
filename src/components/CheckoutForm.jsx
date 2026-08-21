import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', city: '', address: '', color: 'ذهبي'
  });

  const handleOrder = (e) => {
    e.preventDefault();
    orderViaWhatsapp();
  };

  const orderViaWhatsapp = () => {
    let message = `*طلب جديد - مجوهرات لمسة* 🌙\n\n`;
    message += `*المنتج:* سوار آية الكرسي الفاخر\n`;
    message += `*اللون:* ${formData.color}\n\n`;
    message += `*معلومات الزبون:*\n`;
    message += `الاسم: ${formData.name || 'غير محدد'}\n`;
    message += `الهاتف: ${formData.phone || 'غير محدد'}\n`;
    message += `المدينة: ${formData.city || 'غير محدد'}\n`;
    message += `العنوان: ${formData.address || 'غير محدد'}\n\n`;
    message += `*المجموع:* 299 درهم (الدفع عند الاستلام)`;
    
    const encodedMsg = encodeURIComponent(message);
    const whatsappNumber = "212694350619"; 
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMsg}`, '_blank');
  };

  return (
    <section id="order-section" className="section" style={{ backgroundColor: 'var(--bg-main)' }}>
      <div className="container" style={{ maxWidth: '600px' }}>
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ background: 'white', padding: '3rem', border: '1px solid #E5E7EB' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--primary-color)', marginBottom: '1rem' }}>أكمل طلبك</h2>
            <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>299 درهم</div>
            <p style={{ color: 'var(--text-muted)' }}>أدخل معلوماتك للطلب. الدفع يكون فقط عند استلام المنتج.</p>
          </div>
          
          <form onSubmit={handleOrder}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>اللون المطلوب</label>
              <select 
                style={{ width: '100%', padding: '1rem', border: '1px solid #D1D5DB', borderRadius: '0', fontSize: '1rem', fontFamily: 'inherit' }}
                value={formData.color}
                onChange={(e) => setFormData({...formData, color: e.target.value})}
              >
                <option value="ذهبي">ذهبي</option>
                <option value="فضي">فضي</option>
                <option value="ذهبي وردي">ذهبي وردي</option>
                <option value="أسود">أسود</option>
              </select>
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>الاسم الكامل</label>
              <input type="text" style={{ width: '100%', padding: '1rem', border: '1px solid #D1D5DB', borderRadius: '0', fontSize: '1rem' }} required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} />
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>رقم الهاتف</label>
              <input type="tel" dir="ltr" style={{ width: '100%', padding: '1rem', border: '1px solid #D1D5DB', borderRadius: '0', fontSize: '1rem', textAlign: 'left' }} required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>المدينة</label>
              <input type="text" style={{ width: '100%', padding: '1rem', border: '1px solid #D1D5DB', borderRadius: '0', fontSize: '1rem' }} required value={formData.city} onChange={e => setFormData({...formData, city: e.target.value})} />
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>عنوان التوصيل</label>
              <textarea rows="3" style={{ width: '100%', padding: '1rem', border: '1px solid #D1D5DB', borderRadius: '0', fontSize: '1rem', fontFamily: 'inherit' }} required value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})}></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginBottom: '1rem' }}>
              تأكيد الطلب (الدفع عند الاستلام)
            </button>
            
            <div style={{ textAlign: 'center', margin: '1rem 0', color: 'var(--text-muted)' }}>أو</div>

            <button type="button" className="btn btn-outline" style={{ width: '100%', borderColor: 'var(--primary-color)' }} onClick={orderViaWhatsapp}>
              اطلب عبر واتساب
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default CheckoutForm;
