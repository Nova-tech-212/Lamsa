// --- LANDING PAGE LOGIC ---

// 1. Color Selector Logic
function setupColorSelector() {
  const swatches = document.querySelectorAll('.color-swatch');
  const mainImage = document.getElementById('main-product-image');
  const colorLabel = document.getElementById('color-label');
  const hiddenInput = document.getElementById('selected-color');

  swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
      // Remove active from all
      swatches.forEach(s => s.classList.remove('active'));
      // Add active to clicked
      swatch.classList.add('active');
      
      // Update Image
      mainImage.src = swatch.getAttribute('data-image');
      
      // Update label and hidden input
      const colorName = swatch.getAttribute('data-name');
      colorLabel.textContent = colorName;
      hiddenInput.value = colorName;
    });
  });
}

// 2. Smooth Scroll to Form
function scrollToForm() {
  const formSection = document.getElementById('order-section');
  if (formSection) {
    formSection.scrollIntoView({ behavior: 'smooth' });
    // Focus the first input field slightly after scrolling
    setTimeout(() => {
      document.getElementById('name').focus();
    }, 500);
  }
}

// 3. Handle Native Form Submission (COD)
function handleOrder(e) {
  e.preventDefault();
  
  // Here you would normally send the data to a server/webhook (e.g., Google Sheets, Shopify, Custom API)
  
  alert("🎉 Thank you! Your order has been placed successfully. Our team will contact you soon for confirmation.");
  
  // Reset form
  e.target.reset();
  window.scrollTo(0, 0);
}

// 4. Handle WhatsApp Order Submission
function orderViaWhatsapp() {
  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const city = document.getElementById('city').value;
  const address = document.getElementById('address').value;
  const color = document.getElementById('selected-color').value;
  
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
  
  // Replace with actual business WhatsApp number
  const whatsappNumber = "212600000000"; 
  window.open(`https://wa.me/${whatsappNumber}?text=${encodedMsg}`, '_blank');
}

document.addEventListener('DOMContentLoaded', () => {
  setupColorSelector();
});
