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
        descr: "A gentle, antioxidant-rich foaming gel that melts away makeup and impurities without stripping vital moisture.",
        primaryImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1000&q=80"
        ],
        isBestSeller: true,
        isFeatured: true
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
        descr: "Infused with cold-pressed rosehip oil and aloe vera, delivering 24-hour deep hydration and radiant glow.",
        primaryImage: "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80"
        ],
        isBestSeller: true,
        isFeatured: true
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
        descr: "Instant refreshing elixir infused with organic rosewater and chamomile extract to calm and balance skin throughout the day.",
        primaryImage: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80"
        ],
        isBestSeller: true,
        isFeatured: true
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
        descr: "French green clay combined with kale, spirulina, and baobab to purify congested pores and illuminate dull skin.",
        primaryImage: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=1000&q=80"
        ],
        isBestSeller: true,
        isFeatured: true
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
        descr: "The definitive gifting experience featuring full-size Rose Elixir, Velvet Mist Toner, and Silk Body Oil in an eco-luxe box.",
        primaryImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1000&q=80",
            "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=80"
        ],
        isFeatured: true
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
        descr: "Three travel-ready nourishing hand balms scented with Bulgarian Lavender, Citrus Mandarin, and Wild Rosemary.",
        primaryImage: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=1000&q=80"
        ]
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
        descr: "Curated bedtime ritual with soothing Lavender Pillow Mist, Body Butter, Night Recovery Elixir, and Organic Silk Sleep Mask.",
        primaryImage: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
        gallery: [
            "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1000&q=80"
        ]
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
        descr: "Finely ground Arabica coffee beans blended with sweet almond oil and sea salt to invigorate blood flow and smooth cellulite.",
        primaryImage: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80"
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
        descr: "Sulfateless nourishing body wash infused with virgin coconut milk and golden jojoba oil for soft, silky clean skin.",
        primaryImage: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=800&q=80"
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
        descr: "Quick-absorbing dry oil elixir with cold-pressed rosehip, argan, and evening primrose oils for illuminated skin.",
        primaryImage: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80"
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
        descr: "TSA approved pocket size foaming cleanser for refreshed skin on the go.",
        primaryImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
        hoverImg: "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "13",
        name: "Travel-Size Velvet Mist",
        price: 14,
        type: "navbar-TravelType",
        category: "Travel",
        stars: 5,
        volume: "50 ml / 1.7 fl oz",
        descr: "Airplane cabin essential: instant soothing hydration at 30,000 feet.",
        primaryImage: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=600&q=80",
        hoverImg: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "14",
        name: "Mini Day Recovery Cream",
        price: 15,
        type: "navbar-TravelType",
        category: "Travel",
        stars: 4,
        volume: "30 ml / 1.0 fl oz",
        descr: "Compact botanical moisture barrier repair cream for daily travel protection.",
        primaryImage: "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=600&q=80",
        hoverImg: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
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
        descr: "Concentrated botanical Vitamin C with kakadu plum and green tea to brighten hyperpigmentation.",
        primaryImage: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=600&q=80",
        hoverImg: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "16",
        name: "Bakuchiol Natural Retinol Alternative",
        price: 48,
        type: "navbar-NewType",
        category: "Skincare",
        stars: 5,
        volume: "30 ml / 1.0 fl oz",
        descr: "Plant-derived 1% Bakuchiol stimulates cellular turnover and reduces fine lines without irritation.",
        primaryImage: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80",
        hoverImg: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "17",
        name: "Whipped Shea Souffle Body Butter",
        price: 34,
        type: "navbar-NewType",
        category: "Body Care",
        stars: 5,
        volume: "200 ml / 6.8 fl oz",
        descr: "Decadent whipped body butter with raw shea, mango seed, and organic vanilla bean.",
        primaryImage: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80",
        hoverImg: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80"
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
        primaryImage: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "21",
        name: "Organic Botanical Hydrating Crème",
        price: 35,
        type: "ourBestSellers",
        category: "Skincare",
        stars: 5,
        primaryImage: "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "22",
        name: "Rose Quartz Facial Sculpting Serum",
        price: 45,
        type: "ourBestSellers",
        category: "Skincare",
        stars: 5,
        primaryImage: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "23",
        name: "Pure Lavender Deep Sleep Elixir",
        price: 40,
        type: "ourBestSellers",
        category: "Wellness",
        stars: 5,
        primaryImage: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "24",
        name: "Cold-Pressed Rosehip Glow Seed Oil",
        price: 38,
        type: "ourBestSellers",
        category: "Skincare",
        stars: 5,
        primaryImage: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "25",
        name: "Clarifying Eucalyptus Scalp Purifier",
        price: 29,
        type: "ourBestSellers",
        category: "Haircare",
        stars: 5,
        primaryImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "26",
        name: "Botanical Silk Balancing Shampoo",
        price: 26,
        type: "ourBestSellers",
        category: "Haircare",
        stars: 5,
        primaryImage: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "27",
        name: "Nourishing Argan Deep Conditioner",
        price: 28,
        type: "ourBestSellers",
        category: "Haircare",
        stars: 5,
        primaryImage: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "28",
        name: "Sea Salt & Jasmine Botanical Soak",
        price: 30,
        type: "ourBestSellers",
        category: "Body Care",
        stars: 5,
        primaryImage: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "29",
        name: "Velvet Dew Ceramide Daily Lotion",
        price: 32,
        type: "ourBestSellers",
        category: "Body Care",
        stars: 5,
        primaryImage: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "30",
        name: "Wild Blueberry & Acai Antioxidant Crème",
        price: 36,
        type: "ourBestSellers",
        category: "Skincare",
        stars: 5,
        primaryImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80"
    },

    // ------------------------------------------------------------------------
    // INSTAGRAM SHOWCASE MARQUEE (HIGH-RES CURATED STOCK IMAGES)
    // ------------------------------------------------------------------------
    {
        id: "31",
        type: "iGPosts",
        primaryImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "32",
        type: "iGPosts",
        primaryImage: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "33",
        type: "iGPosts",
        primaryImage: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "34",
        type: "iGPosts",
        primaryImage: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "35",
        type: "iGPosts",
        primaryImage: "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "36",
        type: "iGPosts",
        primaryImage: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "37",
        type: "iGPosts",
        primaryImage: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "38",
        type: "iGPosts",
        primaryImage: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "39",
        type: "iGPosts",
        primaryImage: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "40",
        type: "iGPosts",
        primaryImage: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "41",
        type: "iGPosts",
        primaryImage: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: "42",
        type: "iGPosts",
        primaryImage: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=600&q=80"
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
        descr: "Invigorating citrus extract and organic verbena for an energizing morning shower experience.",
        primaryImage: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "44",
        name: "Wild Strawberry & Basil Body Wash",
        price: 16,
        type: "bodywash all",
        category: "Body Care",
        stars: 5,
        descr: "Naturally foaming wash infused with antioxidant strawberry fruit extracts and garden basil.",
        primaryImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "45",
        name: "Golden Turmeric Ayurvedic Body Wash",
        price: 17,
        type: "bodywash all",
        category: "Body Care",
        stars: 5,
        descr: "Ancient herbal formulation with turmeric, sandalwood, and sweet almond oil for velvety radiance.",
        primaryImage: "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "46",
        name: "Clarifying Neem & Tea Tree Body Wash",
        price: 15,
        type: "bodywash all",
        category: "Body Care",
        stars: 4,
        descr: "Antimicrobial botanicals targeting body blemishes while protecting natural skin flora.",
        primaryImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "47",
        name: "Rosemary & Spearmint Body Wash",
        price: 19,
        type: "bodywash all",
        category: "Body Care",
        stars: 5,
        descr: "Cooling botanical infusion that awakens your senses and cleanses deep without tightness.",
        primaryImage: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
    },

    // BODY LOTION
    {
        id: "48",
        name: "Hydrating Coconut & Shea Body Lotion",
        price: 18,
        type: "bodyLotion all",
        category: "Body Care",
        stars: 5,
        descr: "Ultra-absorbent daily moisturizer providing silky 24-hour hydration with pure virgin coconut.",
        primaryImage: "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "49",
        name: "Calming French Lavender Body Lotion",
        price: 17,
        type: "bodyLotion all",
        category: "Body Care",
        stars: 5,
        descr: "Enriched with organic lavender floral water and sweet almond oil to relax muscles and soothe skin.",
        primaryImage: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "50",
        name: "Mandarin & Blood Orange Body Lotion",
        price: 19,
        type: "bodyLotion all",
        category: "Body Care",
        stars: 4,
        descr: "Zesty citrus oils enriched with Vitamin E to energize dull skin and lock in supple moisture.",
        primaryImage: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "51",
        name: "Fragrance-Free Sensitive Skin Lotion",
        price: 16,
        type: "bodyLotion all",
        category: "Body Care",
        stars: 5,
        descr: "Dermatologist-tested hypoallergenic barrier repair lotion formulated for the most delicate skin.",
        primaryImage: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=800&q=80"
    },

    // BODY SCRUB
    {
        id: "52",
        name: "Pink Himalayan Salt & Rose Scrub",
        price: 19,
        type: "bodyScrub all",
        category: "Body Care",
        stars: 5,
        descr: "Mineral-rich crystalline pink salt steeped in damask rose oil to gently buff away dead cells.",
        primaryImage: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "53",
        name: "Walnut Shell & Raw Honey Body Polish",
        price: 18,
        type: "bodyScrub all",
        category: "Body Care",
        stars: 5,
        descr: "Crushed English walnut shells combined with raw wild honey and shea butter for radiant touch.",
        primaryImage: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "54",
        name: "Matcha Green Tea Detoxifying Scrub",
        price: 17,
        type: "bodyScrub all",
        category: "Body Care",
        stars: 5,
        descr: "Ceremonial Japanese matcha powder paired with cane sugar and sweet almond oil to purify pores.",
        primaryImage: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "55",
        name: "Coconut Cane Exfoliating Sugar Scrub",
        price: 19,
        type: "bodyScrub all",
        category: "Body Care",
        stars: 5,
        descr: "Warm coconut oil and golden cane crystals melt on damp skin to reveal baby-soft smoothness.",
        primaryImage: "https://images.unsplash.com/photo-1563178406-4cdc2923acbc?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=800&q=80"
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
        descr: "High-potency organic rosemary oil combined with vegan biotin and peptides to support thicker, fuller hair.",
        primaryImage: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "57",
        name: "Deep Restorative Hair Masque",
        price: 32,
        type: "haircare",
        category: "Haircare",
        stars: 5,
        volume: "200 ml / 6.8 fl oz",
        descr: "Intensive 10-minute treatment with cold-pressed abyssinian oil and babassu butter to resurrect dry strands.",
        primaryImage: "https://images.unsplash.com/photo-1526947425960-945c6e72858f?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "58",
        name: "Overnight Ceramide Recovery Sleeping Oil",
        price: 46,
        type: "skincare",
        category: "Skincare",
        stars: 5,
        volume: "30 ml / 1.0 fl oz",
        descr: "Restores the lipid barrier while you sleep, locking in moisture and delivering plumper skin by morning.",
        primaryImage: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "59",
        name: "Botanical Illuminating Eye Crème",
        price: 34,
        type: "skincare",
        category: "Skincare",
        stars: 5,
        volume: "15 ml / 0.5 fl oz",
        descr: "Infused with caffeine and hyaluronic acid to diminish puffiness and illuminate dark under-eye circles.",
        primaryImage: "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "60",
        name: "Calming Mineral Bath Salts with Lavender",
        price: 24,
        type: "wellness",
        category: "Wellness",
        stars: 5,
        volume: "400 g / 14 oz",
        descr: "Epsom and dead sea salts blended with dried French lavender buds to melt away daily stress.",
        primaryImage: "https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=800&q=80",
        hoverImg: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80"
    }
];

export default store;
