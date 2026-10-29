/**
 * @project Aura Botanics - Luxury E-Commerce Web Application
 * @author Ahsan Sheikh <ahsansheikhoffice@gmail.com>
 * @copyright 2026 Ahsan Sheikh. All rights reserved.
 * @description Master catalog of 100% natural, certified organic luxury skincare,
 * hair care, and wellness collections with high-definition curated imagery.
 */

export const store = [
  // ------------------------------------------------------------------------
  // BEST SELLERS (HOME & NAV)
  // ------------------------------------------------------------------------
  {
    id: "1",
    name: "Botanical Foaming Cleanser",
    price: 24,
    type: "bestSeller",
    category: "Skincare",
    stars: 5,
    reviewsCount: 342,
    volume: "150 ml / 5.1 fl oz",
    descr:
      "A gentle, antioxidant-rich foaming gel that melts away makeup and impurities without stripping vital moisture.",
    primaryImage:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80",
    ],
    isBestSeller: true,
    isFeatured: true,
  },
  {
    id: "2",
    name: "Restorative Botanical Moisturiser",
    price: 32,
    type: "bestSeller",
    category: "Skincare",
    stars: 5,
    reviewsCount: 428,
    volume: "120 ml / 4.0 fl oz",
    descr:
      "Infused with cold-pressed rosehip oil and aloe vera, delivering 24-hour deep hydration and radiant glow.",
    primaryImage:
      "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80",
    ],
    isBestSeller: true,
    isFeatured: true,
  },
  {
    id: "3",
    name: "Hydrating Chamomile Mist Toner",
    price: 22,
    type: "bestSeller",
    category: "Skincare",
    stars: 5,
    reviewsCount: 512,
    volume: "125 ml / 4.2 fl oz",
    descr:
      "Instant refreshing elixir infused with organic rosewater and chamomile extract to calm and balance skin throughout the day.",
    primaryImage:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80",
    ],
    isBestSeller: true,
    isFeatured: true,
  },
  {
    id: "4",
    name: "Detoxifying Green Clay Masque",
    price: 28,
    type: "bestSeller",
    category: "Skincare",
    stars: 5,
    reviewsCount: 290,
    volume: "100 ml / 3.4 fl oz",
    descr:
      "French green clay combined with kale, spirulina, and baobab to purify congested pores and illuminate dull skin.",
    primaryImage:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=1000&q=80",
    ],
    isBestSeller: true,
    isFeatured: true,
  },

  // ------------------------------------------------------------------------
  // GIFT SETS
  // ------------------------------------------------------------------------
  {
    id: "6",
    name: "Rose Gold Radiance Ritual Pack",
    price: 58,
    type: "gift",
    category: "Gift Sets",
    stars: 5,
    reviewsCount: 184,
    volume: "3-Piece Luxury Set",
    descr:
      "The definitive gifting experience featuring full-size Rose Elixir, Velvet Mist Toner, and Silk Body Oil in an eco-luxe box.",
    primaryImage:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80",
    ],
    isFeatured: true,
  },
  {
    id: "7",
    name: "Botanical Hand Cream Trio Gift Set",
    price: 38,
    type: "gift",
    category: "Gift Sets",
    stars: 5,
    reviewsCount: 145,
    volume: "3 x 50 ml Tubes",
    descr:
      "Three travel-ready nourishing hand balms scented with Bulgarian Lavender, Citrus Mandarin, and Wild Rosemary.",
    primaryImage:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1608248597359-0a672da123d4?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1608248597359-0a672da123d4?auto=format&fit=crop&w=1000&q=80",
    ],
  },
  {
    id: "8",
    name: "French Lavender Sleep & Calming Set",
    price: 49,
    type: "gift",
    category: "Gift Sets",
    stars: 5,
    reviewsCount: 210,
    volume: "4-Piece Wellness Set",
    descr:
      "Curated bedtime ritual with soothing Lavender Pillow Mist, Body Butter, Night Recovery Elixir, and Organic Silk Sleep Mask.",
    primaryImage:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=1000&q=80",
    ],
  },

  // ------------------------------------------------------------------------
  // BODY TYPE (NAVBAR RANGE)
  // ------------------------------------------------------------------------
  {
    id: "9",
    name: "Organic Coffee Bean Body Scrub",
    price: 26,
    type: "navbar-BodyType",
    category: "Body Care",
    stars: 5,
    reviewsCount: 168,
    volume: "250 ml / 8.5 fl oz",
    descr:
      "Finely ground Arabica coffee beans blended with sweet almond oil and sea salt to invigorate blood flow and smooth cellulite.",
    primaryImage:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "10",
    name: "Coconut & Jojoba Pure Body Wash",
    price: 24,
    type: "navbar-BodyType",
    category: "Body Care",
    stars: 5,
    reviewsCount: 220,
    volume: "500 ml / 16.9 fl oz",
    descr:
      "Sulfateless nourishing body wash infused with virgin coconut milk and golden jojoba oil for soft, silky clean skin.",
    primaryImage:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "11",
    name: "Aura Botanical Nourishing Body Oil",
    price: 36,
    type: "navbar-BodyType",
    category: "Body Care",
    stars: 5,
    reviewsCount: 198,
    volume: "100 ml / 3.4 fl oz",
    descr:
      "Quick-absorbing dry oil elixir with cold-pressed rosehip, argan, and evening primrose oils for illuminated skin.",
    primaryImage:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
  },

  // ------------------------------------------------------------------------
  // TRAVEL TYPE (NAVBAR RANGE)
  // ------------------------------------------------------------------------
  {
    id: "12",
    name: "Travel-Size Glow Cleanser",
    price: 12,
    type: "navbar-TravelType",
    category: "Travel",
    stars: 5,
    volume: "50 ml / 1.7 fl oz",
    descr:
      "TSA approved pocket size foaming cleanser for refreshed skin on the go.",
    primaryImage:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "13",
    name: "Travel-Size Velvet Mist",
    price: 14,
    type: "navbar-TravelType",
    category: "Travel",
    stars: 5,
    volume: "50 ml / 1.7 fl oz",
    descr:
      "Airplane cabin essential: instant soothing hydration at 30,000 feet.",
    primaryImage:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "14",
    name: "Mini Day Recovery Cream",
    price: 15,
    type: "navbar-TravelType",
    category: "Travel",
    stars: 4,
    volume: "30 ml / 1.0 fl oz",
    descr:
      "Compact botanical moisture barrier repair cream for daily travel protection.",
    primaryImage:
      "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=600&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
  },

  // ------------------------------------------------------------------------
  // NEW TYPE (NAVBAR RANGE)
  // ------------------------------------------------------------------------
  {
    id: "15",
    name: "Super-Greens Brightening Serum",
    price: 42,
    type: "navbar-NewType",
    category: "Skincare",
    stars: 5,
    volume: "30 ml / 1.0 fl oz",
    descr:
      "Concentrated botanical Vitamin C with kakadu plum and green tea to brighten hyperpigmentation.",
    primaryImage:
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "16",
    name: "Bakuchiol Natural Retinol Alternative",
    price: 48,
    type: "navbar-NewType",
    category: "Skincare",
    stars: 5,
    volume: "30 ml / 1.0 fl oz",
    descr:
      "Plant-derived 1% Bakuchiol stimulates cellular turnover and reduces fine lines without irritation.",
    primaryImage:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "17",
    name: "Whipped Shea Souffle Body Butter",
    price: 34,
    type: "navbar-NewType",
    category: "Body Care",
    stars: 5,
    volume: "200 ml / 6.8 fl oz",
    descr:
      "Decadent whipped body butter with raw shea, mango seed, and organic vanilla bean.",
    primaryImage:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
  },

  // ------------------------------------------------------------------------
  // OUR BEST SELLERS (HOME SHOWCASE)
  // ------------------------------------------------------------------------
  {
    id: "20",
    name: "Luminous Vitamin C Radiance Drops",
    price: 39,
    type: "ourBestSellers",
    category: "Skincare",
    stars: 5,
    primaryImage:
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "21",
    name: "Organic Botanical Hydrating Crème",
    price: 35,
    type: "ourBestSellers",
    category: "Skincare",
    stars: 5,
    primaryImage:
      "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "22",
    name: "Rose Quartz Facial Sculpting Serum",
    price: 45,
    type: "ourBestSellers",
    category: "Skincare",
    stars: 5,
    primaryImage:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "23",
    name: "Pure Lavender Deep Sleep Elixir",
    price: 40,
    type: "ourBestSellers",
    category: "Wellness",
    stars: 5,
    primaryImage:
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "24",
    name: "Cold-Pressed Rosehip Glow Seed Oil",
    price: 38,
    type: "ourBestSellers",
    category: "Skincare",
    stars: 5,
    primaryImage:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "25",
    name: "Clarifying Eucalyptus Scalp Purifier",
    price: 29,
    type: "ourBestSellers",
    category: "Haircare",
    stars: 5,
    primaryImage:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "26",
    name: "Botanical Silk Balancing Shampoo",
    price: 26,
    type: "ourBestSellers",
    category: "Haircare",
    stars: 5,
    primaryImage:
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "27",
    name: "Nourishing Argan Deep Conditioner",
    price: 28,
    type: "ourBestSellers",
    category: "Haircare",
    stars: 5,
    primaryImage:
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "28",
    name: "Sea Salt & Jasmine Botanical Soak",
    price: 30,
    type: "ourBestSellers",
    category: "Body Care",
    stars: 5,
    primaryImage:
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "29",
    name: "Velvet Dew Ceramide Daily Lotion",
    price: 32,
    type: "ourBestSellers",
    category: "Body Care",
    stars: 5,
    primaryImage:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "30",
    name: "Wild Blueberry & Acai Antioxidant Crème",
    price: 36,
    type: "ourBestSellers",
    category: "Skincare",
    stars: 5,
    primaryImage:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
  },

  // ------------------------------------------------------------------------
  // INSTAGRAM SHOWCASE MARQUEE (HIGH-RES CURATED STOCK IMAGES)
  // ------------------------------------------------------------------------
  {
    id: "31",
    type: "iGPosts",
    primaryImage:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "32",
    type: "iGPosts",
    primaryImage:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "33",
    type: "iGPosts",
    primaryImage:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "34",
    type: "iGPosts",
    primaryImage:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "35",
    type: "iGPosts",
    primaryImage:
      "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "36",
    type: "iGPosts",
    primaryImage:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "37",
    type: "iGPosts",
    primaryImage:
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "38",
    type: "iGPosts",
    primaryImage:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "39",
    type: "iGPosts",
    primaryImage:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "40",
    type: "iGPosts",
    primaryImage:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "41",
    type: "iGPosts",
    primaryImage:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "42",
    type: "iGPosts",
    primaryImage:
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80",
  },

  // ------------------------------------------------------------------------
  // UNDER $20 & UNDER $40 COLLECTION (BODY WASH, LOTIONS, SCRUBS)
  // ------------------------------------------------------------------------
  {
    id: "43",
    name: "Meyer Lemon & Verbena Body Wash",
    price: 18,
    type: "bodywash all",
    category: "Body Care",
    stars: 5,
    descr:
      "Invigorating citrus extract and organic verbena for an energizing morning shower experience.",
    primaryImage:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "44",
    name: "Wild Strawberry & Basil Body Wash",
    price: 16,
    type: "bodywash all",
    category: "Body Care",
    stars: 5,
    descr:
      "Naturally foaming wash infused with antioxidant strawberry fruit extracts and garden basil.",
    primaryImage:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "45",
    name: "Golden Turmeric Ayurvedic Body Wash",
    price: 17,
    type: "bodywash all",
    category: "Body Care",
    stars: 5,
    descr:
      "Ancient herbal formulation with turmeric, sandalwood, and sweet almond oil for velvety radiance.",
    primaryImage:
      "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "46",
    name: "Clarifying Neem & Tea Tree Body Wash",
    price: 15,
    type: "bodywash all",
    category: "Body Care",
    stars: 4,
    descr:
      "Antimicrobial botanicals targeting body blemishes while protecting natural skin flora.",
    primaryImage:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "47",
    name: "Rosemary & Spearmint Body Wash",
    price: 19,
    type: "bodywash all",
    category: "Body Care",
    stars: 5,
    descr:
      "Cooling botanical infusion that awakens your senses and cleanses deep without tightness.",
    primaryImage:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
  },

  // BODY LOTION
  {
    id: "48",
    name: "Hydrating Coconut & Shea Body Lotion",
    price: 18,
    type: "bodyLotion all",
    category: "Body Care",
    stars: 5,
    descr:
      "Ultra-absorbent daily moisturizer providing silky 24-hour hydration with pure virgin coconut.",
    primaryImage:
      "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "49",
    name: "Calming French Lavender Body Lotion",
    price: 17,
    type: "bodyLotion all",
    category: "Body Care",
    stars: 5,
    descr:
      "Enriched with organic lavender floral water and sweet almond oil to relax muscles and soothe skin.",
    primaryImage:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "50",
    name: "Mandarin & Blood Orange Body Lotion",
    price: 19,
    type: "bodyLotion all",
    category: "Body Care",
    stars: 4,
    descr:
      "Zesty citrus oils enriched with Vitamin E to energize dull skin and lock in supple moisture.",
    primaryImage:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "51",
    name: "Fragrance-Free Sensitive Skin Lotion",
    price: 16,
    type: "bodyLotion all",
    category: "Body Care",
    stars: 5,
    descr:
      "Dermatologist-tested hypoallergenic barrier repair lotion formulated for the most delicate skin.",
    primaryImage:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=800&q=80",
  },

  // BODY SCRUB
  {
    id: "52",
    name: "Pink Himalayan Salt & Rose Scrub",
    price: 19,
    type: "bodyScrub all",
    category: "Body Care",
    stars: 5,
    descr:
      "Mineral-rich crystalline pink salt steeped in damask rose oil to gently buff away dead cells.",
    primaryImage:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "53",
    name: "Walnut Shell & Raw Honey Body Polish",
    price: 18,
    type: "bodyScrub all",
    category: "Body Care",
    stars: 5,
    descr:
      "Crushed English walnut shells combined with raw wild honey and shea butter for radiant touch.",
    primaryImage:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "54",
    name: "Matcha Green Tea Detoxifying Scrub",
    price: 17,
    type: "bodyScrub all",
    category: "Body Care",
    stars: 5,
    descr:
      "Ceremonial Japanese matcha powder paired with cane sugar and sweet almond oil to purify pores.",
    primaryImage:
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "55",
    name: "Coconut Cane Exfoliating Sugar Scrub",
    price: 19,
    type: "bodyScrub all",
    category: "Body Care",
    stars: 5,
    descr:
      "Warm coconut oil and golden cane crystals melt on damp skin to reveal baby-soft smoothness.",
    primaryImage:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
  },

  // ------------------------------------------------------------------------
  // HAIRCARE & WELLNESS EXPANSION
  // ------------------------------------------------------------------------
  {
    id: "56",
    name: "Rosemary & Biotin Hair Density Serum",
    price: 36,
    type: "haircare",
    category: "Haircare",
    stars: 5,
    volume: "60 ml / 2.0 fl oz",
    descr:
      "High-potency organic rosemary oil combined with vegan biotin and peptides to support thicker, fuller hair.",
    primaryImage:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "57",
    name: "Deep Restorative Hair Masque",
    price: 32,
    type: "haircare",
    category: "Haircare",
    stars: 5,
    volume: "200 ml / 6.8 fl oz",
    descr:
      "Intensive 10-minute treatment with cold-pressed abyssinian oil and babassu butter to resurrect dry strands.",
    primaryImage:
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "58",
    name: "Overnight Ceramide Recovery Sleeping Oil",
    price: 46,
    type: "skincare",
    category: "Skincare",
    stars: 5,
    volume: "30 ml / 1.0 fl oz",
    descr:
      "Restores the lipid barrier while you sleep, locking in moisture and delivering plumper skin by morning.",
    primaryImage:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "59",
    name: "Botanical Illuminating Eye Crème",
    price: 34,
    type: "skincare",
    category: "Skincare",
    stars: 5,
    volume: "15 ml / 0.5 fl oz",
    descr:
      "Infused with caffeine and hyaluronic acid to diminish puffiness and illuminate dark under-eye circles.",
    primaryImage:
      "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "60",
    name: "Calming Mineral Bath Salts with Lavender",
    price: 24,
    type: "wellness",
    category: "Wellness",
    stars: 5,
    volume: "400 g / 14 oz",
    descr:
      "Epsom and dead sea salts blended with dried French lavender buds to melt away daily stress.",
    primaryImage:
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80",
  },

  // ------------------------------------------------------------------------
  // AROMATHERAPY & SACRED SOY CANDLES (NEW LUXURY CATEGORY)
  // ------------------------------------------------------------------------
  {
    id: "61",
    name: "French Lavender & Wild Sage Coconut Candle",
    price: 42,
    type: "aromatherapy all",
    category: "Aromatherapy",
    stars: 5,
    volume: "280 g / 9.8 oz",
    descr:
      "Hand-poured coconut apricot wax infused with Provence lavender essential oil and crushed white sage. 60-hour clean burn.",
    primaryImage:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "62",
    name: "Moroccan Cedarwood & Amber Resin Diffuser",
    price: 52,
    type: "aromatherapy all",
    category: "Aromatherapy",
    stars: 5,
    volume: "150 ml / 5.1 fl oz",
    descr:
      "Slow-releasing reed diffuser carrying warm Atlas cedarwood, sticky labdanum resin, and smoky bourbon vanilla.",
    primaryImage:
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "63",
    name: "Palo Santo & White Copal Aura Clearing Mist",
    price: 32,
    type: "aromatherapy all",
    category: "Aromatherapy",
    stars: 5,
    volume: "100 ml / 3.4 fl oz",
    descr:
      "Sustainably foraged Ecuadorian holy wood distillate and Mexican white copal to reset space and clarify sensory mind.",
    primaryImage:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "64",
    name: "Frankincense & Bergamot Meditation Resin Burner Set",
    price: 58,
    type: "aromatherapy gift",
    category: "Aromatherapy",
    stars: 5,
    volume: "Ceramic Atelier Set",
    descr:
      "Handcrafted soapstone vessel with Omani royal green hojari resin tears and cold-pressed Calabrian bergamot oil.",
    primaryImage:
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "65",
    name: "Siberian Fir & Blue Cypress Forest Candle",
    price: 44,
    type: "aromatherapy all",
    category: "Aromatherapy",
    stars: 5,
    volume: "300 g / 10.5 oz",
    descr:
      "Crisp sub-alpine needles, Australian blue cypress, and damp moss evocative of tranquil ancient evergreen sanctuaries.",
    primaryImage:
      "https://images.unsplash.com/photo-1616401784845-180882ba9ba8?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "66",
    name: "Damascus Rose & Santal Botanical Room Spray",
    price: 36,
    type: "aromatherapy all",
    category: "Aromatherapy",
    stars: 5,
    volume: "120 ml / 4.0 fl oz",
    descr:
      "Distilled organic Bulgarian rosewater suspended with Australian New Caledonian sandalwood for serene pillow and room misting.",
    primaryImage:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1603006905003-be475563bc59?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "67",
    name: "Sweet Orange & Cardamom Sensory Roll-On",
    price: 24,
    type: "aromatherapy all",
    category: "Aromatherapy",
    stars: 5,
    volume: "10 ml / 0.34 fl oz",
    descr:
      "Pocket-sized pulse point remedy featuring uplifting cold-pressed Sicilian blood orange and warm Guatemalan cardamom seed.",
    primaryImage:
      "https://images.unsplash.com/photo-1576426863848-c21f53c60b19?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80",
  },

  // ------------------------------------------------------------------------
  // APOTHECARY TOOLS & WELLNESS ACCESSORIES
  // ------------------------------------------------------------------------
  {
    id: "68",
    name: "Hand-Carved Rose Quartz Sculpting Gua Sha",
    price: 34,
    type: "tools all bestSeller",
    category: "Tools",
    stars: 5,
    volume: "Grade-A Natural Quartz",
    descr:
      "Custom notched crystal sculpted to stimulate facial lymphatic flow, release jawline tension, and lift facial contours.",
    primaryImage:
      "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "69",
    name: "Dual-Ended Nephrite Jade Lymphatic Roller",
    price: 38,
    type: "tools all",
    category: "Tools",
    stars: 5,
    volume: "Genuine Jadeite Stone",
    descr:
      "Cooling mineral rolling tool designed to depuff under-eye zones and accelerate the dermal absorption of elixirs.",
    primaryImage:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "70",
    name: "Natural Agave Fiber Body Polishing Dry Brush",
    price: 26,
    type: "tools all",
    category: "Tools",
    stars: 5,
    volume: "FSC Beechwood Handle",
    descr:
      "Firm Mexican agave plant bristles to invigorate blood circulation, detoxify interstitial fluids, and slough away dull skin.",
    primaryImage:
      "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "71",
    name: "100% Organic Mulberry Silk Rejuvenating Eye Mask",
    price: 45,
    type: "tools all gift",
    category: "Tools",
    stars: 5,
    volume: "22-Momme Silk",
    descr:
      "Ultra-soft grade 6A mulberry silk prevents friction creasing around delicate eye contours while blocking 100% of light.",
    primaryImage:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "72",
    name: "Biophotonic Ultraviolet Miron Glass Dropper (50ml)",
    price: 18,
    type: "tools all",
    category: "Tools",
    stars: 5,
    volume: "50 ml / 1.7 fl oz",
    descr:
      "German-patented violet glass blocks the entire visible light spectrum, protecting fragile bio-active phytonutrients from photodecay.",
    primaryImage:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "73",
    name: "Ceramic Lotus Essential Oil Ultrasonic Diffuser",
    price: 68,
    type: "tools gift",
    category: "Tools",
    stars: 5,
    volume: "Matte Stoneware",
    descr:
      "Whisper-quiet ultrasonic mist generator housed inside unglazed handcrafted artisan ceramic for continuous 8-hour diffusion.",
    primaryImage:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "74",
    name: "Organic Turkish Cotton Ritual Bath Towel",
    price: 48,
    type: "tools all",
    category: "Tools",
    stars: 5,
    volume: "100 x 180 cm",
    descr:
      "GOTS certified long-staple organic Turkish cotton woven for ultra-plush absorbency and spa-grade cloud softness.",
    primaryImage:
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
  },

  // ------------------------------------------------------------------------
  // BOTANICAL SUN DEFENSE & LIP ELIXIRS
  // ------------------------------------------------------------------------
  {
    id: "75",
    name: "Sheer Mineral Zinc Invisible SPF 50 Shield",
    price: 38,
    type: "skincare all bestSeller",
    category: "Sun & Lip",
    stars: 5,
    volume: "75 ml / 2.5 fl oz",
    descr:
      "Non-nano zinc oxide reef-safe fluid fortified with astaxanthin and green tea extract. Leaves zero white cast and matte finish.",
    primaryImage:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "76",
    name: "Wild Blackberry & Cupuaçu Hydrating Lip Butter",
    price: 16,
    type: "all under20",
    category: "Sun & Lip",
    stars: 5,
    volume: "15 g / 0.5 oz",
    descr:
      "Rich Amazonian cupuaçu seed butter and organic cold-pressed blackberry oil that seals chapped lips with sheer berry sheen.",
    primaryImage:
      "https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "77",
    name: "Golden Marula & Carrot Seed After-Sun Oil",
    price: 44,
    type: "all skincare",
    category: "Sun & Lip",
    stars: 5,
    volume: "100 ml / 3.4 fl oz",
    descr:
      "Rehydrates UV-exposed dermal cells with beta-carotene, cold-pressed virgin marula oil, and soothing Roman chamomile.",
    primaryImage:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "78",
    name: "Peppermint & Moringa Plumping Lip Nectar",
    price: 18,
    type: "all under20",
    category: "Sun & Lip",
    stars: 5,
    volume: "10 ml / 0.34 fl oz",
    descr:
      "Micro-circulation booster featuring crisp organic peppermint leaf and nutrient-dense Himalayan moringa seed oleic acids.",
    primaryImage:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "79",
    name: "Watermelon Peptide Barrier Lip Treatment",
    price: 20,
    type: "all under20",
    category: "Sun & Lip",
    stars: 5,
    volume: "12 ml / 0.4 fl oz",
    descr:
      "Triple peptide complex infused with cold-pressed Kalahari watermelon seed oil to visibly plump fine lip lines overnight.",
    primaryImage:
      "https://images.unsplash.com/photo-1515688594390-b649af70d282?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "80",
    name: "Scalp & Hairline Mineral Powder SPF 30",
    price: 28,
    type: "haircare all",
    category: "Sun & Lip",
    stars: 5,
    volume: "7 g / 0.25 oz",
    descr:
      "Translucent zinc powder dispensed with built-in brush to shield the scalp and hairline from sun damage without greasy roots.",
    primaryImage:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "81",
    name: "Blue Tansy Calming Sunburn Relief Gel",
    price: 32,
    type: "skincare all",
    category: "Sun & Lip",
    stars: 5,
    volume: "150 ml / 5.1 fl oz",
    descr:
      "Pure aloe barbadensis leaf gel steeped in azulene-rich Moroccan blue tansy and cucumber hydrosol for instant cool relief.",
    primaryImage:
      "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
  },

  // ------------------------------------------------------------------------
  // MEN'S BOTANICAL GROOMING RITUALS
  // ------------------------------------------------------------------------
  {
    id: "82",
    name: "Cedarwood & Sandalwood Conditioning Beard Elixir",
    price: 32,
    type: "grooming all forhim",
    category: "Grooming",
    stars: 5,
    volume: "50 ml / 1.7 fl oz",
    descr:
      "Cold-pressed jojoba, argan, and grapeseed oils infused with Virginian cedarwood and smoky santal to soften bristles.",
    primaryImage:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "83",
    name: "Australian Cypress & Witch Hazel Post-Shave Tonic",
    price: 28,
    type: "grooming all forhim",
    category: "Grooming",
    stars: 5,
    volume: "120 ml / 4.0 fl oz",
    descr:
      "Alcohol-free astringent tonic formulated with organic witch hazel, Tasmanian pepperberry, and blue cypress to close razor pores.",
    primaryImage:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "84",
    name: "Activated Charcoal & Tea Tree Clarifying Soap Bar",
    price: 14,
    type: "grooming all forhim under20",
    category: "Grooming",
    stars: 5,
    volume: "180 g / 6.3 oz",
    descr:
      "Coconut-derived bamboo charcoal draws out sebum and pollution while wild Australian tea tree naturally controls breakout bacteria.",
    primaryImage:
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "85",
    name: "Botanical Sea Salt Texturizing Hair Spray",
    price: 24,
    type: "grooming haircare all forhim",
    category: "Grooming",
    stars: 5,
    volume: "150 ml / 5.1 fl oz",
    descr:
      "Natural Atlantic sea salt combined with kelp extract and sage water for effortless, matte beachy volume and flexible hold.",
    primaryImage:
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "86",
    name: "Rosemary & Caffeine Scalp Stimulating Tonic",
    price: 34,
    type: "grooming haircare all forhim",
    category: "Grooming",
    stars: 5,
    volume: "100 ml / 3.4 fl oz",
    descr:
      "Energizes hair roots with green coffee bean caffeine, organic rosemary hydrosol, and niacinamide to fortify thinning follicles.",
    primaryImage:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "87",
    name: "Bergamot & Vetiver Daily Matte Face Cream",
    price: 36,
    type: "grooming skincare all forhim",
    category: "Grooming",
    stars: 5,
    volume: "80 ml / 2.7 fl oz",
    descr:
      "Fast-absorbing lightweight lotion with zinc PCA and vetiver root to balance oil shine without parching the dermal layer.",
    primaryImage:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "88",
    name: "Spearmint & Eucalyptus Cooling Shave Crème",
    price: 22,
    type: "grooming all forhim",
    category: "Grooming",
    stars: 5,
    volume: "150 ml / 5.1 fl oz",
    descr:
      "Cushioning botanical lather made with organic shea butter and soothing mint to provide frictionless blade glide.",
    primaryImage:
      "https://images.unsplash.com/photo-1556228852-80b6e5eeff06?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
  },

  // ------------------------------------------------------------------------
  // SACRED BATH SOAKS & RESTORATIVE WELLNESS
  // ------------------------------------------------------------------------
  {
    id: "89",
    name: "Dead Sea Magnesium & Arnica Muscle Soak",
    price: 32,
    type: "wellness all",
    category: "Bath & Body",
    stars: 5,
    volume: "500 g / 17.6 oz",
    descr:
      "High-concentration transdermal magnesium flakes and wild mountain arnica extract formulated to relax sore joints and overworked limbs.",
    primaryImage:
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "90",
    name: "Himalayan Rose Quartz Detox Bathing Crystals",
    price: 28,
    type: "wellness all",
    category: "Bath & Body",
    stars: 5,
    volume: "450 g / 15.8 oz",
    descr:
      "Unrefined ancient crystalline salts from the Khewra foothills scented with pure essential oils of rose de mai and geranium.",
    primaryImage:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "91",
    name: "French Green Clay & Eucalyptus Detox Bath",
    price: 34,
    type: "wellness all",
    category: "Bath & Body",
    stars: 5,
    volume: "350 g / 12.3 oz",
    descr:
      "Montmorillonite green clay and Tasmanian blue gum eucalyptus draw impurities through pores during a warm restorative soak.",
    primaryImage:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "92",
    name: "Colloidal Oatmeal & Coconut Milk Bath",
    price: 26,
    type: "wellness all",
    category: "Bath & Body",
    stars: 5,
    volume: "400 g / 14 oz",
    descr:
      "Creamy, comforting powder dissolves instantly into silky water, relieving dry winter itchiness and calming reactive skin.",
    primaryImage:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "93",
    name: "Magnesium & Passionflower Deep Sleep Body Cream",
    price: 40,
    type: "wellness all bestSeller",
    category: "Bath & Body",
    stars: 5,
    volume: "200 ml / 6.8 fl oz",
    descr:
      "Rich nightly body butter packed with topical magnesium chloride, passionflower, and Roman chamomile for deep restorative slumber.",
    primaryImage:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "94",
    name: "Calendula & Chamomile SOS Botanical Healing Salve",
    price: 22,
    type: "wellness all",
    category: "Bath & Body",
    stars: 5,
    volume: "60 ml / 2.0 fl oz",
    descr:
      "Potent herbal balm steeped with solar-infused organic calendula blossoms, beeswax, and St. John's wort to soothe cuts and rough patches.",
    primaryImage:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "95",
    name: "Grand Apothecary Master Collection (9-Piece Luxury Chest)",
    price: 185,
    type: "gift all bestSeller",
    category: "Gift Sets",
    stars: 5,
    volume: "Handcrafted Heirloom Gift Chest",
    descr:
      "Our most prestigious set: 9 full-size botanical formulations housed in a solid cedar heirloom box with gold embossed brass fittings.",
    primaryImage:
      "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&w=800&q=80",
    hoverImg:
      "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?auto=format&fit=crop&w=800&q=80",
  },
];

export default store;
