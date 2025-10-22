const db = require("../models");
const { Product } = db;

const categories = {
  Men: [
    { name: "Classic Oxford Shirt", imgQuery: "men+shirt" },
    { name: "Slim Fit Chinos", imgQuery: "men+chinos" },
    { name: "Denim Jacket", imgQuery: "men+denim+jacket" },
    { name: "Casual Polo Tee", imgQuery: "men+polo+tshirt" },
    { name: "Tailored Blazer", imgQuery: "men+blazer" },
    { name: "Crew Neck Sweater", imgQuery: "men+sweater" },
    { name: "Cotton Henley", imgQuery: "men+henley" },
    { name: "Relaxed Cargo Pants", imgQuery: "men+cargo+pants" },
    { name: "Leather Belt", imgQuery: "men+leather+belt" },
    { name: "Everyday Hoodie", imgQuery: "men+hoodie" }
  ],
  Women: [
    { name: "Floral Maxi Dress", imgQuery: "women+dress+floral" },
    { name: "Satin Slip Dress", imgQuery: "women+slip+dress" },
    { name: "High Waist Jeans", imgQuery: "women+jeans" },
    { name: "Chiffon Blouse", imgQuery: "women+blouse" },
    { name: "A-line Skirt", imgQuery: "women+skirt" },
    { name: "Tailored Coat", imgQuery: "women+coat" },
    { name: "Wrap Top", imgQuery: "women+top" },
    { name: "Pleated Midi Dress", imgQuery: "women+pleated+dress" },
    { name: "Knitted Cardigan", imgQuery: "women+cardigan" },
    { name: "Summer Romper", imgQuery: "women+romper" }
  ],
  Kids: [
    { name: "Kids Graphic Tee", imgQuery: "kids+tshirt" },
    { name: "Denim Overalls", imgQuery: "kids+overalls" },
    { name: "Printed Leggings", imgQuery: "kids+leggings" },
    { name: "Puffer Jacket", imgQuery: "kids+puffer+jacket" },
    { name: "Character Hoodie", imgQuery: "kids+hoodie" },
    { name: "School Backpack", imgQuery: "kids+backpack" },
    { name: "Playtime Shorts", imgQuery: "kids+shorts" },
    { name: "Comfort Sneakers", imgQuery: "kids+sneakers" },
    { name: "Sun Hat", imgQuery: "kids+sun+hat" },
    { name: "Raincoat", imgQuery: "kids+raincoat" }
  ],
  Shoes: [
    { name: "Classic White Sneakers", imgQuery: "white+sneakers" },
    { name: "Running Shoes", imgQuery: "running+shoes" },
    { name: "Leather Loafers", imgQuery: "leather+loafers" },
    { name: "Ankle Boots", imgQuery: "ankle+boots" },
    { name: "Sport Sandals", imgQuery: "sport+sandals" },
    { name: "Platform Heels", imgQuery: "platform+heels" },
    { name: "Slip-on Sneakers", imgQuery: "slipon+sneakers" },
    { name: "Formal Oxfords", imgQuery: "oxford+shoes" },
    { name: "Trail Hiking Boots", imgQuery: "hiking+boots" },
    { name: "Ballet Flats", imgQuery: "ballet+flats" }
  ],
  Accessories: [
    { name: "Aviator Sunglasses", imgQuery: "aviator+sunglasses" },
    { name: "Minimalist Watch", imgQuery: "minimalist+watch" },
    { name: "Canvas Tote Bag", imgQuery: "canvas+tote+bag" },
    { name: "Silk Scarf", imgQuery: "silk+scarf" },
    { name: "Beanie Hat", imgQuery: "beanie+hat" },
    { name: "Leather Wallet", imgQuery: "leather+wallet" },
    { name: "Statement Necklace", imgQuery: "statement+necklace" },
    { name: "Keychain Organizer", imgQuery: "keychain" },
    { name: "Phone Crossbody", imgQuery: "phone+crossbody" },
    { name: "Travel Umbrella", imgQuery: "compact+umbrella" }
  ],
  Bags: [
    { name: "Structured Handbag", imgQuery: "structured+handbag" },
    { name: "Weekender Duffle", imgQuery: "duffle+bag" },
    { name: "Minimal Backpack", imgQuery: "minimal+backpack" },
    { name: "Crossbody Sling", imgQuery: "crossbody+bag" },
    { name: "Laptop Sleeve", imgQuery: "laptop+sleeve" },
    { name: "Tote Shopper", imgQuery: "tote+bag" },
    { name: "Belt Bag", imgQuery: "belt+bag" },
    { name: "Camera Bag", imgQuery: "camera+bag" },
    { name: "Hobo Bag", imgQuery: "hobo+bag" },
    { name: "Mini Clutch", imgQuery: "clutch" }
  ],
  Beauty: [
    { name: "Hydrating Face Cream", imgQuery: "face+cream" },
    { name: "Matte Lipstick", imgQuery: "lipstick" },
    { name: "Vitamin C Serum", imgQuery: "serum" },
    { name: "Natural Body Lotion", imgQuery: "body+lotion" },
    { name: "Detox Face Mask", imgQuery: "face+mask" },
    { name: "Volume Mascara", imgQuery: "mascara" },
    { name: "Perfume Spray", imgQuery: "perfume" },
    { name: "Makeup Brush Set", imgQuery: "makeup+brushes" },
    { name: "Nail Polish Kit", imgQuery: "nail+polish" },
    { name: "Sunscreen SPF50", imgQuery: "sunscreen" }
  ],
  Home: [
    { name: "Decorative Cushion", imgQuery: "cushion" },
    { name: "Ceramic Vase", imgQuery: "ceramic+vase" },
    { name: "Scented Candle", imgQuery: "scented+candle" },
    { name: "Throws & Blankets", imgQuery: "throw+blanket" },
    { name: "Wall Art Print", imgQuery: "wall+art" },
    { name: "Kitchen Utensil Set", imgQuery: "kitchen+utensils" },
    { name: "Floor Rug", imgQuery: "area+rug" },
    { name: "Table Lamp", imgQuery: "table+lamp" },
    { name: "Storage Baskets", imgQuery: "storage+baskets" },
    { name: "Bed Linen Set", imgQuery: "bed+linen" }
  ],
  Sports: [
    { name: "Yoga Mat", imgQuery: "yoga+mat" },
    { name: "Gym Shorts", imgQuery: "gym+shorts" },
    { name: "Cycling Jersey", imgQuery: "cycling+jersey" },
    { name: "Resistance Bands", imgQuery: "resistance+bands" },
    { name: "Dumbbell Set", imgQuery: "dumbbells" },
    { name: "Running Cap", imgQuery: "running+cap" },
    { name: "Sports Bottle", imgQuery: "sports+bottle" },
    { name: "Training Gloves", imgQuery: "training+gloves" },
    { name: "Basketball", imgQuery: "basketball" },
    { name: "Tennis Racket", imgQuery: "tennis+racket" }
  ],
  Ethnic: [
    { name: "Embroidered Kurta", imgQuery: "kurta" },
    { name: "Bandhani Saree", imgQuery: "bandhani+saree" },
    { name: "Chikankari Kurti", imgQuery: "chikankari+kurtis" },
    { name: "Silk Lehenga", imgQuery: "lehenga" },
    { name: "Printed Dupatta", imgQuery: "dupatta" },
    { name: "Pathani Suit", imgQuery: "pathani+suit" },
    { name: "Ethnic Juttis", imgQuery: "juttis" },
    { name: "Handloom Shawl", imgQuery: "handloom+shawl" },
    { name: "Kurtawala Set", imgQuery: "kurta+set" },
    { name: "Embellished Blouse", imgQuery: "blouse" }
  ]
};

