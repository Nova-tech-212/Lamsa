const products = [
  {
    id: 1,
    name: "Ayatul Kursi Cuff",
    name_ar: "سوار آية الكرسي",
    price: 349,
    image: "assets/images/IMG_5760.AVIF",
    color: "gold",
    colorName: "Gold",
    colorName_ar: "ذهبي",
    engraving: "quranic",
    description: "A beautiful stainless steel cuff featuring the powerful Ayatul Kursi, delicately engraved for a subtle yet profound daily reminder."
  },
  {
    id: 2,
    name: "Sabr (Patience) Cuff",
    name_ar: "سوار الصبر",
    price: 299,
    image: "assets/images/IMG_5761.AVIF",
    color: "silver",
    colorName: "Silver",
    colorName_ar: "فضي",
    engraving: "phrase",
    description: "Keep the virtue of Sabr close to you with this elegant silver cuff. A timeless piece designed to inspire."
  },
  {
    id: 3,
    name: "Tawakkul Cuff",
    name_ar: "سوار التوكل",
    price: 349,
    image: "assets/images/IMG_5762.AVIF",
    color: "rosegold",
    colorName: "Rose Gold",
    colorName_ar: "ذهب وردي",
    engraving: "phrase",
    description: "A reminder to always place your trust in the Divine. Beautifully crafted in rose gold finish."
  },
  {
    id: 4,
    name: "Hubb (Love) Cuff",
    name_ar: "سوار الحب",
    price: 349,
    image: "assets/images/IMG_5763.AVIF",
    color: "black",
    colorName: "Matte Black",
    colorName_ar: "أسود مطفي",
    engraving: "phrase",
    description: "A sleek, minimalist matte black cuff engraved with 'Hubb' (Love) in stunning gold calligraphy."
  }
];

// Helper to get products
function getProducts() {
  return products;
}

function getProductById(id) {
  return products.find(p => p.id === parseInt(id));
}
