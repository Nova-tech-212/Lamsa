document.addEventListener('DOMContentLoaded', () => {

  /* ==========================================================================
     1. PRELOADER & INITIALIZATION
     ========================================================================== */
  const preloader = document.querySelector('.preloader');
  const loadingBar = document.querySelector('.loading-bar');
  const loadingText = document.querySelector('.loading-percentage');
  
  let progress = 0;
  const loadInterval = setInterval(() => {
    progress += Math.floor(Math.random() * 10) + 1;
    if (progress >= 100) {
      progress = 100;
      clearInterval(loadInterval);
      setTimeout(() => {
        preloader.classList.add('fade-out');
        document.body.classList.remove('loading');
        // Trigger initial reveal animations
        initReveals();
      }, 500);
    }
    loadingBar.style.width = `${progress}%`;
    loadingText.textContent = `${progress}%`;
  }, 50);

  /* ==========================================================================
     2. CUSTOM CURSOR
     ========================================================================== */
  const cursorDot = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-outline');
  
  // Only init custom cursor on non-touch devices
  if (window.matchMedia("(pointer: fine)").matches) {
    let mouseX = 0, mouseY = 0;
    let outlineX = 0, outlineY = 0;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Dot follows immediately
      cursorDot.style.left = `${mouseX}px`;
      cursorDot.style.top = `${mouseY}px`;
    });

    // Animate outline with easing
    const renderCursor = () => {
      outlineX += (mouseX - outlineX) * 0.15;
      outlineY += (mouseY - outlineY) * 0.15;
      cursorOutline.style.left = `${outlineX}px`;
      cursorOutline.style.top = `${outlineY}px`;
      requestAnimationFrame(renderCursor);
    };
    requestAnimationFrame(renderCursor);

    // Hover states
    const hoverElements = document.querySelectorAll('a, button, .open-quick-shop, .magnetic');
    hoverElements.forEach(el => {
      el.addEventListener('mouseenter', () => document.body.classList.add('hovering'));
      el.addEventListener('mouseleave', () => document.body.classList.remove('hovering'));
    });
  }

  /* ==========================================================================
     3. MAGNETIC BUTTONS (Awwwards Style)
     ========================================================================== */
  const magneticBtns = document.querySelectorAll('.btn-magnetic');
  magneticBtns.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = `translate(0px, 0px)`;
      // Reset transition temporarily for snap back
      btn.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
      setTimeout(() => btn.style.transition = '', 500);
    });
  });

  /* ==========================================================================
     4. NAVBAR SCROLL EFFECT
     ========================================================================== */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  /* ==========================================================================
     5. PARALLAX SCROLLING
     ========================================================================== */
  const parallaxElements = document.querySelectorAll('.parallax-bg, .parallax-img');
  
  const applyParallax = () => {
    const scrollY = window.scrollY;
    parallaxElements.forEach(el => {
      const speed = parseFloat(el.getAttribute('data-speed')) || 0.2;
      const yPos = scrollY * speed;
      el.style.transform = `translateY(${yPos}px)`;
    });
    requestAnimationFrame(applyParallax);
  };
  // Start parallax loop
  if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    requestAnimationFrame(applyParallax);
  }

  /* ==========================================================================
     6. INTERSECTION OBSERVER (REVEALS)
     ========================================================================== */
  const initReveals = () => {
    const revealElements = document.querySelectorAll('.fade-in-up, .reveal-text');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-inview');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => observer.observe(el));
  };

  /* ==========================================================================
     7. SLIDE-OUT CART (QUICK SHOP)
     ========================================================================== */
  const openCartBtns = document.querySelectorAll('.open-quick-shop, #open-cart');
  const closeCartBtn = document.getElementById('close-cart');
  const cartOverlay = document.getElementById('cart-overlay');
  
  // Cart DOM Elements to update dynamically
  const cartImage = document.getElementById('cart-item-image');
  const cartColorLabel = document.getElementById('cart-item-color-label');
  const formColorInput = document.getElementById('selected-product-color');

  const toggleCart = (state) => {
    if (state) {
      document.body.classList.add('cart-open');
    } else {
      document.body.classList.remove('cart-open');
    }
  };

  openCartBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // If clicked from a product card, update cart data
      if (this.hasAttribute('data-color')) {
        const color = this.getAttribute('data-color');
        const imgSrc = this.getAttribute('data-img');
        
        cartColorLabel.textContent = `الإصدار: ${color}`;
        formColorInput.value = color;
        cartImage.src = imgSrc;
      }
      
      toggleCart(true);
    });
  });

  closeCartBtn.addEventListener('click', () => toggleCart(false));
  cartOverlay.addEventListener('click', () => toggleCart(false));

  /* ==========================================================================
     8. DRAGGABLE TESTIMONIALS SLIDER
     ========================================================================== */
  const track = document.getElementById('testimonials-track');
  const progressBar = document.getElementById('slider-progress-bar');
  
  if (track) {
    let isDown = false;
    let startX;
    let scrollLeft;

    track.addEventListener('mousedown', (e) => {
      isDown = true;
      track.classList.add('active');
      startX = e.pageX - track.offsetLeft;
      scrollLeft = track.scrollLeft;
    });
    
    track.addEventListener('mouseleave', () => {
      isDown = false;
      track.classList.remove('active');
    });
    
    track.addEventListener('mouseup', () => {
      isDown = false;
      track.classList.remove('active');
    });
    
    track.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - track.offsetLeft;
      const walk = (x - startX) * 2; // Scroll speed multiplier
      track.scrollLeft = scrollLeft - walk;
    });

    // Update progress bar on scroll
    track.addEventListener('scroll', () => {
      // In RTL, scrollLeft is often negative depending on browser engine.
      // We take the absolute value for consistency.
      const maxScroll = track.scrollWidth - track.clientWidth;
      const currentScroll = Math.abs(track.scrollLeft);
      
      let percentage = (currentScroll / maxScroll) * 100;
      // Clamp between 25% (initial) and 100%
      if (percentage < 25) percentage = 25;
      
      progressBar.style.width = `${percentage}%`;
    });
  }

  /* ==========================================================================
     9. CHECKOUT FORM SUBMISSION (WHATSAPP)
     ========================================================================== */
  const checkoutForm = document.getElementById('checkout-form');
  if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const submitBtn = checkoutForm.querySelector('.btn-checkout .btn-text');
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'جاري تحويلك...';
      
      setTimeout(() => {
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const city = document.getElementById('city').value;
        const address = document.getElementById('address').value;
        const color = document.getElementById('selected-product-color').value;
        
        let message = `*طلب جديد - مجموعة لمسة الفاخرة* 💎\n\n`;
        message += `*المنتج:* سوار آية الكرسي\n`;
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
        
        submitBtn.textContent = originalText;
        toggleCart(false);
        checkoutForm.reset();
      }, 800);
    });
  }
});
