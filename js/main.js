document.addEventListener('DOMContentLoaded', () => {
  // 1. Scroll Fade-Up Animations (Intersection Observer)
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

  fadeElements.forEach(el => observer.observe(el));

  // 2. Product Gallery Logic
  const thumbnails = document.querySelectorAll('.thumb');
  const mainImage = document.getElementById('main-product-image');

  thumbnails.forEach(thumb => {
    thumb.addEventListener('click', function() {
      // Remove active from all thumbs
      thumbnails.forEach(t => t.classList.remove('active'));
      // Add active to clicked thumb
      this.classList.add('active');
      // Update main image source
      const newSrc = this.getAttribute('data-src');
      mainImage.style.opacity = 0;
      setTimeout(() => {
        mainImage.src = newSrc;
        mainImage.style.opacity = 1;
      }, 150);
    });
  });

  // 3. Color Swatch Logic
  const colorSwatches = document.querySelectorAll('.color-swatch');
  const colorLabel = document.getElementById('selected-color-label');
  const formColorInput = document.getElementById('form-selected-color');

  colorSwatches.forEach(swatch => {
    swatch.addEventListener('click', function() {
      // Remove active class
      colorSwatches.forEach(s => s.classList.remove('active'));
      // Add active class
      this.classList.add('active');
      
      const colorName = this.getAttribute('data-name');
      const imgTarget = this.getAttribute('data-img');

      // Update Label & Form Input
      if(colorLabel) colorLabel.textContent = colorName;
      if(formColorInput) formColorInput.value = colorName;

      // Update Main Image based on color selection
      mainImage.style.opacity = 0;
      setTimeout(() => {
        mainImage.src = imgTarget;
        mainImage.style.opacity = 1;
        // Optionally update the thumbnails active state here too
      }, 150);
    });
  });

  // 4. Accordion Logic
  const accordions = document.querySelectorAll('.accordion');
  
  accordions.forEach(acc => {
    const header = acc.querySelector('.accordion-header');
    header.addEventListener('click', () => {
      // Toggle active class
      acc.classList.toggle('active');
      const content = acc.querySelector('.accordion-content');
      
      if (acc.classList.contains('active')) {
        content.style.maxHeight = content.scrollHeight + "px";
      } else {
        content.style.maxHeight = null;
      }
    });
  });

  // 5. Smooth Scroll to Order Form
  const orderBtns = document.querySelectorAll('.scroll-to-order');
  orderBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const formSection = document.getElementById('order-section');
      if (formSection) {
        formSection.scrollIntoView({ behavior: 'smooth' });
        setTimeout(() => {
          document.getElementById('name').focus();
        }, 600);
      }
    });
  });

  // 6. Sticky Mobile CTA visibility
  const stickyCta = document.querySelector('.mobile-sticky-cta');
  const formSection = document.getElementById('order-section');

  if (stickyCta && formSection) {
    window.addEventListener('scroll', () => {
      const formTop = formSection.getBoundingClientRect().top;
      // Hide sticky CTA when user reaches the form
      if (formTop < window.innerHeight) {
        stickyCta.style.display = 'none';
      } else {
        stickyCta.style.display = window.innerWidth <= 768 ? 'block' : 'none';
      }
    });
  }

  // 7. Form Submission (WhatsApp logic)
  const checkoutForm = document.getElementById('checkout-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const city = document.getElementById('city').value;
      const address = document.getElementById('address').value;
      const color = document.getElementById('form-selected-color').value;
      
      let message = `*طلب جديد - متجر لمسة* 🛍️\n\n`;
      message += `*المنتج:* سوار آية الكرسي الفاخر\n`;
      message += `*اللون:* ${color}\n\n`;
      message += `*معلومات الزبون:*\n`;
      message += `الاسم: ${name}\n`;
      message += `الهاتف: ${phone}\n`;
      message += `المدينة: ${city}\n`;
      message += `العنوان: ${address}\n\n`;
      message += `*الإجمالي:* 299 درهم (الدفع عند الاستلام)`;
      
      const encodedMsg = encodeURIComponent(message);
      const whatsappNumber = "212694350619"; 
      window.open(`https://wa.me/${whatsappNumber}?text=${encodedMsg}`, '_blank');
    });
  }
});
