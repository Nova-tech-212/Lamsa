const translations = {
  en: {
    announcement: "Free cash on delivery anywhere in Morocco! ✨",
    nav_home: "Home",
    nav_shop: "Shop",
    nav_about: "Our Story",
    nav_checkout: "Checkout",
    hero_title: "Jewelry With Meaning",
    hero_subtitle: "Elegant stainless steel cuff bracelets engraved with Arabic calligraphy to inspire your daily life.",
    shop_now: "Shop the Collection",
    best_sellers: "Best Sellers",
    view_all: "View All",
    story_title: "The Art of Calligraphy",
    story_desc: "Every piece is designed to be a daily reminder of faith, love, and hope. Our premium stainless steel bracelets are crafted to last a lifetime, just like the words they carry.",
    read_story: "Read Our Story",
    footer_desc: "Meaningful jewelry designed for the modern soul.",
    quick_links: "Quick Links",
    contact_us: "Contact",
    add_to_cart: "Add to Cart",
    buy_now: "Buy Now",
    price_mad: "MAD",
    color: "Color",
    engraving_type: "Engraving",
    all_colors: "All Colors",
    all_engravings: "All Engravings",
    checkout_title: "Complete Your Order",
    checkout_subtitle: "Fill in your details for Cash on Delivery",
    full_name: "Full Name",
    phone_number: "Phone Number",
    city: "City",
    address: "Delivery Address",
    place_order: "Place Order (COD)",
    order_whatsapp: "Order via WhatsApp",
    cart_empty: "Your cart is empty.",
    total: "Total:"
  },
  ar: {
    announcement: "توصيل مجاني والدفع عند الاستلام في جميع أنحاء المغرب! ✨",
    nav_home: "الرئيسية",
    nav_shop: "المتجر",
    nav_about: "قصتنا",
    nav_checkout: "الدفع",
    hero_title: "مجوهرات تحمل معنى",
    hero_subtitle: "أساور أنيقة من الفولاذ المقاوم للصدأ منقوشة بالخط العربي لتلهم حياتك اليومية.",
    shop_now: "تسوق التشكيلة",
    best_sellers: "الأكثر مبيعاً",
    view_all: "عرض الكل",
    story_title: "فن الخط العربي",
    story_desc: "كل قطعة مصممة لتكون تذكيراً يومياً بالإيمان والحب والأمل. أساورنا الفاخرة مصممة لتدوم مدى الحياة، تماماً مثل الكلمات التي تحملها.",
    read_story: "اقرأ قصتنا",
    footer_desc: "مجوهرات ذات معنى صممت للروح المعاصرة.",
    quick_links: "روابط سريعة",
    contact_us: "اتصل بنا",
    add_to_cart: "أضف إلى السلة",
    buy_now: "اشتري الآن",
    price_mad: "درهم",
    color: "اللون",
    engraving_type: "النقش",
    all_colors: "جميع الألوان",
    all_engravings: "جميع النقوش",
    checkout_title: "أكمل طلبك",
    checkout_subtitle: "أدخل بياناتك للدفع عند الاستلام",
    full_name: "الاسم الكامل",
    phone_number: "رقم الهاتف",
    city: "المدينة",
    address: "عنوان التوصيل",
    place_order: "تأكيد الطلب (الدفع عند الاستلام)",
    order_whatsapp: "اطلب عبر الواتساب",
    cart_empty: "سلة التسوق فارغة.",
    total: "المجموع:"
  }
};

let currentLang = localStorage.getItem('lamsa_lang') || 'en';

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lamsa_lang', lang);
  
  // Set direction
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.documentElement.lang = lang;
  
  // Enable/Disable RTL stylesheet
  const rtlStylesheet = document.getElementById('rtl-stylesheet');
  if (rtlStylesheet) {
    rtlStylesheet.disabled = lang !== 'ar';
  }
  
  // Update toggle button text
  const toggleBtn = document.querySelector('#lang-toggle .lang-text');
  if (toggleBtn) {
    toggleBtn.textContent = lang === 'en' ? 'AR' : 'EN';
  }
  
  // Translate elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      // Check if it's an input placeholder
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Dispatch event for other scripts to re-render dynamic content (like products)
  document.dispatchEvent(new Event('languageChanged'));
}

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  
  const langToggle = document.getElementById('lang-toggle');
  if (langToggle) {
    langToggle.addEventListener('click', () => {
      setLanguage(currentLang === 'en' ? 'ar' : 'en');
    });
  }
});
