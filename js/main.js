document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky Header
  const header = document.querySelector('.header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 2. Scroll Fade-Up Animations (Intersection Observer)
  const fadeElements = document.querySelectorAll('.fade-up');
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  fadeElements.forEach(el => {
    observer.observe(el);
  });

  // 3. Color Gallery Swapper
  const swatches = document.querySelectorAll('.color-swatch');
  const images = document.querySelectorAll('.main-image-container img');
  const colorInput = document.getElementById('selected-color');
  
  if (swatches.length && images.length) {
    swatches.forEach(swatch => {
      swatch.addEventListener('click', () => {
        // Remove active from all
        swatches.forEach(s => s.classList.remove('active'));
        images.forEach(img => img.classList.remove('active'));
        
        // Add active to clicked
        swatch.classList.add('active');
        const colorName = swatch.getAttribute('data-name');
        const imgId = swatch.getAttribute('data-img');
        
        document.getElementById(imgId).classList.add('active');
        
        // Update form input
        if (colorInput) {
          colorInput.value = colorName;
        }
      });
    });
  }

  // 4. Smooth Scroll to Form
  const orderBtns = document.querySelectorAll('.scroll-to-order');
  orderBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const formSection = document.getElementById('order-section');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          document.getElementById('name').focus();
        }, 800);
      }
    });
  });

  // 5. WhatsApp Order Submission
  const orderForm = document.getElementById('checkout-form');
  if (orderForm) {
    orderForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const city = document.getElementById('city').value;
      const address = document.getElementById('address').value;
      const color = document.getElementById('selected-color') ? document.getElementById('selected-color').value : 'ذهبي';
      
      let message = `*طلب جديد - مجوهرات لمسة* 🌙\n\n`;
      message += `*المنتج:* سوار آية الكرسي الفاخر\n`;
      message += `*اللون:* ${color}\n\n`;
      message += `*معلومات الزبون:*\n`;
      message += `الاسم: ${name || 'غير محدد'}\n`;
      message += `الهاتف: ${phone || 'غير محدد'}\n`;
      message += `المدينة: ${city || 'غير محدد'}\n`;
      message += `العنوان: ${address || 'غير محدد'}\n\n`;
      message += `*المجموع:* 299 درهم (الدفع عند الاستلام)`;
      
      const encodedMsg = encodeURIComponent(message);
      const whatsappNumber = "212694350619"; 
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMsg}`, '_blank');
    });
  }
});