async function seedDb() {
  await db.sequelize.sync();

  // build product list from category mapping
  const seed = [];
  const now = new Date();
  Object.keys(categories).forEach((cat) => {
    const list = categories[cat];
    list.forEach((item, idx) => {
      // use Unsplash source to get a relevant image; size 800x800
      const imgUrl = `https://source.unsplash.com/800x800/?${encodeURIComponent(item.imgQuery)}`;
      seed.push({
        name: item.name,
        description: `${item.name} — premium quality, available in multiple sizes and colors.`,
        price: Math.round(499 + Math.random() * 4500),
        discount_price: Math.random() > 0.6 ? Math.round((499 + Math.random() * 4500) * (0.6 + Math.random() * 0.35)) : null,
        category: cat,
        brand: `${cat} Essentials`,
        sizes: ["S", "M", "L", "XL"],
        colors: ["Black", "White", "Navy", "Red"],
        images: [imgUrl],
        stock: Math.floor(20 + Math.random() * 80),
        rating: Number((3 + Math.random() * 2).toFixed(1)),
        reviews: Math.floor(Math.random() * 500),
        createdAt: now,
        updatedAt: now
      });
    });
  });

  // insert only if product with same name & category doesn't exist
  for (const p of seed) {
    try {
      const exists = await Product.findOne({ where: { name: p.name, category: p.category } });
      if (!exists) {
        await Product.create(p);
      }
    } catch (err) {
      console.warn("Insert error for", p.name, err.message || err);
    }
  }

  const total = await Product.count();
  return total;
}

module.exports = seedDb;